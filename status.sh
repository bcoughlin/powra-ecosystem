#!/bin/bash

# Check status of all submodules
echo "📊 Powra Ecosystem Status"
echo "========================"
echo ""

REPOS=("powra-ecosystem-docker" "powra-frontend" "powra-auth" "powra-agent" "powra-backend" "powra.ai")

for repo in "${REPOS[@]}"; do
    echo "🔍 $repo"
    cd "$repo" 2>/dev/null || { echo "   ❌ Directory not found"; echo ""; continue; }
    
    # Check for uncommitted changes
    if [[ -n $(git status -s) ]]; then
        echo "   ⚠️  Uncommitted changes:"
        git status -s | sed 's/^/      /'
    else
        echo "   ✅ Clean working directory"
    fi
    
    # Check current branch
    branch=$(git rev-parse --abbrev-ref HEAD)
    echo "   📍 Branch: $branch"
    
    # Check if ahead/behind remote
    if git remote get-url origin >/dev/null 2>&1; then
        git fetch origin --quiet
        local_commit=$(git rev-parse HEAD)
        remote_commit=$(git rev-parse origin/$branch 2>/dev/null || echo "none")
        
        if [[ "$local_commit" != "$remote_commit" ]]; then
            ahead=$(git rev-list --count origin/$branch..HEAD 2>/dev/null || echo "0")
            behind=$(git rev-list --count HEAD..origin/$branch 2>/dev/null || echo "0")
            
            if [[ "$ahead" -gt 0 ]]; then
                echo "   ⬆️  Ahead by $ahead commits (need to push)"
            fi
            if [[ "$behind" -gt 0 ]]; then
                echo "   ⬇️  Behind by $behind commits (need to pull)"
            fi
        else
            echo "   ✅ In sync with remote"
        fi
    else
        echo "   ⚠️  No remote configured"
    fi
    
    echo ""
    cd ..
done

echo "💡 Tips:"
echo "   - Use './update-all.sh' to update all submodules"
echo "   - Use 'git submodule update --init --recursive' to initialize"
echo "   - Use 'cd powra-ecosystem-docker && ./start.sh' to run services"
