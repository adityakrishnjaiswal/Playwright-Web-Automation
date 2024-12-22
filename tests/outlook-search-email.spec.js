import { test, expect } from '@playwright/test';
import { loginToOutlook } from '../helpers/loginHelper.js';
import loginXpaths from '../resources/outlook-login.json' assert { type: 'json' };
import searchXpaths from '../resources/outlook-search-email.json' assert { type: 'json' };

// Test: Search for an email in Outlook
test('Outlook Search Email Test', async ({ page }) => {
  
  // Step 1: Log in to Outlook
  await loginToOutlook(page, loginXpaths);

  // Step 2: Search for an email
  await page.locator(searchXpaths.searchBox).waitFor({ state: 'visible' });
  await page.locator(searchXpaths.searchBox).fill('Automated Test Email');
  await page.locator(searchXpaths.searchButton).click();

  // Step 3: Verify search results
  await page.locator(searchXpaths.searchResult).waitFor({ state: 'visible' });
  expect(await page.locator(searchXpaths.searchResult).count()).toBeGreaterThan(0);
  console.log('✅ Search results displayed successfully.');
});
