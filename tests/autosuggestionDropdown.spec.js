const{test,expect}=require("@playwright/test");

test("autosuggestionDropdown",async({page})=>{
    await page.goto("https://www.redbus.in/");
   const fromTxtBox =page.locator("//div[contains(text(),'From')]");
   await fromTxtBox.click();
   await page.pause(2000); 
      const srcDest =page.locator("#srcDest");
   await srcDest.fill("DELHI");
  await page.pause(2000);
   const options = await page.$$(".listHeader___f8b2c6");
   await page.pause(2000);
   for(const option of options)
   {

    const text=await option.textContent();
    console.log(text);
    if(text.includes("Badarpur, Delhi"))
    {
        console.log("Option is present in dropdown");
        await option.click();
        break;
    }
   }


});