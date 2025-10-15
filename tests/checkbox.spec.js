const {test, expect}= require('@playwright/test');

test.only("locators", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //checkbox
    await page.locator("//input[@id='sunday']").check();
     expect(await page.locator("//input[@id='sunday']")).toBeChecked();
     expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();
 expect (await page.locator("//input[@id='monday']")).not.toBeChecked();

 const checkboxes= ["//input[@id='sunday']","//input[@id='monday']","//input[@id='tuesday']"];

 for(const locator of checkboxes) //select multiple checkboxes
 {
    await page.locator(locator).check();
 }

 await page.waitForTimeout(3000);
 for(const locator of checkboxes) //select multiple checkboxes
 {
    if(await page.locator(locator).isChecked())
    {
    await page.locator(locator).uncheck();
    }
 }
 await page.waitForTimeout(3000);
})



