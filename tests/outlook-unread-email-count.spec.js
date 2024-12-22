import { test, expect } from '@playwright/test';
import { loginToOutlook } from '../helpers/loginHelper.js';
import loginXpaths from '../resources/outlook-login.json' assert { type: 'json' };
import unreadXpaths from '../resources/outlook-unread-email.json' assert { type: 'json' };

// Test: Verify unread email count in Outlook
test('Outlook Unread Email Count Test', async ({ page }) => {
  
  // Step 1: Log in to Outlook
  await loginToOutlook(page, loginXpaths);

  // Step 2: Check unread email count
  await page.locator(unreadXpaths.unreadCountBadge).waitFor({ state: 'visible' });
  const unreadCount = await page.locator(unreadXpaths.unreadCountBadge).innerText();
  console.log(`✅ You have ${unreadCount} unread emails.`);

  // Assert unread count is a number
  expect(parseInt(unreadCount)).toBeGreaterThanOrEqual(0);
});
