# Configure each device

Start with [first-time setup](FIRST-TIME-SETUP.md). .obsidian is neither distributed
nor synchronized; repeat this checklist on each device. Menu placement varies by version.

## Core settings

1. Settings > Core plugins: enable Bases, Templates, Bookmarks, Properties view,
   Command palette, and File recovery. File recovery is local recovery, not a backup.
2. Settings > Templates: Template folder location = Templates; Date format = YYYY-MM-DD.
   Leave template placeholders intact; edit properties in actual entries instead.
3. Settings > Files and links: Default location for new notes = specified folder Entries;
   Default location for new attachments = specified folder Attachments. Both folders
   should exist; .gitkeep preserves them in Git and is not an entry.
4. Configure [QuickAdd New entry](QUICKADD.md). Create a fictional entry, then use
   each property's icon in its Properties panel to check the following types:

| Property | Type | Meaning |
| --- | --- | --- |
| type | Text | task, event, note |
| created | Date | YYYY-MM-DD; creation date |
| scheduled | Date | Optional YYYY-MM-DD; blank/absent means undated |
| time | Text | Optional HH:mm; event time |
| status | Text | task: open, done, cancelled |
| collection | List | Empty or one label |
| description | Text | Short readable summary |

No someday checkbox is required. Undated tasks/events are someday items in Future;
undated notes stay out. A property's type applies across the local vault, but must
be checked on each device. Check optional properties after creating an entry that
uses them. Leave optional dates absent instead of writing a fake date.

Open Dashboard, Daily, Tasks, and Notes. Empty tables are normal in a fresh vault.
Bookmark Dashboard or a preferred view. Use Reading view for navigation pages if
you do not want to edit links; links: merely moves Dashboard away from the cursor's
initial position. Ctrl+click links in editing mode on Windows.

## Sync settings

Follow [first-time setup](FIRST-TIME-SETUP.md) for Git Vault Sync and your device's
token. Keep startup/timer sync off. Retain .gitignore with .obsidian/ and .trash/
excluded; configure the same plugin exclusions if offered. Entries and Attachments
must NOT be excluded in a personal vault. Leave engine Auto for platform testing.
Do not combine this vault with another automatic sync service. Restart once and
confirm automatic options remain off.

## Optional core-only entry creation

If QuickAdd is unavailable, enable Unique note creator. Settings > Unique note creator:
New file location = Entries; Filename format = YYYYMMDD-HHmmss-SSS; Template file
location = blank. Run Create new unique note, then Templates: Insert template and
choose task/event/note. Fill description and remove scheduled if undated. Ordinary
New note and Bases New do not run this sequence. The fallback was user-verified on
Windows; mobile remains untested.

Reference Windows executable: 1.13.7.0; Git Vault Sync 0.2.24; QuickAdd 2.30.0.
Record actual app/plugin versions; newer versions need their own checks.
Sources: [Properties](https://obsidian.md/help/properties),
[Templates](https://obsidian.md/help/plugins/templates),
[Unique note creator](https://obsidian.md/help/plugins/unique-note).
