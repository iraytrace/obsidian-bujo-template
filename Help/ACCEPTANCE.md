# Current acceptance status

This is a Windows-developed starter for mobile trials, not a completed cross-platform
release. Status updated 2026-10-04. Use [device checks](ANDROID-TEST.md) before personal use.

| Area | Verified evidence | Remaining |
| --- | --- | --- |
| Offline journal | Original Windows creation/read/edit/navigation/restart | Revised QuickAdd offline restart; Android/iPhone/iPad |
| Views | Windows original filters/navigation; revised Future includes undated tasks/events | Undated-note exclusion, later-month regression, hidden filename entry opening, Collections label filter |
| New entry | Windows trial files observed; syntax and mocked creation/date/time/cancellation tests pass | Full revised UI sequence and each mobile device |
| Core-only fallback | Windows timestamp creation plus template insertion user-confirmed | Mobile |
| Manual sync | Two Windows vaults, fresh download, both directions, offline/retry, Bases/binary bytes | Android/iOS bootstrap and both directions; new script transfer |
| Conflicts | One Windows overlapping-note resolution with both originals preserved | Other Windows cases deferred; mobile conflicts |
| Backups | Windows complete filesystem copy/new-vault restore, all files SHA256 matched | Mobile restore; separate-storage test deferred |
| Packaging | Static checks for clean data folders, links, ASCII, navigation, archive bytes | Runtime device acceptance |
| Onboarding/upstream | Reviewed instructions; shared-history update design | First-time setup and personal-repo update trial |

Git Vault Sync reference: 0.2.24. QuickAdd trial: 2.30.0, minimum Obsidian 1.13.0.
Windows executable version: 1.13.7.0; exact in-app/device versions still need recording.
Community manifests/mobile claims are not actual device passes.

Each person owns an independent private repository. Starter Entries/Attachments contain
only .gitkeep. Device settings/credentials are not distributed. Additional Windows Git
recovery/deletion/failure-size trials were explicitly deferred, not passed. Full evidence
and historical steps remain in the implementation's Docs/VALIDATION.md.
