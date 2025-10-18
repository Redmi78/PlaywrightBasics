const{test,expect}=require("@playwright/test");


test("multiselectdropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // const dropdown=await page.locator("#colors");
    // await dropdown.selectOption(["red","blue","green"]);
    // await page.waitForTimeout(2000);


   const options= await page.$$('#colors option');
   for(const option of options)
   {
    const text=await option.textContent();
    console.log(text);
    if(text.includes("Green")||(text.includes("Blue")))
    {
        console.log("Green and Blue are present in dropdown");
     await page.selectOption('#colors', [
    { label: 'Green' },
    { label: 'Blue' }
]);
        break;
    }
   }
});