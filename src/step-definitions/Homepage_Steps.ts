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

When('I click on the Login Portal button', async () => {
    const login_button = await pageFixture.page.getByRole('link', { name: 'LOGIN PORTAL Login Portal' });
    await login_button.click();
});