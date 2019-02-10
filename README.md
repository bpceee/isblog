# isBlog

Set up a blog using git repo's issues as posts. Powered by [Gatsby](https://www.gatsbyjs.org/).

## Set up

- Create a file name `.env` with following definition:
```
REACT_APP_TOKEN=your_token_created_from_https://github.com/settings/tokens
```
- Set `scripts.deploy` in `package.json` for which repo to deploy on. Refer to [gh-pages docs](https://www.npmjs.com/package/gh-pages)
- Install dependencies: `yarn`

## How to blog

Create issues in your `REACT_APP_REPO`. Remember to lable all the issues you wanna published to `post`, since you don't anyone else to inundate blog. And tag the about page `about`.

Run `yarn build && yarn deploy` to publish. 

## Development

`yarn start`

Runs the app in the development mode.

## Learn More

[Using Github Issues to host a blog](https://bpceee.github.io/posts/1)

