# GitHub deploy notes

The site is live via the `gh-pages` branch:

https://raseswaran-kanistan.github.io/portfolio/

## Current publish method

```bash
./scripts/deploy-pages.sh
```

## Optional: GitHub Actions

The OAuth token used by `gh` lacked the `workflow` scope, so
`.github/workflows/deploy.yml` could not be pushed yet.

To enable Actions deploy later:

```bash
gh auth refresh -s workflow,repo
git add .github/workflows/deploy.yml
git commit -m "Enable GitHub Actions Pages deploy"
git push
```

Then switch Pages source to **GitHub Actions** in repo Settings → Pages.
