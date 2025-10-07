const {test, expect}= require('@playwright/test');

test('browser playwright test',async ({browser})=>{
    //launch
   const context= await browser.newContext();
   const page = await context.newPage();
    await page.goto('https://www.facebook.com/');
     console.log (await page.title());

    });


    test('page playwright test',async ({page})=>{
   
    await page.goto('https://www.google.com/');
   console.log (await page.title());
   await expect(page).toHaveTitle('Google');

    });