// @ts-check
import { test, expect } from '@playwright/test';

// Note that we are already authenticated

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('CareerMatcha');
});

test('get started link (first) redirects to paths', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByTitle('cta-one').click();

  // Expects the URL to contain paths
  await expect(page).toHaveURL(/paths/);
});

test('get started link (second) redirects to paths', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByTitle('cta-two').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/paths/);
});

test('readme link (first) redirects to readme', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByTitle('readme-one').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/readme/);
});

test('readme link (second) redirects to readme', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByTitle('readme-two').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/readme/);
});