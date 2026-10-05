# Use your journal

Finish [first-time setup](FIRST-TIME-SETUP.md) and [QuickAdd setup](QUICKADD.md).
Your journal lives in local Markdown files and works offline after setup.

## Create and edit an entry

Run QuickAdd: New entry. Choose Task, Event, or Note, enter a description, and answer
the optional date/time prompts. Filename and template are automatic. On Windows
use Ctrl+P; on mobile pull down for Command palette by default. The complete workflow
still needs actual-device verification on mobile.

Use a blank date for a someday task/event or an unscheduled note. For tasks/events,
the word someday is also accepted. Events default to today's date; clear it if undated.
Event time is optional 24-hour HH:mm and supplies no reminder. Task status starts open;
set done or cancelled later. Tasks currently includes all three states.

Add zero or one collection label in the entry's Properties panel, keeping its type
List even for one label. Write longer details below the properties. Editing a table
property edits the same Markdown file. Do not copy entries between logs or create a
second entry when changing a date, description, or collection.

The New button inside a Bases table is different: it does not run our QuickAdd
workflow, apply the full template, or generate our timestamp name. Use New entry.
A two-command core-only fallback is in [local configuration](LOCAL-CONFIGURATION.md).

## What each page shows

| Page | Included entries |
| --- | --- |
| Daily | Created today OR scheduled today |
| Monthly | Created OR scheduled in the current calendar month |
| Future | Scheduled in a later month, plus undated tasks/events |
| Tasks / Events / Notes | Corresponding type; no redundant type/filename column |
| Collections | Only labeled entries, grouped by collection |

An entry may appear in several views, but remains one file. Monthly showing an
undated entry created this month is expected. Undated notes stay out of Future.
Blank time does not affect date-based views. Dated commitments later this month
belong in Monthly rather than Future.

Daily/Monthly are live current-date views, not archived pages for each day/month.
Older undated items may disappear from them; use Tasks, Events, Notes, Search, or
Quick Switcher. Future currently includes done/cancelled undated tasks too; narrowing
that status policy would be a separate design decision.

Collections organize related entries such as Exercise, Reading, or a project. Clear
a label to hide the entry only from Collections. Multiple labels produce one combined
group; independent membership is not implemented. Grouping does not automatically
calculate habit frequency or quantities; those need a defined tracking scheme.

## Open entries and navigate

Eight text links on each major page open Dashboard, Daily, Monthly, Future, Tasks,
Events, Notes, and Collections. Bookmark any destination directly. The links: prefix
reduces initial cursor placement on Dashboard; Reading view prevents navigation edits.
The strip is repeated on eight pages, not centrally updated.

Filename columns are hidden. To open an entry's body, use the row's Open file/context
action if available, or find its description through Search (Ctrl+Shift+F on Windows).
QuickAdd opens new entries immediately. Row-opening without a filename column needs
checking on each device.

Entries/Attachments retain empty .gitkeep placeholders; Git also tracks your actual
personal data. Keep generated filenames when editing summaries; description is the
readable title. Timestamps reduce collisions but are not globally unique across
offline devices. Preserve both versions if a creation conflict occurs.

Use [manual sync](SYNC.md) between devices, [independent backups](BACKUP-RESTORE.md)
for recovery, and [repository management](REPOSITORY-MANAGEMENT.md) for design updates.
