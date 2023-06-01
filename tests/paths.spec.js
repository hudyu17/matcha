import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // ideally have this be authenticated
  await page.goto('/paths')
  await expect(page).toHaveURL(/readme/);
});