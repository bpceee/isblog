# isBlog

Set up a blog using git repo's issues as posts.

## Set up

- Create a file name `.env` with following definition:
```
REACT_APP_USERNAME=your_github_username
REACT_APP_REPO=your_issues_repo_name
REACT_APP_TITLE=your_homepage_title
REACT_APP_TOKEN=your_token_created_from_https://github.com/settings/tokens
```
- Set `homepage` in `package.json`
- Set `scripts.deploy` in `package.json` for which repo to deploy on. Refer to [gh-pages docs](https://www.npmjs.com/package/gh-pages)
- `npm install`
- `npm run build`
- `npm run deploy`

## How to blog

Create issues in your `REACT_APP_REPO`. Remember to lable all the issues you wanna published to `post`, since you don't anyone else to inundate blog.

The about page will be the issue labeled with `about`.

## Development

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Limitation

There is a [rate limit](https://developer.github.com/v4/guides/resource-limitations/) to GitHub API calls. So, reconsider if you have a high volumn visitors..

## Learn More

[Using Github Issues to host a blog](https://bpceee.github.io/posts/1)

