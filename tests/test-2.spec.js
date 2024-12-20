// outlook-login.spec.js

import { test, expect } from '@playwright/test'; // Importing Playwright's test and expect methods for creating tests and assertions
import { loginToOutlook } from '../helpers/loginHelper'; // Importing the reusable login helper function from the helpers folder
import xpaths from '../resources/outlook-login.json'; // Importing the xpaths from a JSON file, which contains all the necessary XPath locators for the login process

// Test 1: Logging into Outlook and verifying inbox page
test('Outlook Login Page', async ({ page }) => {
  
  // Reusing the login function from the helper to login to Outlook
  // The loginToOutlook function takes the 'page' object and the 'xpaths' object as parameters
  await loginToOutlook(page, xpaths); // Perform login steps automatically using the imported function

  // Additional assertions or interactions can go here after successful login
  console.log('User logged in successfully.'); // Logging a success message after the login process
});
