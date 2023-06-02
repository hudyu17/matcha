import { test, expect } from '@playwright/test';

test('check is authenticated', async ({ page }) => {
  // ideally have this be authenticated
  await page.goto('/paths')
  await expect(page).toHaveURL(/paths/);
});