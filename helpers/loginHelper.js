// loginHelper.js

import { expect } from '@playwright/test';

export async function loginToOutlook(page, xpaths) {
  // Navigate to Outlook login page
  await page.goto('https://outlook.office.com/');
  await expect(page).toHaveTitle(/Outlook/);

  // Wait for the email input field to be visible
  await page.locator(xpaths.emailInput).waitFor({ state: 'visible' });
  await page.locator(xpaths.emailInput).fill(process.env.TEST_EMAIL);
  await page.locator(xpaths.nextButton).click();

  // Wait for the password input field to be visible
  await page.locator(xpaths.passwordInput).waitFor({ state: 'visible' });
  await page.locator(xpaths.passwordInput).fill(process.env.TEST_PASS);
  await page.locator(xpaths.signInButton).click();

  // Handle the "Stay signed in" prompt (if it appears)
  await page.locator(xpaths.yesButton).waitFor({ state: 'visible' });
  await page.locator(xpaths.yesButton).click();

  // Verify URL after login
  await expect(page).toHaveURL('https://outlook.office.com/mail/');
}
