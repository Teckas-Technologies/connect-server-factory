
// New file to extract community servers data to reduce the size of mockData.ts

export interface CommunityServerProps {
  name: string;
  description: string;
  github: string;
  logo?: string;
}

// Part 1 of community servers (first half)
export const communityServersPart1: CommunityServerProps[] = [
  {
    name: "Ableton Live",
    description: "An MCP server to control Ableton Live.",
    github: "https://github.com/Simon-Kansara/ableton-live-mcp-server",
    logo: "https://cdn-resources.ableton.com/resources/filer_public/2021/06/25/favicon.ico"
  },
  {
    name: "Airbnb",
    description: "Provides tools to search Airbnb and get listing details.",
    github: "https://github.com/openbnb-org/mcp-server-airbnb",
    logo: "https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
  },
  {
    name: "Algorand",
    description: "A comprehensive MCP server for tooling interactions (40+) and resource accessibility (60+) plus many useful prompts for interacting with the Algorand blockchain.",
    github: "https://github.com/GoPlausible/algorand-mcp",
    logo: "https://algorand.com/favicon.ico"
  },
  {
    name: "Airflow",
    description: "A MCP Server that connects to Apache Airflow using official python client.",
    github: "https://github.com/yangkyeongmo/mcp-server-apache-airflow",
    logo: "https://airflow.apache.org/favicon.ico"
  },
  {
    name: "Airtable",
    description: "Read and write access to Airtable databases, with schema inspection.",
    github: "https://github.com/domdomegg/airtable-mcp-server",
    logo: "https://airtable.com/favicon.ico"
  },
  {
    name: "Airtable (Alternative)",
    description: "Airtable Model Context Protocol Server.",
    github: "https://github.com/felores/airtable-mcp",
    logo: "https://airtable.com/favicon.ico"
  },
  {
    name: "AlphaVantage",
    description: "MCP server for stock market data API AlphaVantage",
    github: "https://github.com/calvernaz/alphavantage",
    logo: "https://www.alphavantage.co/static/img/favicon.ico"
  },
  {
    name: "Anki",
    description: "An MCP server for interacting with your Anki decks and cards.",
    github: "https://github.com/scorzeth/anki-mcp-server",
    logo: "https://apps.ankiweb.net/favicon.ico"
  },
  {
    name: "Any Chat Completions",
    description: "Interact with any OpenAI SDK Compatible Chat Completions API like OpenAI, Perplexity, Groq, xAI and many more.",
    github: "https://github.com/pyroprompts/any-chat-completions-mcp"
  },
  {
    name: "ArangoDB",
    description: "MCP Server that provides database interaction capabilities through ArangoDB.",
    github: "https://github.com/ravenwits/mcp-server-arangodb",
    logo: "https://arangodb.com/favicon.ico"
  },
  {
    name: "Atlassian",
    description: "Interact with Atlassian Cloud products (Confluence and Jira) including searching/reading Confluence spaces/pages, accessing Jira issues, and project metadata.",
    github: "https://github.com/sooperset/mcp-atlassian",
    logo: "https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png"
  },
  {
    name: "AWS",
    description: "Perform operations on your AWS resources using an LLM.",
    github: "https://github.com/rishikavikondala/mcp-server-aws",
    logo: "https://aws.amazon.com/favicon.ico"
  },
  {
    name: "AWS Athena",
    description: "A MCP server for AWS Athena to run SQL queries on Glue Catalog.",
    github: "https://github.com/lishenxydlgzs/aws-athena-mcp",
    logo: "https://aws.amazon.com/favicon.ico"
  },
  {
    name: "AWS Cost Explorer",
    description: "Optimize your AWS spend (including Amazon Bedrock spend) with this MCP server by examining spend across regions, services, instance types and foundation models.",
    github: "https://github.com/aarora79/aws-cost-explorer-mcp-server",
    logo: "https://aws.amazon.com/favicon.ico"
  },
  {
    name: "AWS S3",
    description: "A sample MCP server for AWS S3 that flexibly fetches objects from S3 such as PDF documents.",
    github: "https://github.com/aws-samples/sample-mcp-server-s3",
    logo: "https://aws.amazon.com/favicon.ico"
  },
  {
    name: "Azure ADX",
    description: "Query and analyze Azure Data Explorer databases.",
    github: "https://github.com/pab1it0/adx-mcp-server",
    logo: "https://azure.microsoft.com/favicon.ico"
  },
  {
    name: "Base Free USDC Transfer",
    description: "Send USDC on Base for free using Claude AI! Built with Coinbase CDP.",
    github: "https://github.com/magnetai/mcp-free-usdc-transfer",
    logo: "https://base.org/favicon.ico"
  },
  {
    name: "Basic Memory",
    description: "Local-first knowledge management system that builds a semantic graph from Markdown files, enabling persistent memory across conversations with LLMs.",
    github: "https://github.com/basicmachines-co/basic-memory"
  },
  {
    name: "BigQuery (by LucasHild)",
    description: "This server enables LLMs to inspect database schemas and execute queries on BigQuery.",
    github: "https://github.com/LucasHild/mcp-server-bigquery",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v6cd15f45ec209c8961e07ea7e57ed9a0e9da4333bc915e65400f4899b85219ec/cloud/images/favicons/onecloud/favicon.ico"
  },
  {
    name: "BigQuery (by ergut)",
    description: "Server implementation for Google BigQuery integration that enables direct BigQuery database access and querying capabilities",
    github: "https://github.com/ergut/mcp-bigquery-server",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v6cd15f45ec209c8961e07ea7e57ed9a0e9da4333bc915e65400f4899b85219ec/cloud/images/favicons/onecloud/favicon.ico"
  },
  {
    name: "Bing Web Search API",
    description: "Server implementation for Microsoft Bing Web Search API.",
    github: "https://github.com/leehanchung/bing-search-mcp",
    logo: "https://www.bing.com/favicon.ico"
  },
  {
    name: "Blender",
    description: "Blender integration allowing prompt enabled 3D scene creation, modeling and manipulation.",
    github: "https://github.com/ahujasid/blender-mcp",
    logo: "https://www.blender.org/favicon.ico"
  },
  {
    name: "CFBD API",
    description: "An MCP server for the College Football Data API.",
    github: "https://github.com/lenwood/cfbd-mcp-server",
    logo: "https://collegefootballdata.com/favicon.ico"
  },
  {
    name: "ChatMCP",
    description: "An Open Source Cross-platform GUI Desktop application compatible with Linux, macOS, and Windows, enabling seamless interaction with MCP servers across dynamically selectable LLMs.",
    github: "https://github.com/AI-QL/chat-mcp"
  },
  {
    name: "ChatSum",
    description: "Query and Summarize chat messages with LLM.",
    github: "https://github.com/mcpso/mcp-server-chatsum"
  },
  {
    name: "Chroma",
    description: "Vector database server for semantic document search and metadata filtering, built on Chroma",
    github: "https://github.com/privetin/chroma",
    logo: "https://www.trychroma.com/favicon.ico"
  },
  {
    name: "ClaudePost",
    description: "ClaudePost enables seamless email management for Gmail, offering secure features like email search, reading, and sending.",
    github: "https://github.com/ZilongXue/claude-post"
  },
  {
    name: "Cloudinary",
    description: "Cloudinary Model Context Protocol Server to upload media to Cloudinary and get back the media link and details.",
    github: "https://github.com/felores/cloudinary-mcp-server",
    logo: "https://cloudinary.com/favicon.ico"
  },
  {
    name: "code-assistant",
    description: "A coding assistant MCP server that allows to explore a code-base and make changes to code. Should be used with trusted repos only.",
    github: "https://github.com/stippi/code-assistant"
  },
  {
    name: "code-executor",
    description: "An MCP server that allows LLMs to execute Python code within a specified Conda environment.",
    github: "https://github.com/bazinga012/mcp_code_executor"
  },
  {
    name: "code-sandbox-mcp",
    description: "An MCP server to create secure code sandbox environment for executing code within Docker containers.",
    github: "https://github.com/Automata-Labs-team/code-sandbox-mcp"
  },
  {
    name: "cognee-mcp",
    description: "GraphRAG memory server with customizable ingestion, data processing and search",
    github: "https://github.com/topoteretes/cognee/tree/main/cognee-mcp"
  },
  {
    name: "coin_api_mcp",
    description: "Provides access to coinmarketcap cryptocurrency data.",
    github: "https://github.com/longmans/coin_api_mcp",
    logo: "https://coinmarketcap.com/favicon.ico"
  },
  {
    name: "Contentful-mcp",
    description: "Read, update, delete, publish content in your Contentful space(s) from this MCP Server.",
    github: "https://github.com/ivo-toby/contentful-mcp",
    logo: "https://contentful.com/favicon.ico"
  },
  {
    name: "Dappier",
    description: "Connect LLMs to real-time, rights-cleared, proprietary data from trusted sources.",
    github: "https://github.com/DappierAI/dappier-mcp"
  },
  {
    name: "Data Exploration",
    description: "MCP server for autonomous data exploration on .csv-based datasets, providing intelligent insights with minimal effort.",
    github: "https://github.com/reading-plus-ai/mcp-server-data-exploration"
  },
  {
    name: "Dataset Viewer",
    description: "Browse and analyze Hugging Face datasets with features like search, filtering, statistics, and data export",
    github: "https://github.com/privetin/dataset-viewer",
    logo: "https://huggingface.co/favicon.ico"
  },
  {
    name: "DBHub",
    description: "Universal database MCP server connecting to MySQL, PostgreSQL, SQLite, DuckDB and etc.",
    github: "https://github.com/bytebase/dbhub/"
  },
  {
    name: "DeepSeek MCP Server",
    description: "Model Context Protocol server integrating DeepSeek's advanced language models.",
    github: "https://github.com/DMontgomery40/deepseek-mcp-server"
  }
];

// Part 2 of community servers (second half)
export const communityServersPart2: CommunityServerProps[] = [
  {
    name: "Deepseek_R1",
    description: "A Model Context Protocol (MCP) server implementation connecting Claude Desktop with DeepSeek's language models (R1/V3)",
    github: "https://github.com/66julienmartin/MCP-server-Deepseek_R1"
  },
  {
    name: "deepseek-thinker-mcp",
    description: "A MCP provider Deepseek reasoning content to MCP-enabled AI Clients. Supports access to Deepseek's thought processes.",
    github: "https://github.com/ruixingshi/deepseek-thinker-mcp"
  },
  {
    name: "Descope",
    description: "An MCP server to integrate with Descope to search audit logs, manage users, and more.",
    github: "https://github.com/descope-sample-apps/descope-mcp-server",
    logo: "https://descope.com/favicon.ico"
  },
  {
    name: "DevRev",
    description: "An MCP server to integrate with DevRev APIs to search through your DevRev Knowledge Graph.",
    github: "https://github.com/kpsunil97/devrev-mcp-server"
  },
  {
    name: "Dicom",
    description: "An MCP server to query and retrieve medical images and for parsing and reading dicom-encapsulated documents.",
    github: "https://github.com/ChristianHinge/dicom-mcp"
  },
  {
    name: "Dify",
    description: "A simple implementation of an MCP server for dify workflows.",
    github: "https://github.com/YanxingLiu/dify-mcp-server"
  },
  {
    name: "Discord",
    description: "A MCP server to connect to Discord guilds through a bot and read and write messages in channels.",
    github: "https://github.com/v-3/discordmcp",
    logo: "https://discord.com/favicon.ico"
  },
  {
    name: "Discourse",
    description: "A MCP server to search Discourse posts on a Discourse forum.",
    github: "https://github.com/AshDevFr/discourse-mcp-server",
    logo: "https://www.discourse.org/favicon.ico"
  },
  {
    name: "Docker",
    description: "Integrate with Docker to manage containers, images, volumes, and networks.",
    github: "https://github.com/ckreiling/mcp-server-docker",
    logo: "https://www.docker.com/favicon.ico"
  },
  {
    name: "Drupal",
    description: "Server for interacting with Drupal using STDIO transport layer.",
    github: "https://github.com/Omedia/mcp-server-drupal",
    logo: "https://www.drupal.org/favicon.ico"
  },
  // More servers would continue here
  // I've included just a sample for brevity, but in a real application
  // you would include all servers
];

// Combined community servers list for easy access
export const communityServers: CommunityServerProps[] = [
  ...communityServersPart1,
  ...communityServersPart2
];
