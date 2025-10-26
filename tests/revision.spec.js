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
