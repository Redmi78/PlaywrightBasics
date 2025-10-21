const{test, expect}= require('@playwright/test')
test('Alerts handling', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling //dialong window handler
   page.on('dialog', async dialog => {
 expect(dialog.type()).toContain('alert');
 expect(dialog.message()).toBe('I am an alert box!');
 await dialog.accept();
   
});

await page.waitForTimeout(2000);
await page.locator("//button[@id='alertBtn']").click();
await page.waitForTimeout(2000);



});


test('confirmation alert', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling //dialong window handler
   page.on('dialog', async dialog => {
 expect(dialog.type()).toContain('confirm');
 expect(dialog.message()).toBe('Press a button!');
 //await dialog.accept();
 await dialog.dismiss();
   
});

await page.waitForTimeout(2000);
await page.locator("//button[@id='confirmBtn']").click();
const cancelText =await page.locator("//p[@id='demo']").textContent();
expect(cancelText).toBe("You pressed Cancel!");
console.log("cancelText is "+ cancelText);
await page.waitForTimeout(2000);



});




test.only('prompt dialog', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling //dialong window handler
   page.on('dialog', async dialog => {
 expect(dialog.type()).toContain('prompt');
 expect(dialog.message()).toContain('Please enter your name:');
 expect(dialog.defaultValue()).toContain('Harry Potter');
 await dialog.accept('John' );
 
   
});

await page.waitForTimeout(2000);
await page.locator("#promptBtn").click();
const promptTxt =await page.locator("//p[@id='demo']").textContent();
expect(promptTxt).toContain("Hello John! How are you today?");
console.log("promptTxt is "+ promptTxt);
await page.waitForTimeout(2000);



});