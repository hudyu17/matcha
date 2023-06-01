// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('CareerMatcha');
});

test('get started link - first', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByTitle('cta-one').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/signin/);
});

test('get started link - second', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByTitle('cta-two').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/signin/);
});

test('readme link - first', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByTitle('readme-one').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/readme/);
});

test('readme link - second', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByTitle('readme-two').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/readme/);
});