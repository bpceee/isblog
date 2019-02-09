# isBlog

Set up a blog using git repo's issues as posts. Powered by [Gatsby](https://www.gatsbyjs.org/).

## Set up

- Create a file name `.env` with following definition:
```
REACT_APP_TOKEN=your_token_created_from_https://github.com/settings/tokens
```
- Set `homepage` in `package.json`
- Set `scripts.deploy` in `package.json` for which repo to deploy on. Refer to [gh-pages docs](https://www.npmjs.com/package/gh-pages)
- `yarn`
- `yarn build`
- `yarn deploy`

## How to blog

Create issues in your `REACT_APP_REPO`. Remember to lable all the issues you wanna published to `post`, since you don't anyone else to inundate blog.

The about page will be the issue labeled with `about`.

## Development

`yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Learn More

[Using Github Issues to host a blog](https://bpceee.github.io/posts/1)

