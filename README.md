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

## For development

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Limitation

There is a [rate limit](https://developer.github.com/v4/guides/resource-limitations/) to GitHub API calls. So, reconsider if you have a high volumn visitors..

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

