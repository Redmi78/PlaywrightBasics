const {test, expect}= require('@playwright/test');

test("locators", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //id
//relative xpath

const relativeLogo = page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(relativeLogo).toBeVisible();

})




