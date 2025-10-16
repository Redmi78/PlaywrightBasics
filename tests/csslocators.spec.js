const{test,expect}=require('@playwright/test');

test("csslocators",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //tag #id
    const searchBox=page.locator("input#small-searchterms");
    await searchBox.fill("computer");
    await page.locator("//input[@value='Search']").click();

});