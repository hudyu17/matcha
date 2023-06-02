import { test, expect } from '@playwright/test';

// skip if mobile
test.skip(({ isMobile }) => isMobile);

// Test navbar on every page
test.afterEach(async ({ page, browserName }) => {
    // Runs after each test by checking navbar components

    // skip if mobile
    // test.skip(browserName != 'chromium', 'Mobile navbar different');

    await expect(page.getByRole('link', { name: 'Browse' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Insights' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Mentors' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'README' })).toBeVisible();

  });

// paths page
test('check navbar on /paths', async ({ page }) => {
    // ideally have this be authenticated
    await page.goto('/paths')
  });