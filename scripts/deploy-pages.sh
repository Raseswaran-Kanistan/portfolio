#!/usr/bin/env bash
# Manual GitHub Pages publish (gh-pages branch).
# Use until `gh auth refresh -s workflow` allows pushing Actions workflows.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
touch dist/.nojekyll
rm -rf /tmp/portfolio-pages
mkdir /tmp/portfolio-pages
cp -a dist/. /tmp/portfolio-pages/
cd /tmp/portfolio-pages
git init -b gh-pages
git add -A
git -c user.name='Raseswaran Kanistan' -c user.email='rkanistan2000@gmail.com' commit -m "Deploy portfolio site"
git remote add origin https://github.com/Raseswaran-Kanistan/portfolio.git
# Replace remote branch contents without a local force of an existing shared history.
git push origin gh-pages --force
echo "Published → https://raseswaran-kanistan.github.io/portfolio/"
