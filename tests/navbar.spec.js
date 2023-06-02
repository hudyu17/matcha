import { test, expect } from '@playwright/test';

// Test navbar on every page
test.afterEach(async ({ page }) => {
    // Runs after each test by checking navbar components

    // will purposely fail on mobile
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