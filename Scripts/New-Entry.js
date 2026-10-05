// QuickAdd user script. Uses only local Obsidian vault APIs.
module.exports = async ({ app, quickAddApi }) => {
    const type = await quickAddApi.suggester(
        ["Task", "Event", "Note"], ["task", "event", "note"]
    );
    if (!type) return;
    if (!["task", "event", "note"].includes(type)) throw new Error("Invalid entry type.");
    const description = await quickAddApi.inputPrompt("Description");
    if (description == null || !description.trim()) return;

    const pad = (number, length = 2) => String(number).padStart(length, "0");
    const localDay = date => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    let scheduled = "";
    let time = "";
    {
        let label = type === "event" ? "Event date" : "Scheduled date (optional)";
        let defaultValue = type === "event" ? localDay(new Date()) : "";
        while (true) {
            const answer = await quickAddApi.inputPrompt(label,
                type === "note" ? "YYYY-MM-DD; blank for unscheduled" : "YYYY-MM-DD; blank or someday for someday", defaultValue);
            if (answer == null) return;
            scheduled = answer.trim();
            if (!scheduled) break;
            if (type !== "note" && scheduled.toLowerCase() === "someday") {
                scheduled = "";
                break;
            }
            const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(scheduled);
            if (match) {
                const [, year, month, day] = match.map(Number);
                const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
                const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (year > 0 && month >= 1 && month <= 12 && day >= 1 && day <= days[month - 1]) break;
            }
            label = "Invalid date. Enter YYYY-MM-DD, someday, or blank";
            defaultValue = scheduled;
        }
    }
    if (type === "event") {
        let label = "Event time (optional)";
        let defaultValue = "";
        while (true) {
            const answer = await quickAddApi.inputPrompt(label, "HH:mm (24-hour); blank for no specific time", defaultValue);
            if (answer == null) return;
            time = answer.trim();
            if (!time || /^([01]\d|2[0-3]):[0-5]\d$/.test(time)) break;
            label = "Invalid time. Enter HH:mm from 00:00 to 23:59";
            defaultValue = time;
        }
    }

    const template = app.vault.getAbstractFileByPath(`Templates/${type}.md`);
    if (!template) throw new Error(`Missing Templates/${type}.md. No entry created.`);
    const source = await app.vault.read(template);
    if (!/^description:.*$/m.test(source) || !source.includes("{{date:YYYY-MM-DD}}")) {
        throw new Error("Entry template is missing description or creation date. No entry created.");
    }
    const now = new Date();
    const day = localDay(now);
    const stamp = `${day.replace(/-/g, "")}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}-${pad(now.getMilliseconds(), 3)}`;
    const content = source.replace(/\{\{date:YYYY-MM-DD\}\}/g, day)
        .replace(/^scheduled:.*\r?\n/m, "")
        .replace(/^time:.*\r?\n/m, "")
        .replace(/^someday:.*\r?\n/m, "")
        .replace(/^description:.*$/m, () => `${scheduled ? `scheduled: "${scheduled}"\n` : ""}${time ? `time: "${time}"\n` : ""}description: ${JSON.stringify(description.trim())}`);

    if (!app.vault.getAbstractFileByPath("Entries")) await app.vault.createFolder("Entries");
    let file;
    for (let suffix = 0; !file; suffix++) {
        const path = `Entries/${stamp}${suffix ? "-" + suffix : ""}.md`;
        if (app.vault.getAbstractFileByPath(path)) continue;
        try {
            file = await app.vault.create(path, content);
        } catch (error) {
            // Another invocation may have created this path while we waited.
            if (!app.vault.getAbstractFileByPath(path)) throw error;
        }
    }
    await app.workspace.getLeaf(false).openFile(file);
};
