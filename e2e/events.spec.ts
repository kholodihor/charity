import { test, expect } from '@playwright/test';

test.describe('Events Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('http://localhost:5173/');
  });

  test('renders correctly with proper heading', async ({ page }) => {
    // Check if the component is visible
    const eventsSection = page.locator('.events');
    await expect(eventsSection).toBeVisible();

    // Check the title
    const title = page.locator('.events .title h1');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Featured Events');

    // Check the subtitle/icon text
    const subtitle = page.locator('.events .title span');
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toContainText('Events');
  });

  test('displays event form with all required fields', async ({ page }) => {
    // Check if form is visible
    const form = page.locator('[data-test="form"]').first();
    await expect(form).toBeVisible();

    // Check date input
    const dateInput = page.locator('[data-test="new-event-date"]').first();
    await expect(dateInput).toBeVisible();

    // Check title input
    const titleInput = page.locator('[data-test="new-event-title"]').first();
    await expect(titleInput).toBeVisible();
    await expect(titleInput).toHaveAttribute('placeholder', 'Name of the Event');

    // Check place input
    const placeInput = page.locator('[data-test="new-event-place"]').first();
    await expect(placeInput).toBeVisible();
    await expect(placeInput).toHaveAttribute('placeholder', 'Place of the Event');

    // Check submit button
    const submitButton = page.locator('button[type="submit"]').first();
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toContainText('Add Event');
  });

  test('displays events with correct structure when available', async ({ page }) => {
    // Wait for events to load
    await page.waitForSelector('[data-test="event"]', { timeout: 5000 });

    // Get all event cards
    const eventCards = page.locator('[data-test="event"]');
    const count = await eventCards.count();
    
    // This test expects events to be present
    expect(count).toBeGreaterThan(0);
    
    // Check structure of the first event
    const firstEvent = eventCards.first();

    // Check date section
    const dateSection = firstEvent.locator('.date');
    await expect(dateSection).toBeVisible();

    // Check event title section
    const eventSection = firstEvent.locator('.event');
    await expect(eventSection).toBeVisible();
    await expect(eventSection.locator('h4')).toBeVisible();

    // Check place section
    const placeSection = firstEvent.locator('.place');
    await expect(placeSection).toBeVisible();

    // Check buttons section
    const buttonsSection = firstEvent.locator('.buttons');
    await expect(buttonsSection).toBeVisible();

    // At least one of these buttons should exist
    const hasBookButton = await firstEvent.locator('button.book').count() > 0;
    const hasCancelButton = await firstEvent.locator('button.cancel').count() > 0;
    const hasBookedButton = await firstEvent.locator('button.booked').count() > 0;

    expect(hasBookButton || hasCancelButton || hasBookedButton).toBeTruthy();
  });

  test.skip('displays no-events message when no events are available', async ({ page }) => {
    // This test would need a way to ensure no events exist in the system
    // You might need to modify your app's state or mock API responses
    
    // Wait for the no-events message to appear
    const noEventsMessage = page.locator('.no-events');
    await expect(noEventsMessage).toBeVisible();
    await expect(noEventsMessage).toContainText('No events available');
  });

  test('takes screenshot of events section', async ({ page }) => {
    // Wait for events section to be visible
    const eventsSection = page.locator('.events');
    await expect(eventsSection).toBeVisible();

    // Take screenshot of the events section
    await eventsSection.screenshot({ path: 'e2e/screenshots/events-section.png' });
  });

  test('form validation works correctly', async ({ page }) => {
    // Try to submit the form without filling in required fields
    const submitButton = page.locator('button[type="submit"]').first();
    await submitButton.click();

    // Check that form validation prevents submission (fields should still be required)
    // This relies on HTML5 validation, so we check if the date field is still required
    const dateInput = page.locator('[data-test="new-event-date"]').first();
    const isRequired = await dateInput.evaluate(el => el.hasAttribute('required'));
    expect(isRequired).toBeTruthy();

    // Fill in the form with valid data
    await dateInput.fill('2025-12-31');
    await page.locator('[data-test="new-event-title"]').first().fill('Test Event');
    await page.locator('[data-test="new-event-place"]').first().fill('Test Place');

    // Note: We don't actually submit the form in e2e tests to avoid creating test data
    // But we can verify the form is valid
    const isFormValid = await page.evaluate(() => {
      const form = document.querySelector('form');
      return form ? form.checkValidity() : false;
    });

    expect(isFormValid).toBeTruthy();
  });
});
