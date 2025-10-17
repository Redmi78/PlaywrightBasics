const {test,expect} = require('@playwright/test');

test("dropdowns", async ({page})=>{ 
await page.goto("https://testautomationpractice.blogspot.com/");
//multiple ways you can select value from dropdown
//1. select by value
//2. select by label
//3. select by index
//select India from dropdown
//await page.locator("#country").selectOption({label:"India"}); 
//await page.locator("#country").selectOption("India"); //visible text
await page.waitForTimeout(2000);
//await page.locator("#country").selectOption({ value: 'canada' }); //value
//await page.locator("#country").selectOption({ index: '2' }); //index
//await page.selectOption("#country", { label: "India" }); //label

//assertions
//check number of options in dropdown --approch 1

// const options = page.locator('#country option');
// await expect(options).toHaveCount(10);

//approch 2 -> check number of options in dropdown
// const options = await page.$$('#country option');
// console.log("options in dropdown are : "+ options.length);
// await expect(options.length).toBe(10);

//check presence of specific value in dropdown  
// const content = await page.locator("#country").textContent();
// console.log("content is "+ content);
// await expect(content.includes("India")).toBeTruthy();

//check presence of value in dropdown -- approch 2 --using enhance for loop
// const content = await page.$$('#country option')
// let flag = false;
// for(const contents of content)
//     {
// let text = await contents.textContent();
//         if(text.includes("India"))
//         {
// console.log("India is present in dropdown");
// flag = true;
// break;

//         }
//     }

// expect(flag).toBeTruthy();


const content = await page.$$('#country option')
for(const contents of content)
    {
let text = await contents.textContent();
        if(text.includes("India"))
        {
console.log("India is present in dropdown");

break;

        }
    }

expect(flag).toBeTruthy();

await page.waitForTimeout(2000);
})