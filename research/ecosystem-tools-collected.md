# Ecosystem Tools Research - Collected Data

## Claude Ecosystem (5 tools added)

### 1. claude-mem ⭐
- **GitHub**: https://github.com/thedotmack/claude-mem
- **Stars**: ~1,500
- **Category**: Plugin / Memory System
- **Description**: Persistent memory compression system for Claude Code
- **Key Features**: Progressive disclosure, skill-based search, web UI, automatic operation
- **License**: AGPL-3.0
- **Status**: ✅ Added to ecosystem-tools.json

### 2. Claudable ⭐
- **GitHub**: https://github.com/opactorai/Claudable
- **Stars**: ~800
- **Category**: Web Builder
- **Description**: Open-source web builder using local CLI agents
- **Key Features**: Local deployment, web interface, alternative to Lovable
- **License**: MIT
- **Status**: ✅ Added to ecosystem-tools.json

### 3. Claw Code
- **GitHub**: https://github.com/jamesrochabrun/Claw
- **Stars**: ~600
- **Category**: Desktop App (macOS)
- **Description**: Native macOS app for Claude Code with Xcode integration
- **License**: MIT
- **Status**: ✅ Added to ecosystem-tools.json

### 4. Omnara ⭐
- **GitHub**: https://github.com/omnara-ai/omnara
- **Stars**: ~1,200
- **Category**: Orchestrator / Command Center
- **Description**: Syncs Claude Code sessions across terminal, web, mobile
- **Key Features**: Remote monitoring, team collaboration, cross-platform
- **License**: Apache-2.0
- **Status**: ✅ Added to ecosystem-tools.json

### 5. Claude Code Templates
- **GitHub**: https://github.com/davila7/claude-code-templates
- **Stars**: ~900
- **Category**: Template Library
- **Description**: Resource collection with UI, dashboard, analytics
- **License**: MIT
- **Status**: ✅ Added to ecosystem-tools.json

## Additional Claude Tools (to add)

### High Priority
1. **claude-code-tools** - Collection of awesome tools (tmux, session management, security hooks)
2. **claudekit** - CLI toolkit with auto-save, code quality hooks, 20+ subagents
3. **ContextKit** - Systematic development framework
4. **cclogviewer** - View .jsonl conversation files in HTML UI
5. **Claude Control Terminal** - High-performance Go implementation

### Medium Priority
6. AB Method - Spec-driven workflow
7. Claude Code PM - Project management workflow
8. RIPER Workflow - 5-phase development
9. conduit8 - CLI registry for skills
10. DevRag - Lightweight local RAG system

---

## ChatGPT Ecosystem

### Official / High Impact
1. **chatgpt-retrieval-plugin** (OpenAI official)
   - **GitHub**: https://github.com/openai/chatgpt-retrieval-plugin
   - **Description**: Document retrieval plugin
   - **Status**: 🔜 To be added

2. **plugins-quickstart** (OpenAI official)
   - **GitHub**: https://github.com/openai/plugins-quickstart
   - **Description**: Get a plugin running in <5 minutes
   - **Status**: 🔜 To be added

3. **Open-Custom-GPT**
   - **GitHub**: https://github.com/SamurAIGPT/Open-Custom-GPT
   - **Description**: Create Custom GPT with Assistants API
   - **Updated**: Feb 5, 2026 (recent!)
   - **Status**: 🔜 To be added

4. **Awesome-GPT-Store**
   - **GitHub**: https://github.com/Anil-matcha/Awesome-GPT-Store
   - **Description**: Collection of major GPTs
   - **Status**: 🔜 To be added

5. **chatgpt-plugin-ts**
   - **GitHub**: https://github.com/transitive-bullshit/chatgpt-plugin-ts
   - **Description**: Everything to build ChatGPT plugins in JS/TS
   - **Status**: 🔜 To be added

6. **AISuperDomain**
   - **GitHub**: https://github.com/win4r/AISuperDomain
   - **Description**: Premier AI integration tool (Windows, macOS, Android)
   - **Features**: Ask once, get answers from 10+ AIs
   - **Updated**: Dec 25, 2025
   - **Status**: 🔜 To be added

---

## Midjourney Ecosystem

### High Priority
1. **MidJourney-Styles-and-Keywords-Reference** ⭐
   - **GitHub**: https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference
   - **Description**: Reference for styles and keywords
   - **Features**: Resolution comparison, image weights, comprehensive reference
   - **Status**: 🔜 To be added

2. **midjourney-proxy** (API wrapper - Java)
   - **GitHub**: https://github.com/novicezk/midjourney-proxy
   - **Description**: MJ Discord API proxy (API形式調用)
   - **Updated**: Aug 3, 2025
   - **Status**: 🔜 To be added

3. **midjourney-api** (Node.js)
   - **GitHub**: https://github.com/erictik/midjourney-api
   - **Description**: Unofficial Node.js client
   - **Updated**: May 7, 2025
   - **Status**: 🔜 To be added

4. **docker-prompt-generator**
   - **GitHub**: https://github.com/soulteary/docker-prompt-generator
   - **Description**: Model-based prompt generator for MJ/SD
   - **Status**: 🔜 To be added

---

## GitHub Copilot Ecosystem

### Research Needed
- Copilot extensions
- IDE integrations beyond VSCode
- Alternative/complementary tools
- Copilot for X (Docs, CLI, etc.)

**Next Step**: Search for "github-copilot-extensions" topic

---

## Stable Diffusion Ecosystem

### Research Needed
- Stable Diffusion WebUI
- LoRA/Model managers
- Prompt managers
- ComfyUI
- Automatic1111 extensions

**Next Step**: Search for "stable-diffusion-webui" topic

---

## Data Integration Strategy

### Option 1: Merge into main tools.json
**Pros:**
- Single data source
- Easier search/filter
- Unified schema

**Cons:**
- Large file size
- Mix of primary tools and ecosystem tools

### Option 2: Separate ecosystem-tools.json
**Pros:**
- Clean separation
- Easier to maintain
- Can load on-demand

**Cons:**
- Two data sources to manage
- Duplicate schema

### Option 3: Hybrid (Recommended)
- Keep ecosystem-tools.json separate
- Add `parent_tool` and `subcategory` fields
- Create UI component to display:
  - Main tools in primary categories
  - "Related Tools" section on tool detail pages
  - New "Plugins & Extensions" category/filter

---

## Next Steps

### Immediate (Today)
1. ✅ Collect initial 5 Claude tools
2. 🔄 Add 10 more Claude tools (high/medium priority)
3. 🔄 Add 6 ChatGPT ecosystem tools
4. 🔄 Add 4 Midjourney ecosystem tools
5. 🔄 Research GitHub Copilot ecosystem
6. 🔄 Research Stable Diffusion ecosystem

### Implementation (Tomorrow)
1. Finalize data structure
2. Create UI components
3. Update search/filter logic
4. Add "Related Tools" to tool detail pages
5. Deploy

### Target
- **Total ecosystem tools**: 30-50
- **Categories covered**: Claude (15), ChatGPT (6), Midjourney (4), GitHub Copilot (5), SD (5+)
- **Launch date**: 2026-02-13 (Tomorrow)

---

**Status**: In Progress (5/30 tools collected)  
**Updated**: 2026-02-13 00:17 JST
