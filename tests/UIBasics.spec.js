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

    
    test('static dropdown test',async ({page})=>{
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    const userName=page.locator("#username");
    const passWord=page.locator("#password");
    const dropdown=page.locator(".form-control[data-style='btn-info']")
    await dropdown.selectOption("teach");
    await expect(dropdown).toHaveValue("teach");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log( await expect(page.locator(".radiotextsty").last()).toBeChecked());
     await page.locator(".radiotextsty").last().isChecked();
     await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
 expect(await page.locator("#terms").isChecked());

const blinkingText = page.locator(".blinkingText").first();

// Get and log text
const text = await blinkingText.textContent();
console.log("Blinking text:", text);

// Assert it has correct class attribute
await expect(blinkingText).toHaveAttribute("class", "blinkingText");
    });


     test.only('window handles test',async ({page})=>{
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    const userName=page.locator("#username");
    const passWord=page.locator("#password");
    const dropdown=page.locator(".form-control[data-style='btn-info']")
    await dropdown.selectOption("teach");
    await expect(dropdown).toHaveValue("teach");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log( await expect(page.locator(".radiotextsty").last()).toBeChecked());
     await page.locator(".radiotextsty").last().isChecked();
     await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
 expect(await page.locator("#terms").isChecked());
 
const blinkingText = page.locator(".blinkingText").first();

// Get and log text
const text = await blinkingText.textContent();
console.log("Blinking text:", text);

// Assert it has correct class attribute
await expect(blinkingText).toHaveAttribute("class", "blinkingText");


const [newPage] = await Promise.all([
  page.waitForEvent('popup'), // wait for the new page event
 blinkingText.click()//opens in new tab
])
await newPage.waitForLoadState('domcontentloaded');
const title = await newPage.locator(".red").textContent();
console.log("New page title:", title);

     });

