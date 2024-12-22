import { test, expect } from '@playwright/test'; // Import Playwright's test and expect
import { loginToOutlook } from '../helpers/loginHelper.js'; // Ensure the file extension is specified if using ES modules
import loginXpaths from '../resources/outlook-login.json' assert { type: 'json' };// Ensure JSON imports are asserted correctly
import mailXpaths from '../resources/outlook-send-mail.json' assert { type: 'json' }; // Ensure JSON imports are asserted correctly

// Test: Logging into Outlook and sending a test email
test('Outlook Send Email Test', async ({ page }) => {
  
  // Step 1: Log in to Outlook
  await loginToOutlook(page, loginXpaths); // Reuse the login helper function for login

  // Step 2: Click on "New Message"
  await page.locator(mailXpaths.newMessageButton).waitFor({ state: 'visible' });
  await page.locator(mailXpaths.newMessageButton).click();

  // Step 3: Fill in the recipient's email
  await page.locator(mailXpaths.toField).waitFor({ state: 'visible' });
  await page.locator(mailXpaths.toField).fill('test@example.com'); // Replace with recipient's email

  // Step 4: Fill in the subject
  await page.locator(mailXpaths.subjectField).waitFor({ state: 'visible' });
  await page.locator(mailXpaths.subjectField).fill('Automated Test Email');

  // Step 5: Fill in the message body
  await page.locator(mailXpaths.messageBody).waitFor({ state: 'visible' });
  await page.locator(mailXpaths.messageBody).fill('This is a test email sent using Playwright automation.');

  // Step 6: Click on "Send"
  await page.locator(mailXpaths.sendButton).waitFor({ state: 'visible' });
  await page.locator(mailXpaths.sendButton).click();

  // Step 7: Verify the confirmation message
  await page.locator(mailXpaths.sentConfirmation).waitFor({ state: 'visible' });
  console.log('Test email sent successfully.');
});
