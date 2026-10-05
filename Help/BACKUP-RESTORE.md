# Back up and restore your journal

Synchronization is not your only backup: a mistaken edit/deletion can synchronize too.
Keep dated, complete vault copies outside the active vault and its Git repository.
Windows original copy/restore passed; mobile workflows below remain untested.

## Make a Windows backup

1. Finish any sync, then close the vault in Obsidian. Locate the actual vault folder
   in File Explorer; it contains Dashboard, Entries, Attachments, and .obsidian.
2. Enable Show hidden items so you can check .obsidian and .git if present. Copy the
   entire vault folder to a new dated destination, for example Bujo-2026-10-04, on
   protected storage outside the active vault. Never copy a folder into itself.
3. Include Entries, Attachments, Templates, Views, Logs, Scripts, Help, root pages,
   .obsidian, and .git if this device has local history. A Git-tracked-files-only
   copy omits settings and possibly unsynced data.
4. Protect the copy as described below. Check that important files/attachments are
   present, and test a restore. Keep the backup unchanged after making it.
5. When ready, keep another verified copy on separate storage, such as an external
   drive. A second folder on the same PC does not protect against PC loss.

## Protect credentials and private entries

Git Vault Sync stores a token in .obsidian/plugins/git-vault-sync/data.json. Complete
copies can contain it and any other plugin credentials. Prefer encrypted storage or
an encrypted archive; keep its key/password separately. Ordinary ZIP compression
does not encrypt. Password-protected encryption must cover the full backup, not
just the private entry files.

Alternatively, use a separate staging copy and omit credential-bearing files from
that copy. Never delete settings from the active vault to sanitize a backup. Review
other plugin settings and .git/config/history for credentials too. Record what was
omitted so you can reconfigure plugins and enter new tokens during restore. Do not
send complete credential-bearing vault copies to helpers or commit backups to Git.

## Test a restore

1. Copy/extract the backup into a new folder, not the active journal. For an authenticated
   restore, clear/re-enter credentials only in the restored copy; do not let it sync
   against the live journal during the test. Automatic startup/timer sync must be off.
2. Open that folder as another Obsidian vault. Check descriptions, long note bodies,
   attachments, navigation, property types, Bases, QuickAdd New entry, Templates,
   and bookmarks. Inspect history if .git was copied; mobile API vaults may not have it.
3. Compare restored files with the backup/source. Original Windows testing compared
   all 100 files by SHA256 and user-verified the restored app; revised QuickAdd and
   mobile restoration are not yet verified. Do not replace the live vault until the
   restored one works and you have preserved its current contents.

Restoring one older note from GitHub history is separate from full backup/restore;
see [sync recovery](SYNC.md). Design updates also need a backup first; see
[repository management](REPOSITORY-MANAGEMENT.md).

## Android trial

Close Obsidian. Use a file manager that can access your local vault and hidden files
to copy its complete tree to a dated destination outside the active vault. Protect
tokens/private content as above. Restore to another folder, open it as a new vault,
and perform the same checks. If hidden configuration or folder opening is blocked,
record exactly what is missing; acceptance remains pending.

## iPhone/iPad trial

Check whether Files can export/import the complete local vault including required
hidden settings without moving the active vault into iCloud. Preserve encryption
and credential handling. Restore to a new local vault and verify both devices.
App sandboxing or missing hidden files must be recorded as limitations. No complete
iOS backup route is verified yet. Separate/off-device copy testing was explicitly
deferred in the current project; it remains recommended, not a passed check.
