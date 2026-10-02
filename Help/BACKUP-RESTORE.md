# Manual backup and restore

Status: Windows prototype file-copy restore verified; restored-vault app check user-verified.
Android and iPhone/iPad workflows are untested.

Close the vault in Obsidian before copying. Make a dated complete folder copy outside
the active vault and its Git repository. Include Entries, Attachments, Templates, .base
files, .obsidian, and local .git history. Copying only files tracked by Git omits settings
and may omit uncommitted entries. Never use synchronization as the only backup.

For the developer's fictional prototype, the implementation-only
Scripts/Test-PrototypeBackup.ps1 helper copies into new backup
and restore directories and compares every file using SHA256. It refuses existing
destinations, reparse points, and vaults with community plugins. This is a prototype
helper, not a general credential-sanitizing backup tool. A failed verification leaves
copies for inspection; do not regard them as verified backups.

The Windows trial created a dated backup and a separate restored vault on 2026-09-30.
All 100 files matched the source; source stability was checked before/after copying.
Exact developer test paths are recorded in the implementation's validation log, not
needed in a friend's vault. The package contains no backup copies or developer scripts.

Open the restore directory as another vault in Obsidian, with synchronization disabled.
Verify navigation, views, properties, edited entry content, Templates, Bookmarks, and
settings. Confirm the restored .git history is available independently of the original.
The binary fixture was verified by hash; it is not a previewable attachment.

The user confirmed the restored vault's navigation, filtered views, edited entries,
properties, Templates, and Bookmarks on 2026-09-30. Separate/off-device copy is pending.

Keep the backup folder unchanged. Make a second copy on separate storage, such as an
external drive; this local Desktop copy does not protect against loss of the PC. Verify
the separate copy too. For a personal vault, encrypt backups if they contain sensitive
notes or credentials, or remove credentials from a staging copy and document how to
re-enter them. Never alter the active vault to sanitize a backup. Review .git/config and
history as well as plugin settings for credentials. Keep encryption keys separately.

Recovering an individual note from Git history is a different recovery method; it does
not replace complete backups or restore testing. Device-specific mobile backup steps and
history-recovery instructions will be established during their respective trials.

## Backups after authentication

The plugin now stores a token locally. The old pre-authentication prototype copy procedure
must not be applied blindly to current vaults: unencrypted .obsidian/plugins/git-vault-sync/
data.json may contain credentials. Use encrypted storage/archives, or first create a
staging copy outside the active vault and omit that credential file from the copy. Never
delete it from the active vault. Record that plugin account/trigger settings need manual
restoration and re-enter a newly issued repository-scoped token locally. Verify that Git
history/config does not contain credentials. An ordinary ZIP does not encrypt its files.

## Proposed Android backup trial

Close the vault. Using a file manager that can access the selected local storage and show
hidden files, copy the complete vault tree to a dated folder outside the active vault.
Include .obsidian for the journal settings and API baseline, attachments and .base files;
handle token settings as above. Restore the copy to a different folder and open it as a
new vault, with automatic sync disabled and credentials cleared/re-entered deliberately.
Verify note text, image/PDF opening, types, Templates, navigation, Bases, and bookmarks.
If the file manager cannot copy hidden configuration or Obsidian cannot open the restored
folder, record the limitation; this backup route is not accepted until demonstrated.

## Proposed iPhone/iPad backup trial

Determine whether Files can access/export the complete local vault including hidden
configuration, without moving the active vault into iCloud. Copy/export into a dated
location outside the active vault, protect sensitive content, then restore into a new
local Obsidian vault. If app sandboxing prevents complete export or import, report exactly
what is missing and leave restore acceptance pending. No working iOS backup route has
been verified in this project. Separate/off-device copy testing was explicitly deferred.
