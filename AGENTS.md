<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Mythic Forge — Agent Rules

> Single source of truth for every AI coding agent working in this repo.
> `CLAUDE.md` imports this file. `.commandcode/taste/taste.md` is a condensed
> mirror for Command Code — update it when you change the rules below.
>
> Architected by Trungvt & Lyra.
> Sources: [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (Addy Osmani),
> [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) (Andrej Karpathy principles).

## Sacred Laws (Luật Tối Cao)

1. **Luật Hiện Thực (Reality)**: CẤM dùng mã giả. Mọi dòng lệnh phải thực thi được. — No pseudocode; every line must run.
2. **Luật Toàn Vẹn (Integrity)**: Luôn cung cấp tệp ĐẦY ĐỦ. Không đưa ra đoạn mã rời rạc. — Deliver complete files, not fragments.
3. **Thẩm Định 4C**: Kiểm tra Correctness, Completeness, Context-fit, Consequence.
4. **Giao Thức MD (Markdown Protocol)**: Mọi quyết định phải được ghi lại vào tệp Markdown. — Record decisions in Markdown (ADRs).
5. **Ranh Giới Thánh (Sacred Boundary)**: Phân tách UI, Logic, và Data.
6. **Gương Socratic (Socratic Mirror)**: AI PHẢI đặt 3 câu hỏi ngược để làm rõ rủi ro trước khi thực thi. — Ask 3 clarifying questions before executing.

## Development Lifecycle

```
DEFINE → PLAN → BUILD → VERIFY → REVIEW → SHIP
```

| Phase | Practices |
|---|---|
| **DEFINE** | Refine raw ideas into clear concepts. Write a spec (inputs, outputs, edge cases, success criteria) before code. |
| **PLAN** | Break work into small, independently verifiable tasks. |
| **BUILD** | Small increments (~50 lines, then verify). Tests first (Red → Green → Refactor). Read existing code before modifying. Component-based UI; separate UI, state, data fetching. Contract-first APIs (Hyrum's Law). |
| **VERIFY** | Check in the browser (console, network, layout). Debug by reproduce → hypothesize → verify. |
| **REVIEW** | Correctness, readability, maintainability. Chesterton's Fence before removing code. Validate inputs, sanitize outputs, least privilege. Measure before optimizing. |
| **SHIP** | Trunk-based, small atomic commits, clear messages. Automate checks. Document decisions (ADRs). Feature flags and a rollback plan. |

### Anti-Rationalization

| Excuse | Counter |
|---|---|
| "I'll add tests later" | Tests written after implementation miss edge cases. Write them first. |
| "This is just a quick fix" | Quick fixes accumulate. Follow the full workflow. |
| "The spec is obvious" | If it were obvious, there wouldn't be bugs. Write it down. |
| "It works on my machine" | Verify in the actual environment. |
| "I'll refactor later" | Later never comes. Refactor as you go. |
| "This doesn't need a review" | Everything needs a review. |

### Verification Standards

Every task must produce evidence:

- ✅ Tests passing — not "I think it works"
- ✅ Build output clean — no ignored warnings
- ✅ Runtime behavior verified against the spec
- ❌ "Seems right" is never sufficient

## Karpathy Principles

1. **Think Before Coding** — State assumptions. Present interpretations when ambiguous. Push back when a simpler approach exists. Stop and ask when confused.
2. **Simplicity First** — No unrequested features, abstractions, or configurability. No handling for impossible cases. If 200 lines could be 50, rewrite it.
3. **Surgical Changes** — Don't touch adjacent code, comments, or formatting. Match existing style. Mention unrelated dead code; don't delete it. Remove only what *your* change made unused.
4. **Goal-Driven Execution** — Turn tasks into verifiable goals with checkpoints:
   ```
   1. [Step] → verify: [check]
   2. [Step] → verify: [check]
   ```

**The test:** every changed line traces directly to the request.

## Project Commands

| Task | Command |
|---|---|
| Install | `pnpm install` |
| Dev server | `pnpm dev` |
| Production build | `pnpm build` |
| Lint | `pnpm lint` |
