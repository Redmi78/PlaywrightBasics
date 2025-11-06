const{test,expect} = require('playwright/test');

test("whole weekend practice", async ({page}) => {
    await page.goto('http://omayo.blogspot.com/');
    await page.locator('#ta1').fill("Saturday");
    await page.locator('#radio1').click();
await page.locator('input[value="blue"]').click();
const message = await page.locator("//input[@id='rotb']").getAttribute('value');
console.log("Message is "+ message);

const message1 =await page.locator("div[id='HTML11'] textarea").textContent();
console.log("Message is "+ message1);

await page.locator('#drop1').selectOption('doc 3');

const dropDownValues = await page.$$(".combobox");
for(const drops of dropDownValues)
    {
    const ddtext = await drops.textContent();
    console.log("Dropdown values are : "+ ddtext);
    if(ddtext.includes("doc 3"))
        {
        console.log("doc 3 is present in dropdown");
        break;
        }
    }
});   


