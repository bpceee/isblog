# isBlog

Set up a blog using git repo's issues as posts.

## Set up

- `cp .env.example .env` and update all the ENV variables
- Set `scripts.deploy` in `package.json` for which repo to deploy on. Refer to [gh-pages docs](https://www.npmjs.com/package/gh-pages)
- Install dependencies: `npm ci`

## How to blog

Create issues in your `BLOG_REPO`. Remember to label all the issues you wanna published to `post`, since you don't anyone else to inundate blog. And tag the about page `about`.

Run `npm run build && npm run deploy` to publish.

## Development

`npm run dev`

Runs the app in the development mode.

## Learn More

[Using Github Issues to host a blog](https://bpceee.github.io/posts/1)

## TODO:

- More environment variables to make the configuration easier
