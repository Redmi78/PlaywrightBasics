const { test, expect } = require('@playwright/test');

test('all testing learnt', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Fill input field
  await page.locator('#name').fill('Admin');

  // Checkbox test
  const checkbox = page.locator('#tuesday');
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();

  // Dropdown selection
  await page.locator('#country').selectOption({ label: 'India' });
  await page.waitForTimeout(5000);
  await page.locator('#country').selectOption({ label: 'Canada' });
  await page.waitForTimeout(5000);
});

test.only('child window handling', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const documentLink = await page.locator("//a[@href='https://rahulshettyacademy.com/documents-request']");

await page.waitForTimeout(3000);

 const [newPage,newPage2] = await Promise.all([
    page.waitForEvent('popup'), // Wait for the new tab
    documentLink.click()         // Trigger opening the tab
  ]);
const text = await newPage.locator("//p[contains(text(),'We are offering free assistance of providing')]").textContent();
console.log(text);

await page.waitForTimeout(3000);
await page.locator("#username").fill("testuser")
await page.waitForTimeout(3000);
})