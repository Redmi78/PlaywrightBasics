const {test, expect}= require('@playwright/test')

test('prompt dialog', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator("#name").fill('John');
await page.locator("#male").click();

console.log(await page.locator("//label[normalize-space()='Sunday']").textContent());

await expect(page.locator("//label[normalize-space()='Sunday']")).toContainText('test');




})