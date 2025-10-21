# LibreChat Agents Setup Guide

## Understanding modelSpecs vs Agents

### **modelSpecs** (What's in librechat.yaml)
- **Static configuration** presets
- Show up in the model/preset selector
- Cannot execute tools or have conversations
- Used for parameter templates and shortcuts
- ✅ You already have these configured!

### **Agents** (What you need to create)
- **Database entities** with tool execution capabilities
- Show up in the **Agents tab** in the side panel
- Can execute code, search files, use GitHub API, etc.
- User-specific with permissions
- ❌ **You need to create these**

## Why Your Agents Aren't Showing

The agents I added to `librechat.yaml` are **modelSpecs presets**, not actual Agents. To see agents in the UI:

1. They must be created in the **MongoDB database**
2. They must be associated with your user: `mibach@hawaiianexperiencespa.com`
3. They appear in **Side Panel > Agents tab** (NOT in model selector)

## How to Create Actual Agents

### Option 1: Use the UI (Recommended)

1. Start LibreChat server
2. Log in as `mibach@hawaiianexperiencespa.com`
3. Click **Side Panel** (right side)
4. Go to **Agents** tab
5. Click **"+ Create Agent"**
6. Fill in the form:
   - **Name**: e.g., "GitHub Coder (Haiku 4.5)"
   - **Description**: What the agent does
   - **Provider**: anthropic, openai, etc.
   - **Model**: claude-haiku-4-5-20251001, o4-mini, etc.
   - **Instructions**: System prompt
   - **Tools**: Select from available tools
   - **Temperature**: 0.3
   - **Max Tokens**: 32000 or 100000

### Option 2: Use the API Script (Automated)

I've created a script to auto-generate all agents:

```bash
# 1. Get your auth token
# - Log into LibreChat
# - Open DevTools (F12) > Application > Cookies
# - Copy the session/refreshToken value

# 2. Edit the script
code create-agents.js
# Update AUTH_TOKEN with your token

# 3. Run the script
node create-agents.js
```

This will create 7 agents:
- 3 Primary Coding Agents (Haiku 4.5, o4-mini-high, o4-mini)
- 3 Reasoning Agents (Opus 4.1, o3-pro, o3)
- 1 General Purpose Agent (Sonnet 4 with 1M context)

### Option 3: Manual API Calls

```bash
curl -X POST http://localhost:3080/api/agents \
  -H "Content-Type: application/json" \
  -H "Cookie: refreshToken=YOUR_TOKEN" \
  -d '{
    "name": "GitHub Coder (Haiku 4.5)",
    "description": "Primary coding agent",
    "instructions": "You are an expert coding assistant...",
    "provider": "anthropic",
    "model": "claude-haiku-4-5-20251001",
    "model_parameters": {
      "temperature": 0.3,
      "max_tokens": 32000
    },
    "tools": ["calculator", "tavily_search_results_json"],
    "category": "coding"
  }'
```

## Available Tools (Based on Your API Keys)

You have these API keys available:
- ✅ ANTHROPIC_API_KEY
- ✅ OPENAI_API_KEY
- ✅ OPENROUTER_KEY
- ✅ COHERE_API_KEY
- ✅ TAVILY_API_KEY
- ✅ EXA_API_KEY
- ✅ GITHUB_TOKEN

### Tools You Can Use:
- `calculator` - Mathematical calculations
- `tavily_search_results_json` - Web search via Tavily
- `traversaal_search` - Advanced search via Traversaal
- `image_gen_oai` - OpenAI image generation
- `dalle` - DALL-E image generation
- `execute_code` - Code execution capability
- `file_search` - Vector-based file search
- `web_search` - General web search

### Tools Removed (Missing API Keys):
- ❌ `wolfram` - Requires WOLFRAM_APP_ID
- ❌ `serpapi` - Requires SERPAPI_API_KEY
- ❌ `google` search - Requires GOOGLE_SEARCH_API_KEY
- ❌ `youtube` - Requires YOUTUBE_API_KEY
- ❌ `flux` - Requires FLUX_API_KEY
- ❌ `open_weather` - Requires OPENWEATHER_API_KEY
- ❌ `stable-diffusion` - Requires local setup

## Configured Models

### Anthropic (claude-*)
- `claude-opus-4.1-20250514` - Reasoning, 32k tokens
- `claude-sonnet-4-5-20250929` - General, 1M context, 32k tokens
- `claude-haiku-4-5-20251001` - Coding, 32k tokens

### OpenAI (o*, gpt-*)
- `o3-pro` - Reasoning, 100k tokens
- `o3` - Reasoning, 100k tokens
- `o4-mini-high` - Coding, 100k tokens
- `o4-mini` - Coding, 100k tokens
- `gpt-4o` - General purpose
- `gpt-4o-mini` - Fast, efficient

### Other Providers
- OpenRouter: Various models
- Cohere: command-r-plus, command-r

## Configuration Files

### librechat.yaml
- ✅ Updated with only your available APIs
- ✅ Removed Groq, Mistral, DeepSeek, XAI, Gemini
- ✅ modelSpecs configured (these are presets, not agents)

### .env.example
- ✅ GitHub API integration variables added
- ⚠️ Make sure your actual `.env` file has the required keys

## Troubleshooting

### Agents still don't show up?

1. **Check the agents endpoint is enabled**
   ```yaml
   # In librechat.yaml
   interface:
     agents: true  # Must be true
   ```

2. **Verify in database**
   ```bash
   # Connect to MongoDB
   mongo mongodb://127.0.0.1:27017/LibreChat

   # List agents
   db.agents.find({}).pretty()
   ```

3. **Check user permissions**
   - Agents have ACL (Access Control Lists)
   - Make sure your user has permissions to view

4. **Check browser console**
   - F12 > Console tab
   - Look for errors when loading agents

5. **Restart LibreChat server**
   ```bash
   # Stop server
   # Clear cache
   # Restart server
   ```

### Tools not working?

1. **Verify API keys in .env**
   ```bash
   cat .env | grep "API_KEY"
   ```

2. **Check tool availability**
   - Tools depend on API keys
   - If key is missing, tool won't work

3. **Check agent configuration**
   - Make sure tools are in the agent's `tools` array
   - Some tools conflict (e.g., Google tools with structured tools)

## Next Steps

1. ✅ Configuration files updated
2. ⬜ Create agents using UI or script
3. ⬜ Verify agents appear in Side Panel > Agents tab
4. ⬜ Test agent tool execution
5. ⬜ Configure GitHub integration with GITHUB_TOKEN

## Support

If you continue having issues:
1. Check LibreChat logs for errors
2. Verify MongoDB connection
3. Check browser console for client errors
4. Review API endpoint responses in Network tab

---

**Remember**: modelSpecs ≠ Agents. You need to create actual Agent entities!
