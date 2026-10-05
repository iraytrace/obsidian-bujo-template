# Set up your first BuJo

This guide starts with no GitHub or Obsidian experience. Use fictional entries until
your devices pass the checks below. Windows testing is the reference; Android and
actual iPhone/iPad acceptance are still pending. No paid Obsidian Sync subscription
is needed for this workflow.

## What you are setting up

| Term | Meaning here |
| --- | --- |
| Obsidian | The app that reads and edits your journal |
| Vault | A local folder containing the journal and app settings |
| Git | Version history for files |
| GitHub repository | The online copy used to exchange changes between devices |
| Clone | A local copy that retains a repository's Git history |
| Fork | A GitHub copy linked to another repository's permissions/network |
| Design repository / upstream | Reusable pages, views, entry templates, scripts, and help; no journal data |
| Personal repository / origin | Your private copy, including your entries and attachments |

Each device has one complete vault and syncs only with your personal repository.
Design updates are a separate operation on a computer; phones do not need upstream.

## 1. Create your GitHub copy

Create a GitHub account at [github.com](https://github.com) if needed. Obtain the
design repository's HTTPS URL from its owner, or its green Code button > HTTPS.

For a personal journal, use an independent **private** repository with the original
Git history. This keeps later design updates possible without sharing your journal.
GitHub's Use this template creates separate history and is not the preferred route.

On GitHub, choose + > New repository. Choose your own account as Owner, name it
my-bujo, select Private, and leave Add README, .gitignore, and license unchecked.
Click Create repository. Copy its HTTPS URL from Code or the quick setup page.

On Windows, install [Git for Windows](https://gitforwindows.org/) if git is not
available. Open PowerShell. The following is a one-time setup; a trusted helper can
do it with you without receiving your phone token. Replace DESIGN-OWNER,
YOUR-GITHUB-NAME, and YOUR-WINDOWS-NAME before running each command separately.
Choose a new local folder outside OneDrive or any other automatic sync service.

```powershell
git clone https://github.com/DESIGN-OWNER/Portable-Bujo.git "C:\Users\YOUR-WINDOWS-NAME\Bujo"
Set-Location "C:\Users\YOUR-WINDOWS-NAME\Bujo"
git remote rename origin upstream
git remote add origin https://github.com/YOUR-GITHUB-NAME/my-bujo.git
git push -u origin main
```

Sign in through Git's authentication prompt if requested. Do not put a token in
a URL or command. Stop if any command fails; do not delete an existing vault or
force-push to repair it. Check GitHub: my-bujo is Private, main contains Dashboard,
Templates, Scripts, Help, and only .gitkeep in Entries/Attachments.

If you only have a phone/iPad, have a helper seed your independent private repository
with the design history first. Then use the fresh-vault download in step 2. The helper
does not need your device's token. Computer-based setup is documented; this new-user
onboarding sequence has not yet been independently trialed end to end.

### If you want to fork for a fictional test

Open the design repository on GitHub > Fork > select owner/name > Create fork.
Public repository forks remain public. Private forks have upstream-dependent access
and lifecycle. **Do not use a public fork for personal entries.** For a private
personal journal, follow the independent-copy route above instead. If a repository
you already made is a fork or was created using Use this template, see
[repository management](REPOSITORY-MANAGEMENT.md) before changing its history.

Sources: [GitHub forks](https://docs.github.com/en/pull-requests/reference/forks),
[GitHub templates](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template),
[repository duplication](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository).

## 2. Open or download your vault

Install [Obsidian](https://obsidian.md/download) on each device.

On the Windows computer used above: in Obsidian's vault switcher choose Open folder
as vault and select your Bujo folder. Do not create another Bujo inside it. Obsidian
adds its local .obsidian settings folder, which is excluded from Git.

On Android or a second device: create a new local vault named My Bujo through the
vault switcher. Use device storage outside another automatically synced folder.
Before adding entries, follow step 3 to install/configure Git Vault Sync and use
Initialize to download your populated private repository. Preserve any Welcome
note; no journal files need to be copied from the PC. A fresh Windows download was
verified; initial mobile download remains a device test. If Initialize is missing
or fails, save the exact message and get help before changing engines or resetting.

For iPhone/iPad, first read [iOS setup](SETUP-IOS.md) for local-storage limitations.
Do not assume the Android folder-opening process works on iOS.

[Obsidian vault instructions](https://obsidian.md/help/manage-vaults)

## 3. Install plugins and configure manual sync

In Settings > Community plugins, enable community plugins, choose Browse, search
for Git Vault Sync, then Install and Enable. Repeat for QuickAdd. These are separate
installs on every device; no plugin binaries or settings come with this repository.
Reference versions are Git Vault Sync 0.2.24 and QuickAdd 2.30.0. QuickAdd 2.30.0
requires Obsidian 1.13.0 or newer. Record your actual versions when testing.

In Settings > Git Vault Sync, disable Sync on startup and Auto-sync on a timer.
Leave engine Auto for the trial. Configure only your private repository HTTPS URL,
branch main, and GitHub username. Never configure the design URL here.

Create a token in GitHub > Settings > Developer settings > Personal access tokens >
Fine-grained tokens > Generate new token. Choose an expiration and Only select
repositories > my-bujo. Set Contents to Read and write; Metadata read is included.
Name each device's token separately, for example Bujo Android. Copy it straight
from your browser or password manager into the plugin's token field. Clear clipboard
history afterward. Never put it in a note, chat, screenshot, or Git remote URL.

Open Command palette (Ctrl+P on Windows; pull down from the top on mobile by default).
Run Git Vault Sync: Test connection to remote if available; it is a command, not
necessarily a settings button. On a fresh receiving vault use Initialize in plugin
settings. On an already cloned Windows vault, run Sync vault with Git. Wait for a
visible success result. See [sync and recovery](SYNC.md) if it fails.

Check the private remote and receiving device, not just the local status. .obsidian
and .trash must stay excluded. Keep startup/timer sync disabled after restart.
The plugin stores its token locally in plaintext; protect complete backups accordingly.

Sources: [Git Vault Sync](https://github.com/heeeyMan/ObsSync),
[GitHub tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

## 4. Set up BuJo inside Obsidian

Follow [local configuration](LOCAL-CONFIGURATION.md), then
[QuickAdd setup](QUICKADD.md). They cover the core plugins, entry/attachment folders,
property types, and the New entry command. Repeat them on every device, including
ones that successfully downloaded all the journal files.

Open Dashboard from the file list or Quick Switcher. Run QuickAdd: New entry, choose
Task, Event, or Note, and enter a fictional description. Filename and template are
automatic. Date is optional; event time is optional. Read
[using the journal](USING-THE-JOURNAL.md) for the meaning of each view.

## 5. Check your setup before personal use

Create one task, event, and note. Blank scheduled dates put only the task/event in
Future. Assign one collection label and check Collections; clear it and check it
disappears there. Navigate through the eight text links. Disconnect networking,
restart the app, create/edit/read entries, and verify they persist.

Reconnect. Explicitly sync device A, wait for success, then sync device B. Check the
same entries arrived. Edit on B, sync B, then A, and verify the return trip. Test a
small attachment too. Use [Android checks](ANDROID-TEST.md) for mobile evidence.

Set up [independent backups](BACKUP-RESTORE.md). Learn
[design updates](REPOSITORY-MANAGEMENT.md) before accepting an upstream update.
See [acceptance status](ACCEPTANCE.md) for what remains unverified.
