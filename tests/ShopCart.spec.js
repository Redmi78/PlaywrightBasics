const {test, expect}= require('@playwright/test');

    test('Login Page test',async ({page})=>{
  
    await page.goto('https://rahulshettyacademy.com/client');
   console.log (await page.title());
  //css
   const userEmail = page.locator('#userEmail');
     const passWord = page.locator('#userPassword');
       const login = page.locator('#login');
  

await userEmail.fill('ksubbareddyeee@gmail.com');
 await passWord.fill('Test@9632?#');
  await login.click();
  await page.waitForLoadState('networkidle');
  const allProducts = await page.locator('.card-body b').allTextContents();
  console.log(allProducts);


    });