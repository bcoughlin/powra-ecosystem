#!/bin/bash

# Update all submodules to their latest commits
echo "🔄 Updating all Powra ecosystem submodules..."

git submodule update --remote --recursive

echo ""
echo "📊 Current submodule status:"
git submodule status

echo ""
echo "✅ Update complete! Review changes and commit if needed:"
echo "   git add ."
echo "   git commit -m 'Update submodules to latest'"
echo "   git push"
