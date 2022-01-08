# Conquering Responsive Layouts

this is a start to finish complete example of solving [Kevin Powell's](https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw) [Conquering Responsive Layouts](https://courses.kevinpowell.co/courses/conquering-responsive-layouts/) course.... using Tailwind CSS v3!

You should be able to review all the PRs and branches to see my steps / mistakes :grin:.  I went out of my way to take it one step at a time.  I also opt'd to keep things very simple and avoid extra complexity like using a front end framework like Nuxt/Vue.js or Next/React.js.

The goal here wasn't as much about DRY as it was about getting some experience with Tailwind in the simplest possible way.  That said, Tailwind itself is a node lib and getting intellisense in VS Code is a game changer that you can't get if you use the [tailwind play CDN](https://tailwindcss.com/docs/installation/play-cdn).  Therefore, this repo will start off with an empty `package.json` and we'll start building from there.

## Quick Start

this assumes you are running VS Code and the `Live Server` extension:

1. clone the repo and `cd` into the project root
1. run `npm install` to install tailwind
1. start the tailwind cli with `npm run tailwind`
1. launch `Live Server`