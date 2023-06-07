import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  // retries: process.env.CI ? 2 : 0,

  workers: 4,
  retries: 5,

  // Opt out of parallel tests on CI.
  // workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  expect: {
    timeout: 10 * 1000,
  },
  
  // globalSetup: process.env.SKIP_AUTH ? '' : 'global-setup.ts',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:3002/',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',

    // storageState: 'auth.local.json',
    storageState: process.env.AUTH === '1' ? {} : 'auth.local.json'
  },
  // Configure projects for major browsers.
  projects: [
    // { name: 'setup', testMatch: /.*\.setup\.ts/ },

    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },
    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['iPhone 13'],
      },
    },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 13'],
    //   },
    // }
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3002/',
    reuseExistingServer: !process.env.CI,
  },
});