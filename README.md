# Powra Ecosystem

Complete monorepo for the Powra AI platform - a microservices-based authentication and conversational AI system.

## 📦 Repository Structure

This repository contains all Powra services as git submodules:

```
powra-ecosystem/
├── powra-ecosystem-docker/    # Docker Compose orchestration
├── powra-frontend/            # React frontend (Vite)
├── powra-auth/                # Authentication service (FastAPI)
├── powra-agent/               # AI Agent service (LangChain)
├── powra-backend/             # Legacy backend (deprecated)
└── powra.ai/                  # Marketing/landing page
```

## 🚀 Quick Start

```bash
# Clone with all submodules
git clone --recurse-submodules https://github.com/bcoughlin/powra-ecosystem.git
cd powra-ecosystem

# Or if already cloned, initialize submodules
git submodule update --init --recursive

# Create local VS Code workspace (optional)
cp powra-ecosystem.code-workspace.template powra-ecosystem.code-workspace

# Start the development environment
cd powra-ecosystem-docker
./start.sh
```

## 🏗️ Architecture

### Active Services (Microservices Architecture)

| Service | Port | Repository | Description |
|---------|------|------------|-------------|
| **Frontend** | 5173 | `powra-frontend` | React app with Vite dev server |
| **Auth** | 8001 | `powra-auth` | Authentication, JWT, OAuth (FastAPI-Users) |
| **Agent** | 8003 | `powra-agent` | LangChain conversational AI |
| **Database** | 5432 | - | PostgreSQL (via Docker) |
| **pgAdmin** | 5050 | - | Database management UI |

### Legacy Services

| Service | Repository | Status |
|---------|------------|--------|
| **Backend** | `powra-backend` | ⚠️ Deprecated - Replaced by powra-auth + powra-agent |

### Static Sites

| Service | Repository | Description |
|---------|------------|-------------|
| **Powra.ai** | `powra.ai` | Marketing website and documentation |

## 🔄 Working with Submodules

### Pulling Latest Changes

```bash
# Update all submodules to latest
git submodule update --remote --recursive

# Or update specific submodule
cd powra-frontend
git pull origin main
```

### Making Changes to a Submodule

```bash
# Work in the submodule directory as a normal git repo
cd powra-auth
git checkout -b feature/new-oauth-provider
# Make changes...
git add .
git commit -m "Add new OAuth provider"
git push origin feature/new-oauth-provider

# Update parent repo to track the new commit
cd ..
git add powra-auth
git commit -m "Update powra-auth to include new OAuth provider"
git push
```

### Checking Submodule Status

```bash
# See which commit each submodule is on
git submodule status

# See if submodules have uncommitted changes
git submodule foreach 'git status'
```

## 🛠️ Development Workflow

### VS Code Workspace Setup

The repository includes a VS Code workspace template for multi-root development:

```bash
# Create your local workspace file
cp powra-ecosystem.code-workspace.template powra-ecosystem.code-workspace

# Open in VS Code
code powra-ecosystem.code-workspace
```

The workspace includes:
- **7 folders** organized by service (root, docker, frontend, auth, agent, legacy backend, marketing)
- **Pre-configured settings** for Python/JS/TS formatting and linting
- **Launch configurations** for debugging FastAPI services and React frontend
- **Tasks** for common operations (start/stop services, install dependencies)
- **Extension recommendations** (Python, Docker, Prettier, ESLint, Copilot)

Your local `.code-workspace` file is git-ignored, so you can customize it without affecting the repository.

### Working with Services

1. **Start all services**: `cd powra-ecosystem-docker && ./start.sh`
2. **Work on a service**: `cd powra-auth` (or any other service)
3. **Make changes**: Edit code, commit to that service's repo
4. **Test locally**: Services auto-reload in Docker
5. **Push changes**: Push to service repo, then update parent
6. **Stop services**: `cd powra-ecosystem-docker && ./stop.sh`

## 📋 Individual Repository Links

- **Docker Orchestration**: https://github.com/bcoughlin/powra-ecosystem-docker
- **Frontend**: https://github.com/bcoughlin/agentic-frontend-multiuser
- **Auth Service**: https://github.com/bcoughlin/powra-auth
- **AI Agent**: https://github.com/bcoughlin/agent-langchain
- **Backend (Legacy)**: https://github.com/bcoughlin/agentic-backend
- **Marketing Site**: https://github.com/bcoughlin/powra.ai

## 📚 Documentation

Each submodule has its own README with detailed documentation:

- **[powra-ecosystem-docker/README.md](powra-ecosystem-docker/README.md)** - Docker setup, architecture diagrams
- **[powra-frontend/README.md](powra-frontend/README.md)** - React app setup and components
- **[powra-auth/README.md](powra-auth/README.md)** - Authentication API documentation
- **[powra-agent/README.md](powra-agent/README.md)** - AI agent configuration and usage

## 🎯 Current Work-in-Progress

The Powra platform is actively being developed with a focus on:

- ✅ Microservices architecture (auth separated from AI agent)
- ✅ JWT + OAuth authentication (Google, Discord)
- ✅ LangChain conversational AI
- 🔄 OpenAI integration and memory management
- 🔄 Advanced conversation features
- 🔄 Production deployment on Render

## 🔧 Troubleshooting

### Submodule not initialized
```bash
git submodule update --init --recursive
```

### Submodule pointing to wrong commit
```bash
cd powra-ecosystem-docker
git pull origin main
cd ..
git add powra-ecosystem-docker
git commit -m "Update submodule to latest"
```

### Clean rebuild
```bash
cd powra-ecosystem-docker
./cleanup.sh
./start.sh
```

## 📄 License

See individual submodule repositories for license information.
