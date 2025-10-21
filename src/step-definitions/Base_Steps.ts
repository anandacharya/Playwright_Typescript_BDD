import { When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/BrowserContextFixture';


When('I switch to a new browser tab', async () => {
    await pageFixture.context.waitForEvent('page'); 
    //Retrieve all the pages in the context
    const allPages = await pageFixture.context.pages();
    //Switch to the newly opened tab
    pageFixture.page = allPages[allPages.length - 1];
    //bring the new tab to the front
    await pageFixture.page.bringToFront();
    //ensure that the new tab is loaded
    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });
})

Then('I wait for {int} seconds', async (seconds: number) => {
    await pageFixture.page.waitForTimeout(seconds * 1000);
});

