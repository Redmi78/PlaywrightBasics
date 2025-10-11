const {test, expect}= require('@playwright/test');
test("locate mulyiple elements", async ({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    //id
//relative xpath

const anchorLinks = await page.$$('a'); // <-- await here

for (const link of anchorLinks) {
    const linkText = await link.textContent(); // more accurate naming
    console.log(linkText);
}
})