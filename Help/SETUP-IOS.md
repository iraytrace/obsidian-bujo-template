# iPhone and iPad setup

Documented/proposed, untested on actual iPhone/iPad. This is not a verified cross-platform
release. Begin with fictional entries in the friend's own private repository. Read
[first-time setup](FIRST-TIME-SETUP.md) for GitHub and plugin basics.

1. Seed the private repository with design history using the setup guide's computer
   procedure. A helper may do this before personal content exists; the friend enters
   device tokens privately. Periodic design updates still need a computer.
2. Install Obsidian. Record iOS/iPadOS, app/plugin versions, storage location, and timezone.
   Create a local vault. Turn off Store in iCloud if offered. If local placement is
   unavailable, stop before mixing Git and iCloud synchronization.
3. Install Git Vault Sync. Disable startup/timer sync, leave engine Auto, and enter
   the private repository URL/main/username and a separate expiring repository-scoped
   token. See first-time setup for permissions.
4. Test connection from Command palette if offered; try Initialize for the populated
   repository. This bootstrap needs device proof. If missing or unsuccessful, preserve
   the vault and report the exact screen/message before changing engines or resetting.
5. Complete [local configuration](LOCAL-CONFIGURATION.md), including installing QuickAdd
   and configuring [New entry](QUICKADD.md). Scripts/Templates/Help must have downloaded;
   .obsidian does not. Never transfer another device's credential settings.
6. Check navigation, QuickAdd, dates/times, Future, Collections, and offline restart.
   Set up the second device independently, then test both sync directions, attachments,
   conflicts, visible failures/retry, and backup/restore. Adapt [device checks](ANDROID-TEST.md)
   to iPhone and iPad separately; actual hardware is required.

Mobile pull-down defaults to Command palette; toolbar/menu placement needs device
checks. Keep Obsidian foregrounded until sync finishes. Plugin/bootstrap failures
are limitations to record, not grounds for silently choosing another sync service.

ZIP import is an optional local-use route, not the main sync setup. Files access to
hidden files, extraction into local storage, and opening that folder must be tested
on iOS. Do not assume Windows/Android steps apply. [Backup/restore](BACKUP-RESTORE.md)
has similarly unverified complete-vault export requirements.

Sources: [Git Vault Sync](https://github.com/heeeyMan/ObsSync),
[Obsidian mobile](https://obsidian.md/help/mobile).
