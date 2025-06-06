import { test, expect } from '@playwright/test';

test.describe('Donation Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page containing the donation component
    await page.goto('/');
  });

  test('displays donation form correctly', async ({ page }) => {
    // Check that the donation box is visible
    await expect(page.locator('.donation-box')).toBeVisible();
    
    // Check that the title is displayed
    await expect(page.locator('.donation-box-text h1')).toHaveText('Become a Donar');
    
    // Check that the form inputs are present
    await expect(page.locator('input[placeholder="your name"]')).toBeVisible();
    await expect(page.locator('input[placeholder="sum of donation"]')).toBeVisible();
    await expect(page.locator('select[name="goal"]')).toBeVisible();
    await expect(page.locator('button.submit')).toHaveText('Make a donation');
  });

  test('shows validation errors when submitting empty form', async ({ page }) => {
    // Submit the empty form
    await page.locator('form.donation-form').evaluate(form => {
      (form as HTMLFormElement).dispatchEvent(new Event('submit'));
    });
    
    // Check that validation error messages are displayed
    await expect(page.locator('.error-message')).toBeVisible();
    
    // Check that fields have error class
    await expect(page.locator('input[placeholder="your name"].error')).toBeVisible();
    await expect(page.locator('input[placeholder="sum of donation"].error')).toBeVisible();
    await expect(page.locator('select[name="goal"].error')).toBeVisible();
  });

  test('shows validation error for non-numeric donation amount', async ({ page }) => {
    // Fill name and goal but enter invalid donation amount
    await page.locator('input[placeholder="your name"]').fill('John Doe');
    await page.locator('input[placeholder="sum of donation"]').fill('abc');
    await page.locator('select[name="goal"]').selectOption('education');
    
    // Submit the form
    await page.locator('form.donation-form').evaluate(form => {
      (form as HTMLFormElement).dispatchEvent(new Event('submit'));
    });
    
    // Check that numeric validation error is displayed
    const errorMessages = page.locator('.error-message');
    await expect(errorMessages).toContainText('Please enter a valid number');
    
    // Check that only the donation amount field has error class
    await expect(page.locator('input[placeholder="your name"].error')).toBeHidden();
    await expect(page.locator('input[placeholder="sum of donation"].error')).toBeVisible();
    await expect(page.locator('select[name="goal"].error')).toBeHidden();
  });

  test('preset buttons set donation amount correctly', async ({ page }) => {
    // Click on the $50 preset button
    await page.locator('button.preset-btn').filter({ hasText: '$50' }).click();
    
    // Check that the donation amount field is filled with 50
    await expect(page.locator('input[placeholder="sum of donation"]')).toHaveValue('50');
    
    // Click on the $100 preset button
    await page.locator('button.preset-btn').filter({ hasText: '$100' }).click();
    
    // Check that the donation amount field is updated to 100
    await expect(page.locator('input[placeholder="sum of donation"]')).toHaveValue('100');
  });

  test('successful form submission with valid data', async ({ page }) => {
    // Mock the Firebase addDoc function to avoid actual database operations
    await page.addInitScript(() => {
      window.localStorage.setItem('mockFirebaseSuccess', 'true');
    });
    
    // Fill the form with valid data
    await page.locator('input[placeholder="your name"]').fill('John Doe');
    await page.locator('input[placeholder="sum of donation"]').fill('100');
    await page.locator('select[name="goal"]').selectOption('education');
    
    // Submit the form
    await page.locator('form.donation-form').evaluate(form => {
      (form as HTMLFormElement).dispatchEvent(new Event('submit'));
    });
    
    // Check for success message (this would normally be shown by SweetAlert)
    // Since we can't easily check SweetAlert in e2e tests, we'll check that form fields are reset
    await expect(page.locator('input[placeholder="your name"]')).toHaveValue('');
    await expect(page.locator('input[placeholder="sum of donation"]')).toHaveValue('');
  });
});
