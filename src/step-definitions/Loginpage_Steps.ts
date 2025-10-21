import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/BrowserContextFixture';
import { expect } from '@playwright/test';

       
         When('I enter a username {word}', async (username: string) => {
            await pageFixture.page.getByPlaceholder("Username").fill(username);

         });
       
       
         When('I enter a password {word}', async (username: string) =>{
            await pageFixture.page.getByPlaceholder("Password").fill(username);
         });
       
       let alertText: string;

       
         When('I click on the login button', async () => {
            await pageFixture.page.on("dialog", async (alert) => {
                alertText = alert.message();
                //console.log(alertText);
                await alert.accept();
            })

            const loginButton = await pageFixture.page.locator('#login-button');
            await loginButton.hover();
            await loginButton.click({force: true});
            //await pageFixture.page.waitForTimeout(2000);

         });
       

         Then('I should see an alert box that contains text {string}', async (expectedAlertText: string) => {
            expect(alertText).toBe(expectedAlertText);
         });
