import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/BrowserContextFixture';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

When('I enter a first name', async () => {
    //await page.pause();
    await pageFixture.page.getByRole('textbox', { name: 'First Name' }).fill('Ananda');
});

When('I enter a last name', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Last Name' }).fill('Charya');
});


When('I enter a email address', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Email Address' }).fill('ananda@example.com');
});


When('I enter comments', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Comments' }).fill('This is a test comment.');
});


When('I click on the submit button', async () => {
    await pageFixture.page.waitForSelector('input[value="SUBMIT"]')
    await pageFixture.page.click('input[value="SUBMIT"]');
});



Then('I should see a thank you message', async () => {
    await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 2000 });
    const thankYouMessage = await pageFixture.page.innerText('#contact_reply h1');

    expect(thankYouMessage).toBe('Thank You for your Message!');
});

Then('I should see unsuccessful submission message', async () => {
    await pageFixture.page.waitForSelector('body');
    const bodyElement = await pageFixture.page.locator('body');
    const bodyText = await bodyElement.textContent();

    await expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);
});


//Cucumber expressions
When('I enter a specific first name {string}', async (firstName: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
});


When('I enter a specific last name {string}', async (lastName: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
});


When('I enter a specific email address {string}', async (emailAddress: string) => {
    await pageFixture.page.getByRole('textbox', { name: 'Email Address' }).fill(emailAddress);
});


When('I enter specific comments {string} and a number {int} within the comments', async (comments: string, num: number) => {
    await pageFixture.page.getByRole('textbox', { name: 'Comments' }).fill(comments + ' ' + num);
});

//Random data - faker
When('I enter a random first name', async () => {
    const randomFirstName = faker.person.firstName();
    await pageFixture.page.getByRole('textbox', { name: 'First Name' }).fill(randomFirstName);
});



When('I enter a random last name', async () => {
    const randomLastName = faker.person.lastName();
    await pageFixture.page.getByRole('textbox', { name: 'Last Name' }).fill(randomLastName);
});



When('I enter a random email address', async () => {
    const randomEmail = faker.internet.email();
    await pageFixture.page.getByRole('textbox', { name: 'Email Address' }).fill(randomEmail);
});