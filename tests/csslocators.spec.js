const{test,expect}=require('@playwright/test');

// 2 types of css locators:
// 1) absolute CSS locator
// 2) relative CSS locators
// tag with id
// tag with class
// tag#id tag.class or
// or
// #id
// .class
// tag with any other attribute tag[attribute=value] or [attribute=value]
// tag with class and attribute tag.class[attribute=value] or .class[attribute=value]
//  page.locator (css/xpath)



test("csslocators",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //tag #id
    const searchBox=page.locator("input#small-searchterms");
    await searchBox.fill("computer");
    await page.locator("//input[@value='Search']").click();

});