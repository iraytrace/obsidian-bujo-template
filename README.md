# Portable BuJo

An offline-first Bullet Journal for Obsidian. Create each task, event, or note once;
compact logs show filtered views of the same entry. No paid sync subscription is required.

**New to GitHub or Obsidian? Read [the complete setup guide](Help/FIRST-TIME-SETUP.md).**
It explains private repository creation, cloning versus forking, vault setup, plugin
installation, and your first entry. For later updates, read
[personal repository management](Help/REPOSITORY-MANAGEMENT.md).

In Obsidian, open [START-HERE](START-HERE.md) or [Dashboard](Dashboard.md).
README is this GitHub overview; START-HERE is the short in-vault launch page. Both
lead to the same setup guide, so there is only one onboarding procedure to maintain.

## Journal workflow

- QuickAdd: New entry asks for type/description, optional date, and optional event time.
- Filenames and templates are automatic; data stays readable Markdown/YAML.
- Future includes undated tasks/events; undated notes stay out.
- Collections shows only entries with a collection label.
- Sync manually to your private repository using Git Vault Sync; automation stays off.

Install and configure both plugins on each device; no plugins/settings/tokens are shipped.
Entries and Attachments start with empty .gitkeep placeholders. Your personal repository
tracks your data; the design repository publishes only reusable files. Public forks are
public: choose the setup guide's independent private copy for a real journal.

Windows original offline/manual-sync/restore checks and revised undated Future inclusion
are user-verified. QuickAdd logic checks pass. Actual Android/iPhone/iPad tests, revised
onboarding/upstream updates, and some new view checks remain pending. Use fictional
entries until your device checks pass; see [acceptance](Help/ACCEPTANCE.md).

[Use the journal](Help/USING-THE-JOURNAL.md) | [Sync](Help/SYNC.md) |
[Backup and restore](Help/BACKUP-RESTORE.md)
