# rokas.dev and rokasjankunas.com

My personal website made with Angular and Bootstrap. Hosted on GitHub Pages. **Custom one-page with dynamic URLs solution.**

Deployment steps:
* Run `ng build --deploy`.
* Remove all files from `gh-pages` branch (leave `404.html` if unchanged, otherwise copy `index.html` and rename to `404.html` after the following step).
* Copy `/dist` contents from `master` to `gh-pages` branch.
* Commit this branch.
