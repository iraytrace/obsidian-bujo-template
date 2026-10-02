# iPhone and iPad setup

Status: documented/proposed, untested on actual iPhone/iPad. This is a trial guide, not
a verified promise. Use fictional content and a separate private repository owned by
the friend. No developer tools, command line, BRAT, paid sync, or native Git are required
by the proposed workflow; ability to complete every step still needs actual-device proof.

1. Install Obsidian on both devices. Record hardware, iOS/iPadOS, Obsidian and plugin
   versions. Create an on-device local vault on the first device. Turn off Store in iCloud
   if that option is offered. Record storage location. If local storage cannot be selected
   or inspected, stop and report it rather than combine iCloud and Git synchronization.
2. Obtain the package ZIP and extract into a new local folder. Determine whether this
   Obsidian version can open the extracted folder as a vault, or whether Files can move
   its contents into the newly created local vault. Copy all package contents, including
   .gitignore, but no .obsidian is supplied. Hidden-file visibility and sandbox access
   must be verified; do not assume the Android/Windows copying route works on iOS.
3. If local import is blocked, a trusted helper can seed the friend's own private remote
   with the sanitized package. The friend can then attempt plugin initialization into
   an empty local vault. This fallback is proposed, not tested; never seed it with another
   person's entries or credentials, and never send a token to the helper.
4. Follow LOCAL-CONFIGURATION. Install Git Vault Sync through Community plugins. Disable
   startup and timer sync. If the store does not offer it or enabling it fails, stop.
5. Create the friend's own empty private GitHub repository (or use their seeded one).
   In a browser, create an expiring fine-grained token restricted to that repo, Contents
   read/write. Enter it only into this device's plugin. Fill HTTPS URL, main, and username.
6. Test connection through Command palette. For an existing populated remote, try
   Initialize; for a locally imported package and empty remote, try explicit Sync once.
   These bootstrap actions require device testing. Report exact messages if unsuccessful.
7. Check remote Private status and absence of .obsidian. Create an empty local vault on
   the second device; install/configure the plugin independently with a separate token,
   then download. Repeat LOCAL-CONFIGURATION: plugin and core settings do not transfer.
8. Test both sync directions, offline app restart and entry creation, attachments, Bases,
   conflict handling, failure/retry, direct navigation, and manual backup/new-vault restore.
   Use the ANDROID-TEST checklist adapted to each actual device, not an emulator.

Sync through its ribbon command (or Command palette) while Obsidian remains foregrounded.
No automatic-sync fallback is authorized. If one-button manual sync or initial setup
fails, report the limitation; preserve the offline journal rather than silently substitute
an untested plugin. Independent complete-vault backup/export through Files also needs
device proof; inability to access hidden settings must be recorded as a restore limitation.

Source for platform claims and engine/config limits:
[Git Vault Sync](https://github.com/heeeyMan/ObsSync).
