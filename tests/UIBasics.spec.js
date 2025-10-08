const {test, expect}= require('@playwright/test');

    test('Login Page test',async ({page})=>{
  
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   console.log (await page.title());
  //css
   const userName = page.locator('#username');
     const passWord = page.locator('#password');
       const signIn = page.locator('#signInBtn');
       const cardTitles = page.locator('.card-body a');
  await userName.fill('RahulShetty');


await userName.fill("");
await userName.fill('rahulshettyacademy');
 await passWord.fill('learning');
  await signIn.click();
// console.log(await cardTitles.first().textContent());
 //console.log(await cardTitles.nth(1).textContent());
 const allTitles = await cardTitles.allTextContents();
 console.log(allTitles);

    });