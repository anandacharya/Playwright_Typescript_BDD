import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { pageFixture } from './hooks/BrowserContextFixture';

let page: Page;

const url = 'http://www.webdriveruniversity.com';

Given('I navigate to Webdriveruniversity.com homepage', async () => {
    await pageFixture.page.goto(url);
});

When('I click on the Contact Us button', async () => {
    // await page.click('#contact-us');
    const contactUs_button = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUs_button.click();
});

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

