
/* These scores represent the results of a performance test run using Cypress and Google Lighthouse. Lighthouse calculates your overall Performance score based on a weighted average of several performance metrics, including First Contentful Paint, Speed Index, Largest Contentful Paint, Time to Interactive, Total Blocking Time, and Cumulative Layout Shift .

Each metric is assigned a weight, with more heavily weighted metrics having a bigger effect on your overall Performance score. Once Lighthouse has gathered the performance metrics, it converts each raw metric value into a metric score from 0 to 100 by looking where the metric value falls on its Lighthouse scoring distribution.

In addition to the performance metrics, Lighthouse also provides scores for accessibility, best-practices, SEO, and PWA. These scores represent how well your web application performs in each of these categories.

The thresholds you set represent the minimum acceptable score for each category. If your web application scores below the threshold for any category, it may indicate that there is room for improvement in that area.
 
There are several ways you can improve your performance score in Lighthouse. Some common suggestions include:

- Eliminating render-blocking resources: Render-blocking resources are either scripts or stylesheets that prevent the page from being displayed until they have finished loading. By eliminating or deferring these resources, you can improve the speed at which your page loads ¹.
- Using a Content Delivery Network (CDN) to optimize images: A CDN can help deliver images faster by caching them on servers located closer to the user ¹.
- Using improved image formats such as WebP: WebP is a modern image format that provides better compression and quality than older formats such as JPEG and PNG ¹.
- Removing unused CSS: Unused CSS can slow down the rendering of your page. By removing any CSS that is not being used, you can improve the performance of your page ¹.
- Minifying CSS: Minifying your CSS can help reduce the size of your stylesheets, which can improve the performance of your page ¹.

These are just a few suggestions for improving your performance score in Lighthouse. You can find more detailed information and suggestions in the Opportunities section of your Lighthouse report ².

Source: Conversation with Bing, 6/16/2023(1) How to Improve Lighthouse Score - Performance - DEV Community. https://dev.to/lindaojo/how-to-improve-lighthouse-score-performance-57cb Accessed 6/16/2023.
(2) Lighthouse performance scoring - Chrome Developers. https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/ Accessed 6/16/2023.
(3) javascript - Improve lighthouse performance score - Stack Overflow. https://stackoverflow.com/questions/65449612/improve-lighthouse-performance-score Accessed 6/16/2023.
(4) How to Improve Your Website Lighthouse Performance - Codeless. https://codeless.co/improve-lighthouse-performance/ Accessed 6/16/2023.
*/
describe('Performance testing with Cypress and Lighthouse', () => {
    it('should run performance tests on example.com', () => {
        
      cy.visit('/')
      cy.lighthouse({
        
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        'first-contentful-paint': 2000,
        'largest-contentful-paint': 3000,
        'total-blocking-time': 3000,
        interactive: 2000,
        seo: 50,
        pwa: 50,
      },
      {
        timeout: 120000, // Increase the timeout period to 120 seconds
      }
      ).then((lighthouseResults) => {
        // Log the Lighthouse results object
        cy.log(JSON.stringify(lighthouseResults));
      });
    });;
    });
/* 
Lighthouse calculates your overall Performance score based on a weighted average of several performance metrics, including First Contentful Paint, Speed Index, Largest Contentful Paint, Time to Interactive, Total Blocking Time, and Cumulative Layout Shift.
- ** PWA is an app that is built using web platform technologies, but provides a user experience similar to that of a platform-specific app. To be considered a PWA, a site must meet certain technical criteria, including being served over a secure connection, being able to load while offline, and having a Web App Manifest with certain properties
- **First Contentful Paint (FCP)** measures the time it takes for the first piece of content to be rendered on the page. A fast FCP can help reassure users that the page is loading.
- **Speed Index** measures how quickly the content of a page is visibly populated. A low Speed Index indicates that the page displays its content quickly.
- **Largest Contentful Paint (LCP)** measures the time it takes for the largest piece of content to be rendered on the page. A fast LCP can help reassure users that the page is loading and provide a good user experience.
- **Time to Interactive (TTI)** measures the time it takes for the page to become fully interactive. A low TTI indicates that users can interact with the page quickly.
- **Total Blocking Time (TBT)** measures the total amount of time that the main thread was blocked for long enough to prevent input responsiveness. A low TBT indicates that the page is responsive to user input.
- **Cumulative Layout Shift (CLS)** measures how much the layout of the page shifts during loading. A low CLS indicates that the page is stable and does not shift around as it loads.

Each metric is assigned a weight, with more heavily weighted metrics having a bigger effect on your overall Performance score. You can set thresholds for each metric to represent the minimum acceptable score for your web application. For example, you might set a threshold of 50 for FCP, meaning that any FCP score below 50 would be considered unacceptable.

Once Lighthouse has gathered the performance metrics, it converts each raw metric value into a metric score from 0 to 100 by looking where the metric value falls on its Lighthouse scoring distribution. If any of your metric scores fall below their respective thresholds, it may indicate that there is room for improvement in that area.
 */