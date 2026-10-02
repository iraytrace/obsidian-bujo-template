# Configure each device

These settings are local. The package includes no .obsidian folder, and the selected
sync policy excludes that folder on every device. Repeat this checklist on each device.
Menu placement may vary by version; use the named settings and commands.

1. In Settings > Core plugins, enable Bases, Templates, Bookmarks, Properties view,
   Command palette, and File recovery. File recovery is device-local, not a full backup.
2. In Settings > Templates, set Template folder location to Templates and Date format
   to YYYY-MM-DD. Do not edit template date placeholders in the Properties panel.
3. In Settings > Files and links, set Default location for new notes to the specified
   folder Entries. Set Default location for new attachments to the specified folder
   Attachments. Create these folders if an extraction tool omitted empty directories.
4. Insert a template into one new entry as described in USING-THE-JOURNAL. In its
   Properties panel, use the icon beside each property to select the following types.
   A name's type applies across the vault, but must be configured separately per device.

| Property | Type | Values |
| --- | --- | --- |
| type | Text | task, event, note |
| created | Date | YYYY-MM-DD; date of creation |
| scheduled | Date | YYYY-MM-DD; omit when unscheduled |
| status | Text | tasks: open, done, cancelled; omit otherwise |
| collection | List | empty or one label |
| description | Text | short summary |

5. Open Dashboard, then Tasks and Notes. Tables should render. Empty tables in a new
   personal vault are expected. Bookmark Dashboard or a preferred log/view with core
   Bookmarks. Entries can also be opened directly through Quick Switcher or file explorer.
6. If installing Git Vault Sync, disable Sync on startup and Auto-sync on a timer before
   credentials. Leave the engine on Auto for the platform trial. Add .obsidian/ and .trash/
   to Excluded paths if the plugin offers that setting; retain the packaged .gitignore.
   Verify both automatic options remain off after restarting. Do not install other sync
   plugins into the same active vault during this trial.

Windows reference: executable version 1.13.7.0, Git Vault Sync 0.2.24. Record actual app
and plugin versions on every device; use a compatible public Obsidian version with Bases.
Do not assume a newer plugin preserves tested behavior.

Sources: [Templates](https://help.obsidian.md/plugins/templates),
[Properties](https://help.obsidian.md/properties),
[Bases](https://obsidian.md/help/bases).
