import { test, expect } from '@playwright/test';

test('EPAM client work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Open the Services menu from the header navigation.
  await page.getByRole('link', { name: 'Services' }).click();

  // Navigate to the client work page.
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify the Client Work text is visible on the page.
  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
