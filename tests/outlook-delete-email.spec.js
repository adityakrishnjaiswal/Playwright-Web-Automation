import { test, expect } from '@playwright/test';
import { loginToOutlook } from '../helpers/loginHelper.js';
import loginXpaths from '../resources/outlook-login.json' assert { type: 'json' };
import deleteXpaths from '../resources/outlook-delete-email.json' assert { type: 'json' };

// Test: Delete an email in Outlook
test('Outlook Delete Email Test', async ({ page }) => {
  
  // Step 1: Log in to Outlook
  await loginToOutlook(page, loginXpaths);

  // Step 2: Select an email
  await page.locator(deleteXpaths.emailCheckbox).waitFor({ state: 'visible' });
  await page.locator(deleteXpaths.emailCheckbox).click();

  // Step 3: Click Delete
  await page.locator(deleteXpaths.deleteButton).waitFor({ state: 'visible' });
  await page.locator(deleteXpaths.deleteButton).click();

  // Step 4: Verify Deletion
  await page.locator(deleteXpaths.deletedConfirmation).waitFor({ state: 'visible' });
  console.log('✅ Email deleted successfully.');
});
