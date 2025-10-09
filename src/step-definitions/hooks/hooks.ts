import { AfterAll, BeforeAll, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { pageFixture } from "./BrowserContextFixture";

let browser: Browser;

//Runs once before all the scenarios
BeforeAll(async function () {
    console.log("\nExecuting test suite...");
});


AfterAll(async function () {
    console.log("\nFinished execution of test suite");
});

//Runs before each scenario
Before(async function () {
    browser = await chromium.launch({ headless: false });
    pageFixture.context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    pageFixture.page = await pageFixture.context.newPage()
});

//Runs after each scenario
After(async function () {
    await pageFixture.page.close();
    await browser.close();
});

