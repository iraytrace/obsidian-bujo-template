# Windows and Android setup

Use [first-time setup](FIRST-TIME-SETUP.md) for the complete sequence: private repository
with shared history, vault creation, plugins/tokens, and local configuration. This page
records platform details rather than repeating those steps.

## Windows

Open the cloned personal folder as a vault, or use Git Vault Sync Initialize to
download a populated private repository into a fresh vault. Fresh Windows download
was user-verified in the disposable trial. The starter has only .gitkeep placeholders
in Entries/Attachments. Personal entries belong in your own private repository.
Avoid OneDrive or another automatic sync service for the active folder.

Complete [local configuration](LOCAL-CONFIGURATION.md) and [QuickAdd setup](QUICKADD.md).
Use Ctrl+P for Command palette. Point normal sync only at your private repository;
the design remote is for deliberate computer updates, not the plugin.

A ZIP also works for local use but has no Git history. If later upstream merges
matter, use the history-preserving repository setup. Uploading a ZIP or using Use
this template does not preserve a shared ancestor.

## Android

Create a fresh vault on local device storage. Record Android, Obsidian, Git Vault
Sync, QuickAdd versions, vault location, and timezone. Phone model is optional unless
a device-specific problem occurs. Use a separate expiring token restricted to the
private trial repository. Keep startup/timer sync off and engine Auto.

Use plugin Initialize to download; follow first-time setup if the control is missing
or fails. Mobile's documented GitHub API engine skips .obsidian. Repeat core settings,
property types, plugin installs, and QuickAdd macro configuration. Do not copy PC
credential/settings files. Pull down for Command palette by default; add New entry
to the mobile editing toolbar if desired.

Check Dashboard/type views, then run [Android checks](ANDROID-TEST.md) one at a time.
Windows original offline/manual-sync checks and undated Future inclusion are verified;
revised onboarding and actual Android operation are untested. Use fictional entries
before personal use. Keep a receiving vault and an independent backup separate.

Sources: [Obsidian mobile](https://obsidian.md/help/mobile),
[Git Vault Sync](https://github.com/heeeyMan/ObsSync).
