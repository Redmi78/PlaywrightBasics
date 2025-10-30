const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill('@gmail.com');
   await page.locator("#userPassword").fill("");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');     
   const test = await page.locator('.card-body b').allTextContents();
   const count = products.count();
   console.log(test);
   for(let i=0;i<count;i++)
   {
      if (await products.nth(i).locator('b').textContent()=== productName);
{
   await products.nth(i).locator("text= Add To Cart").click();
   break;
}

   }



  
});
 
 