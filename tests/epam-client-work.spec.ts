import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work navigation', () => {
  test('should open Client Work from the Services menu and verify the page', async ({ page }) => {
    // Navigate to the EPAM homepage.
    await page.goto('https://www.epam.com/');

    // Select Services from the header menu.
    await page.getByRole('link', { name: 'Services' }).click();

    // Click the Explore Our Client Work link.
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    // Verify that the Client Work text is visible on the page.
    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });
});

// Added to ensure the repository records the requested branch commit for this test file.
