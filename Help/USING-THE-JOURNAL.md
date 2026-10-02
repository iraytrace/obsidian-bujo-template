# Use the journal

## Create an entry

1. Create a blank note in Entries. Give it a unique descriptive filename, such as
   2026-10-01-1430-plan-walk. Do not reuse another entry's filename on a second device.
2. Put the cursor at the beginning of the empty note body. Open Command palette and
   run Templates: Insert template; choose task, event, or note. On Windows, Ctrl+P opens
   Command palette. On mobile use the app's Command palette control; its exact placement
   is part of device testing. No desktop keyboard shortcut is required on a phone.
3. Fill description. Set scheduled if needed; remove it if unscheduled. Set task status
   to open, done, or cancelled. Add zero or one collection label. Keep long details in
   the body below the properties. The creation date is filled at insertion time.
4. Open its relevant view. Editing a table property updates the same Markdown entry.
   To complete a task, change status to done; Tasks deliberately still lists done tasks.

Templates are snippets, not entry files. Use Insert template rather than copying a
template into a log. The raw placeholders remain in Templates and are replaced in entries.
Do not duplicate a task when moving its date or assigning a collection.

## What each page shows

| Page | Included entries |
| --- | --- |
| Daily | created today OR scheduled today |
| Monthly | created OR scheduled during the current calendar month |
| Future | scheduled during a later calendar month |
| Tasks / Events / Notes | corresponding type |
| Collections | same entries grouped by collection |

These are live current-date views, not archived daily/monthly notes. After midnight or
a month boundary, their results change with the device date. For an old entry use file
explorer, Quick Switcher, or Search. Historical dated log pages are not implemented.
An entry created today and scheduled next month appears in Daily, Monthly, Future, and
its type view at once. This does not create copies. Daily/Monthly do not show every old
unscheduled unfinished task; use Tasks to review those.

Keep collection as a List with at most one label. Its blank group means no collection.
Multiple labels produce a combined group; separate multi-collection membership is out
of scope. The one-label convention is not enforced by the Properties editor.

The navigation strip is copied onto eight pages. Changing one strip does not update the
others. Maintain all eight when changing destinations. The package uses core features
and readable Markdown/YAML, with no custom CSS or network needed for entry use.
