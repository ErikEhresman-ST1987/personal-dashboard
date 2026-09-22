# Personal Dashboard

A calm, mobile-first personal organizer built with plain HTML, CSS, and JavaScript.

**Live app:** https://erikehresman-st1987.github.io/personal-dashboard/

## Project goals

- Remain fast, understandable, and dependable on iPhone, iPad, Android, and desktop.
- Work offline as an installable Progressive Web App (PWA).
- Save information locally without accounts, subscriptions, or a required backend.
- Preserve existing information when the app changes.
- Add one coherent improvement at a time, then test it through normal use.
- Avoid automatic clearing, moving, hiding, or reinterpretation unless explicitly designed and approved.

## Current application

### Today

- Ten task positions: three reusable dropdown choices and seven manual entries.
- Five dated **Coming Up** entries in a collapsible section beneath the main task list.
- The Coming Up heading shows the number of active items and the nearest relevant date while collapsed.
- The Coming Up open or closed state is remembered.
- Completed items remain visible with a line through them.

### This Month

- Five task positions.
- Three reusable dropdown choices and two manual entries.

### Shopping

- Three editable stores with up to 100 reusable items per store.
- **Prepare List** mode selects items for a trip.
- **Shop** mode shows only selected items.
- Items are displayed alphabetically without changing their saved positions.
- Each store’s Data section can permanently alphabetize its filled master-list entries while preserving trip selections and purchases.
- Purchased items remain visible with a line through them unless **Hide purchased** is enabled.
- **Finish Trip** clears the current trip after confirmation but preserves the reusable master list.

### Spiritual

- Daily Text checkbox that resets by comparing its saved completion date with the device's local date.
- Daily Bible Reading checkbox with the same automatic daily reset behavior.
- Collapsible Midweek Meeting preparation:
  - Bible Reading
  - Spiritual Gems
  - Living as Christians
  - Congregation Bible Study
- Collapsible Sunday Study with a selectable one-to-five subheadings plus Review Questions.
- Two dated Upcoming Part entries.
- Two dated Custom Activity entries.
- Progress totals appear in each group heading.
- Open and closed group states are remembered.
- Midweek and Sunday have confirmed clear controls.
- Manual sections can clear only completed entries after confirmation.

### Data

- Collapsible Backup & Restore section.
- A dated JSON backup contains the complete dashboard state.
- Mobile devices use the share sheet when supported; desktop browsers use a normal download.
- Restore accepts only a recognized backup format and replaces current data after confirmation.
- Collapsible source lists for Today and This Month.
- Collapsible store data with editable store names and reusable shopping items.
- Collapsible Visible Tabs controls for every functional tab.
- Data remains permanently visible so hidden tabs can always be restored.
- Hiding a tab preserves all information saved inside it.

## File structure

| File | Responsibility |
| --- | --- |
| `index.html` | Page structure, styles, state schema, rendering, interaction logic, and service-worker registration. |
| `manifest.webmanifest` | PWA name, display mode, start URL, and colors. |
| `service-worker.js` | Network-first loading, offline app-shell fallback, cache cleanup, and update activation. |
| `README.md` | Current-state handoff, maintenance rules, and test expectations. |

There is no build process, package manager, framework, external runtime dependency, account system, or server-side database.

## Saved-data contract

All user information is stored as JSON in browser `localStorage` under:

```text
personal-dashboard-v1
```

The storage key is the data namespace, not the release number. Do not rename it simply because the app or PWA cache version changes. Renaming it would make existing data appear to disappear.

The saved state currently contains:

- `choices`: 15 reusable choices for Today and This Month.
- `tasks`: ten Today task records and five This Month task records.
- `comingUp`: five dated Today reminders.
- `comingUpOpen`: the remembered open or closed state of the Coming Up section.
- `shopping`: three stores, their names and master items, trip selections, purchases, active store, mode, and hide setting.
- `spiritual`: Daily Text and Daily Bible Reading completion dates, Midweek and Sunday progress, Sunday subheading count, dated manual entries, and collapsible-group state.
- `visibleTabs`: local visibility choices for every functional navigation tab; Data is excluded and always available.

`normalizedState()` is the migration boundary. Every new saved field must receive a safe default there, and old or malformed state must be normalized before rendering. Existing unrelated fields must remain compatible.

### Backup format and data limitation

Backups use a versioned JSON envelope containing the app identifier, backup-format version, export time, and normalized state. Restore rejects unrelated or unreadable files and limits file size before parsing.

Saved information still belongs to the individual browser installation and does not sync automatically. Use **Save Backup** periodically and keep the JSON file somewhere safe. A backup can also transfer the dashboard to another browser or device.

## Rendering and interaction conventions

- `render()` constructs only the active panel and updates the persistent navigation buttons.
- Event delegation on `main` handles controls added by rendering.
- Text inputs save without a full render to keep mobile typing stable.
- Checkbox rows should update locally when practical so the page does not jump.
- Destructive or broad clearing actions require confirmation.
- Native date inputs are used for lightweight iOS and Android compatibility.
- User-provided text must pass through `escapeHtml()` before entering generated markup.

Active-panel rendering keeps inactive interfaces, especially the large Data interface, out of the document. Switching tabs reconstructs the selected panel from saved in-memory state.

## PWA and release procedure

The service worker uses a network-first strategy. Online responses refresh the cache; cached files provide the offline fallback.

When an app-shell file changes:

1. Make and test the narrow change.
2. Increment `CACHE_NAME` in `service-worker.js`.
3. Confirm every required file remains in `APP_SHELL`.
4. Publish the changed app file first.
5. Publish `service-worker.js` last so the new cache is not activated before its files exist.
6. Re-fetch the published files and verify both the feature markers and cache version.
7. Open the installed PWA online and confirm that it refreshes automatically.
8. Reopen it offline and confirm the app shell and saved state still work.

The current cache is:

```text
personal-dashboard-v14
```

A README-only change does not require a cache increment because the README is not part of `APP_SHELL`.

## Required verification for functional changes

- JavaScript syntax checks for the inline app script and `service-worker.js`.
- Whitespace/error check on the proposed diff.
- First-launch defaults.
- Migration from existing saved state.
- Save, close, and reopen persistence.
- Confirmation and cancellation for destructive controls.
- Minimum, maximum, empty, and invalid values where applicable.
- Nearby tabs and data structures remain unchanged.
- Stable text entry without keyboard-driven resizing or unexpected rerendering.
- Comfortable touch targets and scrolling on iPhone-sized screens.
- iPad and desktop layout sanity checks.
- Android-compatible standard controls.
- PWA online update and offline reopening.

Automated tests support these checks, but real use on the installed PWA remains part of verification.

## Current status and possible next steps

### Implemented and stable

- Spiritual tab and its reset, progress, date, clearing, and remembered-collapse behavior.
- Local JSON Backup and Restore in Data.
- Per-store shopping-data alphabetization.

### Implemented and being tested

- Active-tab-only rendering.
- Per-device Visible Tabs controls with Data permanently available.

### Worth considering after current testing

- Additional organizer tabs only when real use identifies a clear need.

### Structural work to defer until justified

- Split CSS and JavaScript out of `index.html` when another substantial expansion makes the isolated refactor worthwhile.

### Explicitly not implemented

- Accounts or cloud synchronization.
- Automatic weekly clearing.
- Notifications or reminders.
- Automatic deletion of completed or past-due entries.
- A fitness, goals, or habits tracker.

Future ideas are not approved scope merely because they appear here. Continue to use real-world friction to select and approve one isolated update at a time.
