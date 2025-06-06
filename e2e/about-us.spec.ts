import { test, expect } from '@playwright/test';

// AboutUs component e2e tests
test.describe('AboutUs Component', () => {
  // Setup for all tests
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    // Wait for page to load
    await page.waitForLoadState('domcontentloaded');
    // Scroll to the AboutUs component
    await page.evaluate(() => {
      const aboutUs = document.querySelector('.box');
      if (aboutUs) aboutUs.scrollIntoView();
    });
  });

  test('renders correctly with proper heading', async ({ page }) => {
    // Check if the component is visible
    const aboutUsBox = page.locator('.box').first();
    await expect(aboutUsBox).toBeVisible();

    // Check heading content
    const heading = page.locator('.text h1').first();
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Fight for right cause for save the world');
  });

  test('displays the about us text content', async ({ page }) => {
    // Check about us label
    const aboutUsLabel = page.locator('.text span').first();
    await expect(aboutUsLabel).toContainText('About Us');

    // Check paragraph content
    const paragraph = page.locator('.text p').first();
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('From hunger to disaster relief');
  });

  test('displays motivation section with list items', async ({ page }) => {
    // Check motivation section
    const motivationSection = page.locator('.motivation').first();
    await expect(motivationSection).toBeVisible();

    // Check list items
    const listItems = page.locator('.motivation li');
    await expect(listItems).toHaveCount(4);

    // Verify content of list items
    await expect(listItems.nth(0)).toContainText('Food and water charity');
    await expect(listItems.nth(1)).toContainText('Sent a gift anytime');
    await expect(listItems.nth(2)).toContainText('Make donation');
    await expect(listItems.nth(3)).toContainText('24/7 support');
  });
});
