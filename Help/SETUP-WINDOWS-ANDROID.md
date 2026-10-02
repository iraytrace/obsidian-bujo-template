# Windows and Android setup

Windows prototype: user-verified offline use, views, manual two-vault sync, reconnection,
visible offline failure/retry, one manual conflict resolution, and local backup/restore.
Android instructions below are documented/proposed and untested on an actual phone.
Do not enter personal journal data until the device trial passes.

## Start a new personal vault on Windows

1. Extract portable-bujo-android-trial.zip into a new local folder outside OneDrive,
   iCloud, any other automatically synchronized folder, and the implementation repository.
   Open the extracted Portable-Bujo folder as a vault in Obsidian. Do not extract over
   an existing journal. Entries and Attachments are intentionally empty.
2. Follow LOCAL-CONFIGURATION, then create an entry using USING-THE-JOURNAL. Test offline
   reading/editing first. Local use requires no Git or credentials.
3. For synchronization, create your own empty private GitHub repository. Leave README,
   license, and .gitignore initialization off. Each person has a different repository.
4. Install Git Vault Sync from Settings > Community plugins > Browse. Windows trial
   version was 0.2.24. Disable Sync on startup and Auto-sync on a timer before credentials.
5. Create an expiring fine-grained token with access only to this repository and Contents
   read/write. Enter it only in the plugin. Fill the HTTPS remote, branch main, and your
   GitHub username. Keep author name/email appropriate for your private history.
6. From Command palette run Git Vault Sync: Test connection to remote. An empty remote
   can report no branches. Then run Sync vault with Git once to publish the vault. This
   initial-empty-remote route is proposed for a non-Git package: the existing Windows
   prototype already had local Git. If the plugin requests initialization or fails,
   record the exact message and stop for diagnosis rather than overwrite the vault.
7. Verify Private status, branch main, entries, .base files, and no .obsidian on GitHub.
   A separate receiving vault must successfully download before relying on synchronization.

## Android trial: use the existing disposable test repository

Use the original Windows prototype and its existing private test repository for this
trial, not a personal vault and not the restored backup. Do not copy .obsidian from PC.

1. Install Obsidian on Android. Record phone model, Android version, and Obsidian version.
   Create a new local vault named Bujo Android Test in device storage. Record the exact
   folder path. Avoid a folder automatically synchronized by another service.
2. Install Git Vault Sync through Community plugins. Record its version. Disable Sync
   on startup and Auto-sync on a timer. Leave Sync engine on Auto; mobile is documented
   to use GitHub API, a different implementation from the Windows engine.
3. In GitHub, create a separate expiring fine-grained token for the phone, restricted to
   the existing disposable repository, Contents read/write. Enter it locally in Obsidian.
   Do not send it in chat or transfer the PC's plugin settings file.
4. Configure the test repository HTTPS URL, main, and account username. Run Test connection
   to remote from Command palette, then use Initialize if available for the fresh download.
   The Windows Initialize route is verified; the mobile bootstrap is not. If missing or
   unsuccessful, stop and report the exact screen/message. Do not force the Git engine
   or install another plugin as a silent workaround.
5. After download, follow LOCAL-CONFIGURATION on the phone. Core settings and plugin
   settings are not synchronized. Confirm Dashboard and filtered views render. Empty
   Daily results can be correct for old fixtures: inspect created/scheduled dates.
6. Execute ANDROID-TEST in order. Report actual results before moving to personal use.

## First Android step for the current trial

Create the local phone vault and install the plugin with both automatic options off.
Report phone model, Android/Obsidian/plugin versions, and local vault path. Authentication
and initial download are the following diagnostic, not assumed complete.

Sources: [Git Vault Sync](https://github.com/heeeyMan/ObsSync),
[GitHub tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens),
[Obsidian vaults](https://obsidian.md/help/manage-vaults).
