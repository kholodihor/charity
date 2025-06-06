import { test, expect } from '@playwright/test';

test.describe('NewsFeed Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('http://localhost:5173/');
    
    // Scroll to the NewsFeed section
    await page.evaluate(() => {
      const newsFeedElement = document.querySelector('.insights-cards');
      if (newsFeedElement) {
        newsFeedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    
    // Wait for the NewsFeed component to be visible
    await expect(page.locator('.insights-cards')).toBeVisible();
  });

  test('displays news cards correctly', async ({ page }) => {
    // Check if news cards are displayed
    const newsCards = page.locator('.insights-cards .card:not(.form)');
    const count = await newsCards.count();
    
    // There should be at least one news card
    expect(count).toBeGreaterThan(0);
    
    // Check the first news card content
    const firstCard = newsCards.first();
    
    // Card should have an image
    await expect(firstCard.locator('img')).toBeVisible();
    
    // Card should have a title
    await expect(firstCard.locator('h3')).toBeVisible();
    
    // Card should have a subtitle
    await expect(firstCard.locator('.card-content > span')).toBeVisible();
    
    // Card should have footer items (using first() to avoid strict mode violation)
    await expect(firstCard.locator('.footer-item').first()).toBeVisible();
  });

  test('newsletter subscription form is displayed', async ({ page }) => {
    // Check if the subscription form is displayed
    const formCard = page.locator('.insights-cards .card.form');
    await expect(formCard).toBeVisible();
    
    // Check form title
    await expect(formCard.locator('.form-title h4')).toBeVisible();
    await expect(formCard.locator('.form-title h4')).toContainText('Get weekly Newsletter');
    
    // Check form inputs
    await expect(formCard.locator('input[placeholder="Enter full Name"]')).toBeVisible();
    await expect(formCard.locator('input[placeholder="Enter your Email"]')).toBeVisible();
    
    // Check submit button
    const submitButton = formCard.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toContainText('Subscribe Now');
  });

  test('form validation works correctly', async ({ page }) => {
    // Get the form card
    const formCard = page.locator('.insights-cards .card.form');
    
    // Try to submit the form without filling inputs
    const submitButton = formCard.locator('button[type="submit"]');
    
    // Set up dialog handler to capture alert messages
    let dialogMessage = '';
    page.on('dialog', async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.dismiss();
    });
    
    // Submit empty form
    await submitButton.click();
    
    // Check if validation error is shown
    expect(dialogMessage).toBe('Validation failed');
    
    // Clear the message for next test
    dialogMessage = '';
    
    // Fill name but invalid email
    await formCard.locator('input[placeholder="Enter full Name"]').fill('Test User');
    await formCard.locator('input[placeholder="Enter your Email"]').fill('invalid-email');
    
    // Submit form with invalid email
    await submitButton.click();
    
    // Check if validation error is shown
    expect(dialogMessage).toBe('Validation failed');
  });

  // Note: We're not testing actual form submission with valid data
  // as it would make real API calls to Firebase
});
