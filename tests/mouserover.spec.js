const { test, expect } = require('@playwright/test');

test('Mouse over', async ({ page }) => {

    await page.goto('https://demo.opencart.com/');
    const electronics=page.locator("//a[normalize-space()='Desktops']")
    await electronics.hover();
    await page.waitForTimeout(3000);
    await page.locator("//a[normalize-space()='Show All Desktops']").click();
    await page.waitForTimeout(5000);


})