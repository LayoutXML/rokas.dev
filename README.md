# rokas.dev and rokasjankunas.com

My personal website made with Angular and Bootstrap. Hosted on GitHub Pages. **Custom one-page with dynamic URLs solution.**

Deployment steps:
* Run `ng build --prod`.
* Remove all files from `gh-pages` branch.
* Copy `/dist` contents from `master` to `gh-pages` branch.
* Make a copy of `index.html` and rename it to `404.html`.
* Commit this branch.
