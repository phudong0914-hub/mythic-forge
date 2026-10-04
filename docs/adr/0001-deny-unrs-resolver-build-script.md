# ADR 0001: Deny `unrs-resolver` build script

- **Status:** Accepted
- **Date:** 2026-10-04

## Context

pnpm 11 stops `install`, `lint`, and `build` with `ERR_PNPM_IGNORED_BUILDS`
when a dependency has a build script that is neither approved nor denied.
In this repo, `unrs-resolver` (pulled in by `eslint-config-next`) triggers it,
so a fresh clone could not lint or build.

## Decision

Explicitly deny the script in `pnpm-workspace.yaml`:

```yaml
allowBuilds:
  unrs-resolver: false
```

Generated with `pnpm approve-builds '!unrs-resolver'`.

## Consequences

- Fresh clones run `pnpm install`, `pnpm lint`, and `pnpm build` cleanly
  (verified on pnpm 11.5.2, Node 24, Windows).
- Least privilege: no third-party install script runs.
- If ESLint import resolution ever breaks, switch to `unrs-resolver: true`.

## Known limitation

pnpm's symlinked `node_modules` cannot be created on Google Drive virtual
drives (`EISDIR ... symlink`). Clone the repo to a normal local disk.
