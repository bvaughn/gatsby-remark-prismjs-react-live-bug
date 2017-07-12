Opening this page by clicking on the header above will show a line highlight below.

```js{2,2}
// This is a line.
// This line should be highlighted.
```

Reloading the page once it has been opened will cause the highlight to disappear.

Removing the `react-live` library by deleting [this line](https://github.com/bvaughn/gatsby-remark-prismjs-react-live-bug/blob/0bbce7ba40d7f026cede9ab08db0c3f2fcc8a284/src/pages/index.js#L5) will fix the issue.