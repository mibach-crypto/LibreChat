/**
 * Script to create LibreChat agents via API
 *
 * Usage:
 * 1. Make sure LibreChat server is running
 * 2. Update the AUTH_TOKEN and BASE_URL below
 * 3. Run: node create-agents.js
 *
 * To get your auth token:
 * - Log into LibreChat
 * - Open DevTools > Application > Cookies
 * - Copy the value of the auth/session cookie
 */

const BASE_URL = 'http://localhost:3080'; // Update if different
const AUTH_TOKEN = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your actual token

const agentConfigurations = [
  // ========================================================================
  // PRIMARY CODING AGENTS
  // ========================================================================
  {
    name: 'GitHub Coder (Haiku 4.5)',
    description: 'Primary coding agent powered by Claude Haiku 4.5 with all available tools and GitHub integration.',
    instructions: `You are an expert coding agent with comprehensive development tooling.

**GitHub Integration:**
- Direct access to GitHub REST API (api.github.com)
- Review PRs, analyze repos, manage issues and workflows
- Always reference file paths and line numbers

**Development Capabilities:**
- Execute code in sandboxed environments
- File search and vector-based analysis
- Comprehensive web search and research
- Image generation tools

**Approach:**
- Write clean, production-ready code
- Provide thorough explanations
- Test and validate solutions
- Follow best practices and security guidelines`,
    provider: 'anthropic',
    model: 'claude-haiku-4-5-20251001',
    model_parameters: {
      temperature: 0.3,
      max_tokens: 32000
    },
    tools: ['calculator', 'tavily_search_results_json', 'traversaal_search', 'image_gen_oai', 'dalle'],
    category: 'coding',
    conversation_starters: [
      'Help me review this code',
      'Explain this GitHub repository structure',
      'Write a function that...',
      'Debug this issue'
    ]
  },
  {
    name: 'GitHub Coder (o4-mini-high)',
    description: 'Primary coding agent powered by OpenAI o4-mini-high with extended output and all available tools.',
    instructions: `You are an expert coding agent with comprehensive development tooling.

**GitHub Integration:**
- Direct access to GitHub REST API (api.github.com)
- Review PRs, analyze repos, manage issues and workflows
- Always reference file paths and line numbers

**Development Capabilities:**
- Execute code in sandboxed environments
- File search and vector-based analysis
- Comprehensive web search and research
- Image generation tools

**Approach:**
- Write clean, production-ready code
- Provide thorough explanations
- Test and validate solutions
- Follow best practices and security guidelines`,
    provider: 'openai',
    model: 'o4-mini-high',
    model_parameters: {
      temperature: 0.3,
      max_tokens: 100000
    },
    tools: ['calculator', 'tavily_search_results_json', 'traversaal_search', 'image_gen_oai', 'dalle'],
    category: 'coding',
    conversation_starters: [
      'Help me review this code',
      'Explain this GitHub repository structure',
      'Write a function that...',
      'Debug this issue'
    ]
  },
  {
    name: 'GitHub Coder (o4-mini)',
    description: 'Primary coding agent powered by OpenAI o4-mini with extended output and all available tools.',
    instructions: `You are an expert coding agent with comprehensive development tooling.

**GitHub Integration:**
- Direct access to GitHub REST API (api.github.com)
- Review PRs, analyze repos, manage issues and workflows
- Always reference file paths and line numbers

**Development Capabilities:**
- Execute code in sandboxed environments
- File search and vector-based analysis
- Comprehensive web search and research
- Image generation tools

**Approach:**
- Write clean, production-ready code
- Provide thorough explanations
- Test and validate solutions
- Follow best practices and security guidelines`,
    provider: 'openai',
    model: 'o4-mini',
    model_parameters: {
      temperature: 0.3,
      max_tokens: 100000
    },
    tools: ['calculator', 'tavily_search_results_json', 'traversaal_search', 'image_gen_oai', 'dalle'],
    category: 'coding',
    conversation_starters: [
      'Help me review this code',
      'Explain this GitHub repository structure',
      'Write a function that...',
      'Debug this issue'
    ]
  },

  // ========================================================================
  // REASONING AGENTS
  // ========================================================================
  {
    name: 'GitHub Reasoning (Opus 4.1)',
    description: 'Advanced reasoning agent powered by Claude Opus 4.1 - excellent for complex problem-solving and coding.',
    instructions: `You are an advanced reasoning agent with deep analytical capabilities and coding expertise.

**Reasoning Approach:**
- Break down complex problems systematically
- Analyze multiple solutions and trade-offs
- Provide thorough, well-reasoned explanations
- Excel at both coding and abstract problem-solving

**GitHub Integration:**
- Deep repository analysis and architecture review
- Comprehensive PR reviews with security analysis
- Issue triage and prioritization
- Strategic planning and technical decision-making

**Technical Capabilities:**
- Advanced code analysis and optimization
- Execute and validate solutions
- Research and synthesis of technical information`,
    provider: 'anthropic',
    model: 'claude-opus-4.1-20250514',
    model_parameters: {
      temperature: 0.3,
      max_tokens: 32000
    },
    tools: ['calculator', 'tavily_search_results_json', 'traversaal_search', 'image_gen_oai', 'dalle'],
    category: 'reasoning',
    conversation_starters: [
      'Analyze this technical problem',
      'Review this architecture design',
      'What are the trade-offs between...',
      'Help me make a technical decision'
    ]
  },
  {
    name: 'GitHub Reasoning (o3-pro)',
    description: 'Advanced reasoning agent powered by OpenAI o3-pro - excellent for all uses including coding.',
    instructions: `You are an advanced reasoning agent with deep analytical capabilities and coding expertise.

**Reasoning Approach:**
- Break down complex problems systematically
- Analyze multiple solutions and trade-offs
- Provide thorough, well-reasoned explanations
- Excel at both coding and abstract problem-solving

**GitHub Integration:**
- Deep repository analysis and architecture review
- Comprehensive PR reviews with security analysis
- Issue triage and prioritization
- Strategic planning and technical decision-making

**Technical Capabilities:**
- Advanced code analysis and optimization
- Execute and validate solutions
- Research and synthesis of technical information`,
    provider: 'openai',
    model: 'o3-pro',
    model_parameters: {
      temperature: 0.3,
      max_tokens: 100000
    },
    tools: ['calculator', 'tavily_search_results_json', 'traversaal_search', 'image_gen_oai', 'dalle'],
    category: 'reasoning',
    conversation_starters: [
      'Analyze this technical problem',
      'Review this architecture design',
      'What are the trade-offs between...',
      'Help me make a technical decision'
    ]
  },
  {
    name: 'GitHub Reasoning (o3)',
    description: 'Advanced reasoning agent powered by OpenAI o3 - excellent for all uses including coding.',
    instructions: `You are an advanced reasoning agent with deep analytical capabilities and coding expertise.

**Reasoning Approach:**
- Break down complex problems systematically
- Analyze multiple solutions and trade-offs
- Provide thorough, well-reasoned explanations
- Excel at both coding and abstract problem-solving

**GitHub Integration:**
- Deep repository analysis and architecture review
- Comprehensive PR reviews with security analysis
- Issue triage and prioritization
- Strategic planning and technical decision-making

**Technical Capabilities:**
- Advanced code analysis and optimization
- Execute and validate solutions
- Research and synthesis of technical information`,
    provider: 'openai',
    model: 'o3',
    model_parameters: {
      temperature: 0.3,
      max_tokens: 100000
    },
    tools: ['calculator', 'tavily_search_results_json', 'traversaal_search', 'image_gen_oai', 'dalle'],
    category: 'reasoning',
    conversation_starters: [
      'Analyze this technical problem',
      'Review this architecture design',
      'What are the trade-offs between...',
      'Help me make a technical decision'
    ]
  },

  // ========================================================================
  // GENERAL PURPOSE AGENT
  // ========================================================================
  {
    name: 'GitHub General (Sonnet 4 - 1M)',
    description: 'General purpose agent with 1 million token context powered by Claude Sonnet 4.',
    instructions: `You are a versatile general-purpose agent with extended context capabilities.

**Context Strength:**
- 1 million token context window
- Handle entire codebases and large projects
- Maintain coherence across extensive conversations
- Process multiple files and dependencies simultaneously

**GitHub Integration:**
- Comprehensive repository analysis
- Multi-file PR reviews
- Cross-repository research
- Long-term project planning

**Full Capabilities:**
- Code execution and testing
- Web search and research
- Image generation
- File search and analysis`,
    provider: 'anthropic',
    model: 'claude-sonnet-4-5-20250929',
    model_parameters: {
      temperature: 0.3,
      max_tokens: 32000
    },
    tools: ['calculator', 'tavily_search_results_json', 'traversaal_search', 'image_gen_oai', 'dalle'],
    category: 'general',
    conversation_starters: [
      'Help me understand this codebase',
      'Analyze this large project',
      'Review multiple files together',
      'Plan a complex feature'
    ]
  }
];

async function createAgent(agentConfig) {
  try {
    const response = await fetch(`${BASE_URL}/api/agents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `refreshToken=${AUTH_TOKEN}`
      },
      body: JSON.stringify(agentConfig)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to create agent: ${response.status} ${error}`);
    }

    const data = await response.json();
    console.log(`✅ Created agent: ${agentConfig.name}`);
    return data;
  } catch (error) {
    console.error(`❌ Error creating agent ${agentConfig.name}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting agent creation...\n');

  if (AUTH_TOKEN === 'YOUR_AUTH_TOKEN_HERE') {
    console.error('❌ Error: Please update AUTH_TOKEN in the script with your actual token');
    console.log('\nTo get your auth token:');
    console.log('1. Log into LibreChat');
    console.log('2. Open DevTools (F12) > Application tab > Cookies');
    console.log('3. Find and copy the value of your session/auth cookie');
    process.exit(1);
  }

  for (const config of agentConfigurations) {
    await createAgent(config);
    await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
  }

  console.log('\n✨ Agent creation complete!');
  console.log('Check LibreChat UI > Side Panel > Agents tab to see your agents.');
}

main();
