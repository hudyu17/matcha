import { test, expect } from '@playwright/test';

// Navigate to /paths
test.beforeEach(async ({ page }) => {
  await page.goto('/paths')
});

test('check is authenticated', async ({ page }) => {
  // focusing on saving
  // test.skip()
  await expect(page).toHaveURL(/paths/);
});

test('can save and unsave', async ({ page, isMobile }) => {
  // test.skip()
  test.skip(!isMobile);
  await page.locator('div').filter({ hasText: /^Software Engineering, Senior IC and Leadership$/ }).locator('svg').click();
  await page.goto('/saved');
  
  await expect(page.getByText('Software Engineering, Senior IC and Leadership')).toBeVisible();

  // unsave from db
  await page.locator('div').filter({ hasText: /^Software Engineering, Senior IC and Leadership$/ }).locator('svg').click();

  await page.goto('/paths')
  await page.goto('/saved')

  await expect(page.getByText('Software Engineering, Senior IC and Leadership')).toBeHidden();
});

test('can filter to zero', async({ page, isMobile }) => {
  await expect(page.getByText('No results (for now)')).toBeHidden();
  await expect(page.getByText('Software Bootcamp to Blockchain Founder')).toBeVisible();

  if (!isMobile) {
    await page.getByRole('button', { name: 'Education' }).click();
    await page.getByRole('region', { name: 'Filters' }).getByText('Engineering').click();
    await page.getByText('Business', { exact: true }).click();
  }
  else {
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByLabel('Engineering', { exact: true }).click();
    await page.getByLabel('Business').click();
  }

  await expect(page.getByText('Software Bootcamp to Blockchain Founder')).toBeHidden();
  await expect(page.getByText('No results (for now)')).toBeVisible();
});

test('can filter specific case', async({ page, isMobile }) => {
  await expect(page.getByText('Computer Engineering to Product and Entrepreneurship')).toBeVisible();
  await expect(page.getByText('Engineering to Product to Serial Founder')).toBeVisible();

  if (!isMobile) {
    await page.getByRole('button', { name: 'Category' }).click();

    await page.getByRole('region', { name: 'Filters' }).getByText('Software Engineering').click();
    await page.getByRole('region', { name: 'Filters' }).getByText('AI/ML').click();
    await page.getByRole('region', { name: 'Filters' }).getByText('Product').click();
    await page.getByRole('region', { name: 'Filters' }).getByText('Startups').click();
  }
  else {
    await page.getByRole('button', { name: 'Filters' }).click();

    await page.getByLabel('Software Engineering', { exact: true }).click();
    await page.getByLabel('AI/ML', { exact: true }).click();
    await page.getByLabel('Product', { exact: true }).click();
    await page.getByLabel('Startups', { exact: true }).click();

    await page.getByRole('button', { name: 'Close menu' }).click();
  }

  await expect(page.getByText('Computer Engineering to Product and Entrepreneurship')).toBeVisible();
  await expect(page.getByText('Engineering to Product to Serial Founder')).toBeHidden();
});

test('can manipulate filter pills', async({ page, isMobile }) => {
  if (!isMobile) {
    await page.getByRole('button', { name: 'Category' }).click();
    await page.getByRole('region', { name: 'Filters' }).getByText('Software Engineering').click();
  }
  else {
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByLabel('Software Engineering', { exact: true }).click();
    await page.getByRole('button', { name: 'Close menu' }).click();
  }
  await expect(page.getByText('Software Bootcamp to Blockchain Founder')).toBeVisible();
  await expect(page.getByText('Engineer to MBA to Product')).toBeHidden();

  if (!isMobile){
    await page.getByRole('region', { name: 'Filters' }).getByText('Product').click();
  }
  else {
    await page.getByRole('button', { name: 'Filters' }).click();
    await page.getByLabel('Product', { exact: true }).click();
    await page.getByRole('button', { name: 'Close menu' }).click();
  }

  await expect(page.getByText('Software Bootcamp to Blockchain Founder')).toBeHidden();

  await page.getByRole('button', { name: 'Remove filter for Software Engineering' }).click();
  await expect(page.getByText('Engineer to MBA to Product')).toBeVisible();
});

// MOBILE

// test('can filter to zero on mobile', async({ page, isMobile }) => {
//   test.skip(!isMobile);

//   await expect(page.getByText('No results (for now)')).toBeHidden();

//   await page.getByRole('button', { name: 'Filters' }).click();

//   await page.getByLabel('Engineering', { exact: true }).click();
//   await page.getByLabel('Business').click();

//   await expect(page.getByText('No results (for now)')).toBeVisible();
// });