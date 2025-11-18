# LibreChat Render Deployment Guide

## 🌐 Deployment URL
https://librechat-873o.onrender.com

## 📋 Environment Variables to Set in Render

Go to your Render dashboard → LibreChat service → Environment → Add the following:

### Core Configuration
```
HOST=0.0.0.0
PORT=3080
DOMAIN_CLIENT=https://librechat-873o.onrender.com
DOMAIN_SERVER=https://librechat-873o.onrender.com
NODE_ENV=production
```

### Database
```
MONGO_URI=mongodb+srv://mibach_db_user:FSk54E9IvrIsiPYD@cluster0.f2wgnae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

### Security Keys
```
CREDS_KEY=f34be427ebb29de8d88c107a71546019685ed8b241d8f2ed00c3df97ad2566f0
CREDS_IV=e2341419ec3dd3d19b13a1a87fafcbfb
JWT_SECRET=16f8c0ef4a5d391b26034086c628469d3f9f497f08163ab9b40137092f2909ef
JWT_REFRESH_SECRET=eaa5191f2914e30b9387fd84e254e4ba6fc51b4654968a9b0803b456a54b8418
MEILI_MASTER_KEY=DrhYf7zENyR6AlUCKmnz0eYASOQdl6zxH7s7MKFSfFCt
```

### AI API Keys
```
ANTHROPIC_API_KEY=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
OPENAI_API_KEY=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
ASSISTANTS_API_KEY=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
GOOGLE_KEY=AIzaSyBrek8-ggpO831wAWp9jeTb7llE9xvmaek
COHERE_API_KEY=PXIwHfOtmIseMlLKtMIfJTKuuuKt9A7qPMJ7UVJV
OPENROUTER_KEY=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
XAI_API_KEY=xai-LdseC0RSSOP2A1fonFLQKZLDFvHo8Ls5MKgyJ2uHFi538tMFt3BorkDa3ECXmK7Ps6LjqSzVAQcAXAB9
AIML_API_KEY=6470d0416ae3434eb2d72df9810b1611
MOONSHOT_API_KEY=sk-X2YQiqzFhL6z0SZ30ZnFoNt2lcQrE3IijkH64fMFc9fUgqGf
TAVILY_API_KEY=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
```

### GitHub Integration
```
GITHUB_TOKEN=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
```

### Search & Other Services
```
MEILI_HOST=http://0.0.0.0:7700
SEARCH=true
MEILI_NO_ANALYTICS=true
```

### Logging & Debug
```
DEBUG_LOGGING=true
DEBUG_CONSOLE=false
DEBUG_OPENAI=false
DEBUG_PLUGINS=true
CONSOLE_JSON=false
```

### User Management
```
ALLOW_EMAIL_LOGIN=true
ALLOW_REGISTRATION=true
ALLOW_SOCIAL_LOGIN=false
ALLOW_SOCIAL_REGISTRATION=false
ALLOW_UNVERIFIED_EMAIL_LOGIN=true
SESSION_EXPIRY=900000
REFRESH_TOKEN_EXPIRY=604800000
```

## 🔧 Configured Features

### AI Providers
- ✅ **Anthropic** - Claude Opus 4.1, Sonnet 4.5, Haiku 4.5
- ✅ **OpenAI** - GPT-4, GPT-4o, o3, o4-mini, Assistants
- ✅ **Google** - Gemini models
- ✅ **Cohere** - Command-R models
- ✅ **OpenRouter** - Multiple providers
- ✅ **Moonshot AI** - Kimi K2 thinking models (NEW)
- ✅ **xAI (Grok)** - Grok models with vision (NEW)
- ✅ **AI/ML API** - Multi-provider access (NEW)

### Capabilities
- ✅ **Agents** - Code execution, file search, web search
- ✅ **MCP GitHub Server** - Access repos via GitHub API
- ✅ **Web Search** - Tavily integration
- ✅ **File Upload** - Multiple file formats
- ✅ **Tools** - Calculator, web search, image generation

### GitHub Integration (MCP)
The GitHub MCP server allows you to:
- Browse repository files via GitHub API
- Search code across your repos
- Read files from: mibach-crypto/csuite-ui-v2 and other repos
- Works on cloud deployment (no local filesystem needed)

## 🚀 Deployment Steps

1. **Push to GitHub**:
   ```bash
   cd C:\Users\Mike\Documents\Github\LibreChat
   git add .
   git commit -m "Configure for Render deployment with all API keys"
   git push
   ```

2. **Render will auto-deploy** from your connected repository

3. **Set Environment Variables** in Render dashboard (copy from above)

4. **Access your deployment**: https://librechat-873o.onrender.com

## 📝 Usage with GitHub Repos

Since MCP GitHub server is configured, you can:
- "Show me the README from mibach-crypto/csuite-ui-v2"
- "Search for React components in csuite-ui-v2"
- "Read the package.json from my csuite-ui-v2 repo"
- "List files in the src directory of csuite-ui-v2-ios"

## ⚠️ Important Notes

1. **Environment Variables**: All keys must be set in Render's environment variables section
2. **MongoDB**: Using MongoDB Atlas (not Render's MongoDB)
3. **GitHub Access**: MCP server uses GitHub API (works on cloud)
4. **Project Folders**: The local project folders are for development only
5. **Config File**: librechat.yaml is read from the repo automatically

## 🔒 Security
- All sensitive keys are in environment variables
- Never commit .env file to public repos
- This is a private repo, so .env is included but should still use Render env vars for production
