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

- Ten free-text task positions. Existing saved Today task values remain intact when upgrading.
- **Hide completed** is on by default for the main Today list. Completed rows briefly show their checkmark and then close; turning the switch off reveals them in their original slots for review or unchecking.
- Five dated **Coming Up** entries in a collapsible section beneath the main task list.
- The Coming Up heading shows the number of active items and the nearest relevant date while collapsed.
- The Coming Up open or closed state is remembered.
- Coming Up items remain visible with a line through them when completed.

### Congregation

- Fifteen free-text task positions, each with three optional collapsible free-text subtasks.
- All completion checkboxes are independent. Hide Completed applies to main tasks only.
- Existing Monthly task values and completion states are retained; no automatic reset.

### Shopping

- Six editable stores with up to 100 reusable items per store. Each store can be shown or hidden through Data; the three new stores are hidden by default. All six store editor sections start collapsed when Data opens.
- **Prepare List** mode selects items for a trip and can optionally assign a trip-specific whole-number quantity from 1–99.
- Quantity stays visually absent when it is not needed; selected items with a quantity show that quantity in **Shop** mode.
- **Shop** mode shows only selected items.
- Items are displayed alphabetically without changing their saved positions.
- Each store’s Data section can permanently alphabetize its filled master-list entries while preserving trip selections, purchases, and quantities.
- Purchased items remain visible with a line through them unless **Hide purchased** is enabled.
- **Finish Trip** clears the current trip selections, purchases, and quantities after confirmation but preserves the reusable master list.

### Meals

- Rolling seven-day view: **Today + the next six days**.
- Each day has an optional Dinner entry and optional Prep entry.
- Dinner and Prep accept free text and offer reusable choices maintained in Data.
- Blank days are valid; there are no completion states, overdue states, or meal-history records.
- Past meal days fall away automatically as the rolling window advances.
- No breakfast, lunch, calories, nutrition tracking, recipes, or ingredient system is included.

### Spiritual

- Daily Text checkbox that resets by comparing its saved completion date with the device's local date.
- Daily Bible Reading checkbox with the same automatic daily reset behavior.
- Daily Text and Daily Bible Reading now keep only a rolling 14-day completion record for the Recent Activity view in Data.
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
- Collapsible Appearance section with Green, Blue, Orange, and Dark themes.
- Theme changes apply immediately, persist locally, and are included in backup and restore.
- A dated JSON backup contains the complete dashboard state.
- Mobile devices use the share sheet when supported; desktop browsers use a normal download.
- Restore accepts only a recognized backup format and replaces current data after confirmation.
- Legacy Today source list.
- Collapsible **Meals** data with 15 reusable Dinner choices and 15 reusable Prep choices.
- Collapsible **Recent Activity** showing Daily Text and Daily Bible Reading completion for the last 14 local dates; older dates are discarded.
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

- `theme`: the selected Green, Blue, Orange, or Dark appearance palette.
- `tabOrder`: ordered functional tab IDs, normalized to remove duplicates and unknown IDs and append missing IDs.
- `hideCompletedCongregation`: independent main-task visibility preference.
- `hideCompletedToday`: the main Today list's saved Hide completed preference (defaults to on for older saves).
- `choices`: Legacy reusable choices retained for compatibility.
- `tasks`: ten Today tasks and fifteen Congregation tasks (stored under the existing month key), each Congregation task with three subtasks.
- `comingUp`: five dated Today reminders.
- `comingUpOpen`: the remembered open or closed state of the Coming Up section.
- `shopping`: six stores, their visibility, names and master items, trip selections, purchases, optional trip-specific quantities, active store, mode, and hide setting.
- `spiritual`: Daily Text and Daily Bible Reading completion dates, their rolling 14-day activity history, Midweek and Sunday progress, Sunday subheading count, dated manual entries, and collapsible-group state.
- `meals`: reusable Dinner and Prep choices plus dated plans retained only for the active Today + 6-day window.
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
personal-dashboard-v25
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

### Previously documented as stable (historical test records incomplete)

- Spiritual tab and its reset, progress, date, clearing, and remembered-collapse behavior.
- Shopping trip quantities and their selection, alphabetization, persistence, and Finish Trip behavior.
- Local JSON Backup and Restore in Data.
- Per-store shopping-data alphabetization.

### Implemented; feature-specific verification incomplete

- Rolling seven-day Meals chalkboard with reusable Dinner and Prep choices.
- Fourteen-day Recent Activity for Daily Text and Daily Bible Reading.
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

### Navigation order

Use Data → Visible Tabs to reorder functional tabs with up/down arrows. Hidden tabs retain their positions; Data stays last. Order is saved locally and included in backups.


## Development record through cache v25

### Purpose and operator workflow

This is a personal organizer, not a general-purpose commercial productivity platform. The operator uses it to organize everyday tasks, shopping, meal preparation, spiritual activities and congregation responsibilities. The design separates operational work from setup: reusable lists and visibility controls belong in Data, while everyday interactions belong in functional tabs. Real use determines whether features earn their place. Preserve local ownership and existing data, prefer small reversible improvements, and avoid extra controls that do not remove an identified friction point.

### Observed development history

The following record is based on the accessible conversation and current repository contents. Earlier release-by-release history, original creation date, and a complete historical test log are unknown. Version numbers below are PWA cache versions, not backup format versions.

| Cache | Change and reason | Technique and evidence |
| --- | --- | --- |
| v18 | Shopping trip-specific quantities; retain reusable item lists. | Optional quantities indexed by master-item position, separate from the master list; user previously reported successful use. Exact earlier implementation history is incomplete. |
| v19 | Replace the dinner/prep chalkboard with a rolling seven-day view; add recent daily spiritual activity. | Local-date keys, reusable choices plus free entry, rolling completion history. Implemented; feature-specific device verification is unknown. |
| v20 | Today dropdowns were not useful because most tasks are unique. | Render all ten slots as text inputs without changing existing task values or checkbox state. User subsequently reported the app was working great; individual regression checks are unknown. |
| v21 | Need three additional stores without cluttering shopping navigation. | Expand normalization defaults to six stores; preserve indices and existing trip data. Per-store visibility defaults to true for the original three, false for the new three. If the active store is hidden, select the first visible store; if none are visible, show instructions. User responded positively; exhaustive visibility/backup tests are unknown. |
| v22 | First store editor opened with 100 entries, forcing unnecessary scrolling. | Remove its conditional open attribute; all six store editors start collapsed. User responded positively. |
| v23 | Monthly tab was unused; replace with Congregation responsibilities. | Retain internal month key and existing task records, expand to fifteen text tasks with three nested optional text subtasks each. Each checkbox is independent. Separate Hide Completed preference; native collapsible subtask sections; remove obsolete Monthly choice editor from Data. User confirmed the feature worked but reported overlapping third subtask. |
| v24 | Third Congregation subtask appeared behind the next main task. | Identified inherited 200px maximum height on shared task cards. Override it only for Congregation; align main checkbox near top so it remains beside main task when expanded. Fix committed; explicit post-fix visual confirmation is unknown. |
| v25 | Operator requested configurable primary navigation order. | Add normalized tabOrder array, move buttons in Data, reorder existing navigation nodes without recreating the panel, preserve hidden tab positions, keep Data last. User explicitly stated testing had not yet occurred. |

### Reusable techniques and lessons

- Prefer stable internal data identifiers over renaming persisted keys when changing visible labels. Congregation reuses the month key to preserve existing records.
- Expand fixed-capacity lists through defaults and normalization, not by clearing existing arrays. Nested subtasks are normalized individually and missing entries receive blank defaults.
- Keep visibility separate from stored content. Hiding a store or tab does not delete its data. Preserve hidden tab positions when reordering.
- Distinguish independent completion controls from parent-child automation. The operator explicitly chose independent main and subtask checkboxes.
- Use native details/summary elements for optional content and large setup lists. Collapse by default where scanning is more important than immediate access to all fields.
- When extending a shared UI pattern, inspect inherited constraints. The Congregation overlap was caused by the Today card maximum height; the targeted override avoids changing Today behavior.
- Use tap-friendly arrows instead of drag-and-drop for a short navigation list. The choice of arrows and keeping Data last were assistant design decisions accepted in the conversation, not original explicit requirements.
- Persist text while typing without reconstructing the active panel. Reconstruct only when needed, and update navigation or configuration fragments independently where practical.
- Separate cache version, storage namespace, and backup format. Publish the cache change last, and never rename the storage namespace for a UI release.

### Verification boundaries and known limitations

Current source and service-worker cache v25 were inspected for this documentation. Repository writes are not proof of GitHub Pages deployment, browser execution, successful migration on a real installation, or offline operation. The accessible record does not establish a completed automated syntax or regression suite for these releases; an earlier syntax-check attempt could not be completed. Do not label these tests as passed without new evidence.

Recent Activity records completion dates, not a historical observation of every missed day. Dates before the feature started cannot be reconstructed from older saves; an empty completion indicator is not proof of a missed activity. The native Meals datalist interface may vary by browser; consistent iOS selection behavior has not been established in the accessible record. The rolling Meals window currently discards plans outside the active date range; behavior after device-clock changes or restoring a differently dated backup has not been verified.

The original three stores, Monthly migration, independent subtask states, hidden tab/store data preservation, v24 layout fix, v25 tab ordering, backup round trips and offline reopening should be included in future regression checks. The next meaningful verification is normal use of v25 on the installed PWA, especially reorder/hide/reveal, reopening, and backup/restore. No new application behavior is authorized by this documentation.
