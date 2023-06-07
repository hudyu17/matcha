import { test, expect } from '@playwright/test';

// for specific testing
// test.skip();

// skip if mobile
test.skip(({ isMobile }) => isMobile);

// Test navbar on every page
test.afterEach(async ({ page }) => {
    // Runs after each test by checking navbar components

    // skip if mobile
    // test.skip(browserName != 'chromium', 'Mobile navbar different');

    await expect(page.getByRole('link', { name: 'Browse' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Insights' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Mentors' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'README' })).toBeVisible();
});

test('check navbar on /paths', async ({ page }) => {
    // ideally have this be authenticated
    await page.goto('/paths')
});

test('check navbar on /saved', async ({ page }) => {
    // ideally have this be authenticated
    await page.goto('/saved')
});

test('check navbar on /insights', async ({ page }) => {
  // ideally have this be authenticated
  await page.goto('/insights')
});

test('check navbar on /mentors', async ({ page }) => {
  // ideally have this be authenticated
  await page.goto('/mentors')
});