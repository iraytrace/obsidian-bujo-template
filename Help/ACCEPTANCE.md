# Release acceptance

Package status: Android trial build, not a completed cross-platform release.

| Area | Current evidence | Remaining |
| --- | --- | --- |
| Local journal | Windows user-verified views, canonical edits, dates, navigation, offline restart | Android and actual iPhone/iPad |
| Windows sync | Two-vault manual sync in both directions, fresh download, byte integrity, offline/retry | Packaged non-Git initial publish route |
| Conflict | One Windows overlapping-note manual resolution with recovery copies | Other cases deferred; mobile behavior |
| Backups | Windows complete copy and new-vault restore; SHA256 all files | Mobile complete copy/restore; separate storage test deferred |
| Configuration | Windows prototype settings; no .obsidian shipped/shared | Reproduce manual setup on each mobile device |
| Template | Empty Entries/Attachments, reviewed views, no plugin bundles/settings | Android package import/creation and actual device checks |

Windows Git deletion/history, additional failure and size-limit trials are deferred at
the user's request, not marked passed. Separate-storage backup remains deferred. Use
ANDROID-TEST for actual-device evidence; iOS steps remain untested until executed.
The package contains no personal journal entries. Each user's active vault and private
remote remain separate from this implementation repository.
