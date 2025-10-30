const{test,expect}= require('@playwright/test');
test("windows handling", async ({page})=>{

    await page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
      await expect(dialog.message()).toBe("I am an alert box!");
    })
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//button[@id="alertBtn"]').click()
    

})

test.only("autosuggestion handling", async ({page})=>{

    await page.goto("https://www.abhibus.com/")   


    await page.waitForSelector("//div[@class='station-body col']/div/div[1]")

    const CityOptions = await page.$$("//div[@class='station-body col']/div/div[1]")
    
});