# Android acceptance trial

Status: untested. Use fictional entries in the disposable repository. A Windows-to-Windows
pass does not establish Android behavior. Work one check at a time and record failures.

Environment: phone/model __; Android __; Obsidian __; Git Vault Sync __;
engine __; vault path __; date/timezone __; automatic startup/timer options __.
Record repository identity without tokens. A token is never evidence to paste in a report.

| Check | Steps and expected result | Outcome |
| --- | --- | --- |
| Fresh setup | Local vault, store installation, disabled automation, connection and initial download | Pending |
| Core config | Repeat LOCAL-CONFIGURATION; dates are Date, collection is List | Pending |
| Navigation | Eight links on all major pages; bookmark/open Tasks directly | Pending |
| Offline use | Airplane mode, restart app, create task/event/note from templates, edit/reopen; all persist | Pending |
| Filters | Today-created task scheduled next month appears in Daily/Monthly/Future/Tasks, one file | Pending |
| Unscheduled | Remove scheduled; Future excludes it, type and creation-date views still work | Pending |
| Collections | One label then empty; correct group and blank group, no copy | Pending |
| Windows to phone | Create unique fictional Windows entry; sync Windows, then phone; contents match | Pending |
| Phone to Windows | Edit that entry on phone; sync phone, then Windows; contents match | Pending |
| Attachment | Attach a small synthetic PNG or PDF on Windows; sync to phone and open offline; compare bytes after download | Pending |
| Bases | Verify .base files arrive intact and render; edit table property and confirm original Markdown changes | Pending |
| Failure/retry | Offline sync reports failure without losing edits; reconnect/retry delivers them | Pending |
| Concurrent edit | Preserve both versions, edit same field on both, sync sequentially; conflict visible and both versions recoverable | Pending |
| Restart settings | App restart keeps automatic triggers off; no .obsidian distribution or token sharing | Pending |
| Backup/restore | Complete local vault copy including hidden config, outside active vault; restore into new phone vault and verify | Pending |

Use a previewable attachment: existing sample.bin only tests bytes and cannot demonstrate
image/PDF opening. No attachment-size limit is accepted until tested on this phone.
Mobile may suspend the app in the background; keep it foregrounded until explicit sync
reports completion. Do not count starting a sync as completion.

For each row record actual steps, success/error text, date, and any recovery. If a check
fails, preserve local work and stop dependent checks. Update Docs/VALIDATION.md with actual
device evidence; do not change Pending to Pass based on plugin documentation.
