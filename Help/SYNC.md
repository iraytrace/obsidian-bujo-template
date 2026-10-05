# Manual sync and recovery

Start with [first-time setup](FIRST-TIME-SETUP.md) for plugin/token configuration.
This guide is for everyday device synchronization. [Design updates](REPOSITORY-MANAGEMENT.md)
are a separate computer operation; configure the plugin only with your private repository.

## Normal use

Press the Git Vault Sync circular-arrows ribbon action, or run Sync vault with Git in
Command palette. The ribbon is documented; command-palette sync is Windows user-verified.
Mobile ribbon placement and one-button operation still need testing. Keep Sync on startup
and Auto-sync on a timer off on every device. Recheck after updates/restarts.

Before moving between devices: sync the device you just edited, wait for success, then
sync the next device before editing. After editing, sync it again. Keep the mobile app
foregrounded until finished. New offline entries should use unique filenames.

Offline creation/reading/editing works locally. Offline Sync should show a failure;
reconnect and retry explicitly. Windows failure/retry and delivery passed. A local commit,
matching local branch reference, or an attempted sync is not proof of upload. Confirm
success and check the receiving device. The remote is history/synchronization, not the
sole independent backup.

.obsidian and .trash are excluded. Core settings, property types, bookmarks, plugin
installation, credentials, and QuickAdd macro configuration are set separately per device.
Markdown entry YAML, attachments, .base files, and the supplied Scripts/New-Entry.js
are shared. Do not copy .obsidian to configure another device. Mobile Auto is documented to use
GitHub API; it does not provide the desktop selective commit preview or full local Git
history. A successfully downloaded Windows file does not prove mobile behavior.

## Concurrent edits

If both devices were edited before syncing, first preserve complete copies or at least
both affected notes outside the active vaults. Avoid copying plaintext tokens into an
unencrypted backup. Sync one device, then the other; inspect any conflict dialog.

Windows overlapping-edit test passed with both versions preserved: Edit manually showed
both description variants. Replace only the conflict block with valid YAML/text retaining
the intended result, remove all <<<<<<< / ======= / >>>>>>> markers, and use Resolve & sync.
Do not duplicate YAML property names. Then sync the other vault and inspect the resulting
note. Saved originals provide recovery if a wrong choice is made. Use local/remote choices
only after inspecting both versions; they select one version, not a combination.

Conflict cancellation, edit/delete conflicts, binary conflicts, and mobile conflict UI
are deferred/untested. For unfamiliar cases stop, save both originals, and request help.
Do not force-push, hard-reset, re-clone, or repeatedly press Sync as routine conflict repair.

## Other failures

| Situation | Action | Evidence |
| --- | --- | --- |
| Offline/unreachable remote | Keep local work; reconnect and retry; inspect success | Windows offline/retry passed |
| Expired/revoked token | Issue a replacement scoped to the same repo; update locally and test connection | Procedure documented; failure trial deferred |
| Interrupted sync/app closure | Preserve local work, inspect status/history, then retry when stable; compare receiving content | Untested |
| Large attachment | Preserve original outside vault, inspect error; do not assume LFS or an unlimited size | No accepted size limit; mobile memory risk |
| Missing attachment | Check actual file path and entry link, Git history and independent backup before recovery | Untested |
| Deleted/older note | Recover the desired version separately, inspect it, then restore deliberately and sync | Procedure below; trial deferred |

Use the plugin's Show last error command if present; redact tokens, authentication headers,
and private note content before sharing diagnostics. Never post data.json. After failed
sync, do not label the remote copy as current until upload and receiving content are checked.

## Recover an earlier note without a terminal

In the private repository's GitHub web interface, open commit history and the commit
before the undesired edit/deletion. Browse its file tree, open the required note, and
download/copy that historical version to a separate local folder. Inspect it before
replacing an active note. If using a different filename in Entries it becomes another
entry; keep a recovery copy outside Entries until deciding how to restore it. Preserve
the current note before overwriting. Restore the intended filename locally and run manual
Sync, then sync the other device. This is documented but not tested in this project.
Binary recovery should download the file; copying rendered text cannot recover its bytes.

## Tokens and updates

Use fine-grained tokens with expiration, only the person's own private repo, Contents
read/write. Prefer a different token per device so one can be revoked independently.
Tokens are stored plaintext in this plugin's local settings; keep .obsidian excluded,
and encrypt or sanitize any complete backup taken after authentication.

For rotation, create a replacement at GitHub, update the relevant device locally, test
connection/sync, then revoke the old token. For suspected compromise revoke immediately,
then replace. If a token entered Git history, revoke it; merely deleting the current file
does not remove old commits. Never put tokens into remote URLs, chat, or shell commands.
Record versions before updates and rerun manual trigger/transfer checks afterward.

Sources: [Git Vault Sync](https://github.com/heeeyMan/ObsSync),
[GitHub token management](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
