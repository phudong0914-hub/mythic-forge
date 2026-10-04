# Model Context Protocol (MCP) in Mythic Forge

Mythic Forge comes pre-configured with **Model Context Protocol (MCP)** support, allowing your AI coding agents (Claude Code, Cursor, Antigravity) to safely interact with local databases, filesystems, and external APIs.

---

## 🚀 Pre-configured Servers

The [.mcp.json](file:///g:/Drive%20c%E1%BB%A7a%20t%C3%B4i/Myhic%20Forge/.mcp.json) file at the root defines three essential tools:

1. **`filesystem`** (`@modelcontextprotocol/server-filesystem`):
   - Scope: Allows AI agents to read and write to `./public` and `./docs`.
2. **`sqlite`** (`@modelcontextprotocol/server-sqlite`):
   - Path: `./data/mythic.db`
   - Gives your agent direct SQL inspection and query capabilities.
3. **`fetch`** (`@modelcontextprotocol/server-fetch`):
   - Enables agents to fetch live web documentation and test external endpoints.

---

## ⚙️ How to Enable in AI Clients

### 1. Claude Code
Claude Code automatically discovers `.mcp.json` in the project root:
```bash
claude mcp list
```

### 2. Cursor IDE
- Go to **Cursor Settings > Features > MCP Servers**.
- Click **Add New MCP Server** and point to [.mcp.json](file:///g:/Drive%20c%E1%BB%A7a%20t%C3%B4i/Myhic%20Forge/.mcp.json) or add servers from [mcp.config.example.json](file:///g:/Drive%20c%E1%BB%A7a%20t%C3%B4i/Myhic%20Forge/mcp.config.example.json).

### 3. Command Code
Command Code supports MCP via its CLI:
```bash
command-code mcp
```

---

## 🔒 Security Best Practice
- Never commit private tokens (such as `GITHUB_PERSONAL_ACCESS_TOKEN`) into `.mcp.json`.
- Keep sensitive credentials in your local `.env.local` or user-level config (`~/.config/claude/claude_desktop_config.json`).
