# Personal journal and design updates

Your personal repository contains the whole vault. Entries and Attachments belong
to you. Design files also live there so every device receives the same design version.
Devices pull/push only your private repository. Updating the design is a separate,
deliberate operation on a computer; the phone needs no upstream configuration.

## Ownership convention

| Files | Who maintains them |
| --- | --- |
| Entries/, Attachments/ | You; these must be tracked in your personal repository |
| Dashboard, Logs/, Views/, Templates/, Scripts/, Help/, README, START-HERE | Design project; your customizations may conflict with updates |
| .obsidian/, .trash/ | Local device settings/trash; excluded from synchronization |

The design repository contains only empty .gitkeep placeholders in Entries and
Attachments. It must never publish journal data or change/delete a user's content.
Its .gitignore must allow personal entries: ignoring those directories in the starter
would prevent clones from syncing their journals. Only a disposable local test vault
may use ignore rules for its test data. Do not copy test-bujo's ignore rules into your
personal vault. Git ignore rules do not remove already tracked files from history.

## Set up the computer once

The setup guide names your private remote origin and the design remote upstream.
A remote is simply a saved repository address, not another local vault/repository.
If the private vault was cloned elsewhere and has no upstream, close Obsidian and
open PowerShell in that vault folder. Inspect before adding anything:

```powershell
git status --short
git remote -v
git remote add upstream https://github.com/DESIGN-OWNER/Portable-Bujo.git
git fetch upstream
git merge-base HEAD upstream/main
```

Replace the design owner in the URL. origin must remain your private repository.
If upstream already exists, inspect its URL instead of adding it again. No token
belongs in a remote URL. A commit ID from merge-base means a shared ancestor exists.
Do not push your personal branch to upstream. Design maintenance happens separately.

## Apply a design update

This procedure is documented, not yet tested against a real personal journal.
Use a fictional copy for the first update. Finish sync on all devices, then stop
editing and close their vaults while updating. Make a complete independent backup.

On the computer, inside the personal vault, run each command separately:

```powershell
git status --short
git switch main
git pull --ff-only origin main
git fetch upstream
git log --oneline HEAD..upstream/main
git diff --name-status HEAD...upstream/main
git diff --name-status HEAD...upstream/main -- Entries Attachments
```

The working tree must be clean before proceeding. Review pending commits and all
changed paths, especially .gitignore, templates, and scripts. The last command must
show no changes to Entries or Attachments, including their placeholders. If it does,
stop: the release violates our data boundary and needs review. A clean result is a
convention check, not permission to blindly overwrite customized design files.

If there are no pending upstream commits, there is nothing to update. Otherwise:

```powershell
git merge --no-ff --no-commit upstream/main
git diff --cached --name-status
git diff --cached --name-status -- Entries Attachments
git diff --check
```

Check that no data files changed and no conflict markers remain. If conflicts appear,
stop and get help; preserve both versions. Resolve only after understanding your
customization and the design change. git merge --abort cancels a pending merge when
the pre-merge working tree was clean. Never use force-push or hard reset as an update.

Reopen Obsidian while other devices remain closed. Check navigation, QuickAdd entry
creation, Future, Collections, and your actual entries/attachments. Close it again.
Inspect git status; include only the intended update. When satisfied:

```powershell
git commit -m "Update BuJo design"
git push origin main
```

Other devices receive the update on their next explicit Git Vault Sync action.
New plugin requirements or local settings changes still need manual setup per device;
.obsidian is not synchronized. Keep automatic sync disabled. An upstream update is
not the same operation as everyday journal synchronization.

## Existing Use this template repositories

Use this template starts unrelated history. Normal upstream merges will not work
until a one-time history connection is reviewed. Keep the private journal intact;
do not recreate it or replace Entries/Attachments.

A Git-experienced helper can back up a clean checkout, fetch upstream, and preview
git merge --allow-unrelated-histories --no-ff --no-commit upstream/main. Matching
copied files may still produce add/add conflicts. Inspect the design files and data
paths, resolve deliberately, test the vault, then commit and push only to origin.
Abort if the result is unclear. This migration is documented but untested here; it
is not a beginner copy-and-paste step. Subsequent merges can use the normal procedure.

## GitHub-only updates and forks

An independent private repository has no automatic Sync fork button. GitHub-only
updates would require a separately reviewed workflow; none is supplied or verified.
The supported design here is the deliberate computer merge above.

A public fork stays public and is unsuitable for personal notes. Private forks
remain in the upstream permission/lifecycle network. For a fictional fork trial,
GitHub's Sync fork can bring upstream changes in, but do not use discard/force options
to resolve differences. An independent private copy is preferred for a real journal.

Sources: [Git remotes](https://git-scm.com/docs/git-remote),
[Git merge](https://git-scm.com/docs/git-merge),
[GitHub forks](https://docs.github.com/en/pull-requests/reference/forks),
[GitHub templates](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
