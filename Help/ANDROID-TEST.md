# Device acceptance checks

Android status: untested. Use fictional entries in a dedicated private trial repository.
Windows passes do not establish mobile behavior. For iOS, run this checklist separately
on actual iPhone and iPad. Start with [setup](FIRST-TIME-SETUP.md).

Record OS, Obsidian, Git Vault Sync, QuickAdd versions, engine, vault path, date/timezone,
and startup/timer settings. Phone model is optional. Never report tokens or private content.

| Check | Expected result | Outcome |
| --- | --- | --- |
| Fresh setup | Local vault, plugin install, startup/timer off, private-repo download | Pending |
| Local settings | Repeat local configuration and QuickAdd macro setup; Date/List/Text types correct | Pending |
| New entry | Type/description prompts create one timestamp file using the correct template | Pending |
| Optional dates | Task/note default blank, event defaults today; cancel creates no file | Pending |
| Event time | 14:30 saved as Text; blank omitted; invalid hour/minute prompts again | Pending |
| Navigation | Eight links on all major pages; bookmark/open Tasks directly | Pending |
| Entry opening | Open existing entry body with filename columns hidden | Pending |
| Offline restart | Disconnect, restart, create/edit/reopen each type; changes persist | Pending |
| Dated filters | Today-created task dated next month appears in Daily/Monthly/Future/Tasks, one file | Pending |
| Someday | Blank/missing scheduled task/event appear in Future; undated note does not | Pending |
| Same-month event | Later-this-month dated event stays out of Future and appears in Monthly | Pending |
| Collections | Assign one label: appears in group; clear label: disappears only from Collections | Pending |
| Windows to phone | Sync Windows then phone; entry and script/view bytes arrive intact | Pending |
| Phone to Windows | Edit on phone, sync phone then Windows; edit arrives | Pending |
| Attachment | Small synthetic PNG/PDF arrives and opens offline; compare downloaded bytes | Pending |
| Canonical editing | Table property edit updates original Markdown, no duplicated entry | Pending |
| Failure/retry | Offline sync visibly fails; reconnect/retry delivers edits without loss | Pending |
| Concurrent edit | Preserve both versions; conflict is visible and both versions recoverable | Pending |
| Restart settings | Startup/timer remain off; no credential/settings sharing | Pending |
| Backup/restore | Dated complete vault copy outside vault; restore new vault including hidden config | Pending |

Keep mobile Obsidian foregrounded until sync reports completion. Use a previewable
synthetic attachment; a binary byte fixture does not prove image/PDF viewing. No size
limit is accepted until tested. Record steps, result/error text, date, and recovery.
If a check fails, preserve work and stop dependent tests. Record actual evidence in
the implementation's validation log; documentation alone never changes Pending to Pass.
