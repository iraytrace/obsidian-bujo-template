# Configure New entry

QuickAdd replaces inventing a filename and manually inserting a template. It runs
the supplied local Scripts/New-Entry.js script; it needs no AI service, network,
Templater, or paid subscription. Reference version: QuickAdd 2.30.0, requiring
Obsidian 1.13.0+. Mobile support is documented; actual Android/iOS tests are pending.

## Configure once on each device

1. Settings > Community plugins > Browse > search QuickAdd > Install > Enable.
2. Confirm Scripts/New-Entry.js and Templates/task.md, event.md, note.md are present
   in your vault. A fresh clone includes them; do not copy someone else's .obsidian.
3. Settings > QuickAdd > New choice > Macro. Name it New entry. In older layouts,
   type the name, select Macro, add it, then open its gear/Configure control.
4. In its Macro builder, add a User Script command. Browse for Scripts/New-Entry.js
   or enter that vault path and select Add. Do not choose the entry templates as scripts.
5. Keep Run on startup off. Set One-page input to Never if offered: the script asks
   its own questions. Enable the choice's command-palette/lightning toggle.
6. Open Command palette and run QuickAdd: New entry. If it is not listed, check the
   choice's command toggle and that QuickAdd is enabled. QuickAdd: Run > New entry
   is another way to launch it. If the script is missing, download/sync the files first.

On Windows, Ctrl+P opens Command palette. On mobile, pull down from the top of the
app (default Quick Action). You can pin New entry in Settings > Command palette.
On Android, Settings > Mobile > Manage toolbar options > Add global command lets
you add QuickAdd: New entry to the editing toolbar. This control needs device testing.

## What it asks

| Prompt | What to enter |
| --- | --- |
| Type | Task, Event, or Note |
| Description | A short summary; blank cancels creation |
| Scheduled date | YYYY-MM-DD or blank; tasks/notes default blank, events default today |
| Event time | Optional HH:mm, 24-hour, such as 14:30; blank means no specific time |

For tasks/events, blank date means someday; entering someday is an alias for blank.
For notes, blank date simply means unscheduled. Invalid dates/times prompt again.
Cancel any prompt to create nothing. Do not use year 0000 as a substitute date.

The action reads the matching template, supplies today's creation date, keeps task
status open, and creates one timestamp-named Markdown file in Entries. It opens that
entry. Local filename collisions get a suffix; separate offline devices can still
collide, so preserve both copies if synchronization reports a conflict.

Optional scheduled dates stay Date properties; time is quoted Text. Time is a local
wall-clock value with no timezone conversion, reminder, or notification. Assign a
collection afterward in the entry's Properties panel; keep zero or one list label.

## First check

Create a fictional undated task and event; both should appear in Future and their
type views. Create an undated note; it should appear in Notes, not Future. Try a
dated event with 14:30, and cancel another creation. Check one file exists per entry.
Restart offline and repeat before trusting it on a new device.

Windows trial evidence includes created entries and user-confirmed undated task/event
Future inclusion. Script syntax and mocked logic tests pass. The complete revised
prompt sequence, Collections changes, and each mobile platform still need acceptance
checks; see [status](ACCEPTANCE.md).

Sources: [QuickAdd macros](https://quickadd.obsidian.guide/docs/Choices/MacroChoice/),
[Obsidian mobile controls](https://obsidian.md/help/mobile).
