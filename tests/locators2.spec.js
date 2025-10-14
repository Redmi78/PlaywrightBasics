const {test, expect}= require('@playwright/test');

test("locators", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //id
//relative xpath

//indexed path
//self path
//const javaText = page.locator("//td[text()='Java']/self::td");
//await expect(javaText).toHaveText("java");

// parent path

const parentROW = page.locator("//td[text()='Java']//parent::tr");
await expect(parentROW).toContainText("Java");

console.log(await parentROW.textContent());


//child axis -> get all td childerne of the second row tr
const childElements = page.locator("//table[@name='BookTable']//tr[2]/child::td"); //get all td childerne of the second row tr
console.log(await childElements.count());
expect(childElements).toHaveCount(4);


//ancestor axis -> parent and their grand parent -> java 

const ancestorAxis = page.locator("//td[text()='Java']/ancestor::table"); //get all td childerne of the second row tr
console.log(await ancestorAxis.count());
await expect(ancestorAxis).toHaveAttribute("name","BookTable");

//descendant axis
const descendantAxis = page.locator("//table[@name='BookTable']/descendant::td"); //get all td childerne of the second row tr
console.log(await descendantAxis.count());
expect(descendantAxis).toHaveCount(24);

//following axis
    const followingAxis= page.locator("//td[text()='Java']/following::td");
    console.log(await followingAxis.count());
await expect(followingAxis.nth(0)).toHaveText("Javascript");
//fowllowing-sibling
    const followingSibling = page.locator("//td[text()='Java']/following-sibling::td");
    console.log(await followingSibling.count());
    await expect(followingSibling.toHaveText(500));

})