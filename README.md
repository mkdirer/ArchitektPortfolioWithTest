## Personal Portfolio

[Architect Portfolio]()

## Get started

```
npm i && npm run dev
```

## About repo

- Using NextJs
- React
- Styled components (each component has a corresponding ComponentStyles.js file)

## Testing

### visual testing

To enable visual testing, I implemented an "ignore threshold" mechanism, which allows us to control the comparison sensitivity and reduce false positives. You can find more information on how to configure it in our Happo documentation.

When it comes to testing all the URLs in our app, we have implemented a comprehensive approach that covers the entire application. Our testing strategy includes automated checks for each URL to ensure they are functioning correctly and rendering as expected.

Regarding the timelineData.js file, we have integrated it into our visual tests. Therefore, writing a separate snapshot test specifically for this file is not necessary, as its data is already covered in our visual testing process.

### functional testing

When testing the links in Projects.js, we have implemented functional tests to verify their proper functionality. These tests ensure that the links navigate to the intended destinations and that any associated actions or interactions are working correctly.

### front-end perf

During our front-end performance testing, we encountered an error message stating "cy.lighthouse(), Electron is not supported. Skipping...". This error was a result of running Cypress on the Electron browser. To address this, we switched to using the Chrome browser for our performance testing, which resolved the issue. We continue to monitor and optimize the front-end performance of our application to ensure a smooth user experience.

### updating npm packages

Use [npm-check](https://koalatea.io/how-to-update-all-your-npm-packages-at-once)
