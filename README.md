
Got it! If your `.env` file is located inside the **`resources`** folder, I'll adjust the documentation accordingly.

---

# 📧 **Playwright Web Automation for MS Outlook**

A **streamlined repository** for **web automation testing** using **Playwright** and  **JavaScript** . This guide will provide a **step-by-step walkthrough** for setting up, configuring, and running **end-to-end test cases** tailored for  **Microsoft Outlook automation** .

This framework supports:

✅ **Cross-browser testing** (Chromium, Firefox, Webkit)

✅ **Parallel execution**

✅ **Dynamic web element handling**

✅ **Custom reporting**

---

## 🚀 **Table of Contents**

1. [**Prerequisites**](https://chatgpt.com/?temporary-chat=true#prerequisites)
2. [**Project Setup**](https://chatgpt.com/?temporary-chat=true#project-setup)
3. [**Environment Configuration**](https://chatgpt.com/?temporary-chat=true#environment-configuration)
4. [**Folder Structure**](https://chatgpt.com/?temporary-chat=true#folder-structure)
5. [**Test Cases Overview**](https://chatgpt.com/?temporary-chat=true#test-cases-overview)
6. [**Running Test Cases**](https://chatgpt.com/?temporary-chat=true#running-test-cases)
7. [**Test Reporting**](https://chatgpt.com/?temporary-chat=true#test-reporting)
8. [**Best Practices**](https://chatgpt.com/?temporary-chat=true#best-practices)
9. [**Troubleshooting**](https://chatgpt.com/?temporary-chat=true#troubleshooting)
10. [**Contributing**](https://chatgpt.com/?temporary-chat=true#contributing)
11. [**License**](https://chatgpt.com/?temporary-chat=true#license)
12. [**Contact Us**](https://chatgpt.com/?temporary-chat=true#contact-us)

---

## ✅ **1. Prerequisites**

Ensure the following tools are installed:

* **Node.js** (v18 or above) → [Download Node.js](https://nodejs.org/)
* **Playwright** → Installed via npm
* **Visual Studio Code** or any preferred code editor
* **Microsoft Outlook Account** (for testing credentials)

Verify installations:

```bash
node -v
npm -v
```

---

## ✅ **2. Project Setup**

Clone the repository:

```bash
git clone https://github.com/your-repo/playwright-web-automation.git
cd playwright-web-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ✅ **3. Environment Configuration**

Create a `.env` file in the **`resources`** folder to securely store your test credentials:

**resources/.env:**

```env
TEST_EMAIL=your-test-email@example.com #replace your test email credentials
TEST_PASS=your-secure-password #replace your test email credentials
```

Ensure `.env` is added to `.gitignore` to prevent accidental exposure of credentials.

### **Configure dotenv in your project:**

In your `index.js` or `playwright.config.js` file, add:

```js
require('dotenv').config({ path: './resources/.env' });
```

---

## ✅ **4. Folder Structure**

Organize your project as follows:

```
project-root/
├── helpers/
│   ├── loginHelper.js         # Reusable login function
├── resources/
│   ├── outlook-login.json     # XPaths for login
│   ├── outlook-send-mail.json # XPaths for sending mail
│   ├── outlook-search-email.json
│   ├── outlook-delete-email.json
│   ├── outlook-unread-email.json
│   ├── .env                   # Environment variables
├── tests/
│   ├── outlook-login.spec.js
│   ├── outlook-send-mail.spec.js
│   ├── outlook-search-email.spec.js
│   ├── outlook-delete-email.spec.js
│   ├── outlook-unread-email-count.spec.js
├── playwright.config.js       # Playwright configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Documentation
```

---

## ✅ **5. Test Cases Overview**

| **Test Case**         | **Description**           |
| --------------------------- | ------------------------------- |
| **Login Test**        | Validate Outlook login process. |
| **Send Email Test**   | Automate sending an email.      |
| **Search Email Test** | Automate email search.          |
| **Delete Email Test** | Automate deleting an email.     |
| **Unread Count Test** | Validate unread email count.    |

Each test case has its respective JSON file for locators and a `.spec.js` file for implementation.

---

## ✅ **6. Running Test Cases**

Run all test cases:

```bash
npx playwright test
```

Run a specific test case:

```bash
npx playwright test tests/outlook-login.spec.js
```

Run tests in **headed mode** (see the browser in action):

```bash
npx playwright test --headed
```

Run tests in a  **specific browser** :

```bash
npx playwright test --browser=chromium
```

---

## ✅ **7. Test Reporting**

Generate an  **HTML Report** :

```bash
npx playwright show-report
```

Reports will be available in the `playwright-report` directory. Open `index.html` to view results.

---

## ✅ **8. Best Practices**

* ✅ **XPath Management:** Store all locators in JSON files for better scalability.
* ✅ **Environment Variables:** Avoid hardcoding credentials; use `.env` files.
* ✅ **Headless Mode:** Use headless mode in CI/CD pipelines for faster execution.
* ✅ **Parallel Testing:** Configure Playwright for parallel test execution.

---

## ✅ **9. Troubleshooting**

### 🛠️ **Common Issues:**

* **Error: Page Element Not Found**
  * Verify XPath locators in the `resources/` JSON files.
* **Environment Variables Not Loaded**
  * Ensure `.env` is properly set up and dotenv path is configured.
* **Timeout Errors**
  * Increase the timeout in `playwright.config.js`:

```js
timeout: 60000
```

---

## ✅ **10. Contributing**

We value your contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Submit a  **Pull Request** .

---

## ✅ **11. License**

This project is licensed under the  **MIT License** .

---

## ✅ **12. Contact Us**

For any queries or suggestions, reach out:

📧 **[adityakrishnjaiswal@gmail.com](mailto:adityakrishnjaiswal@gmail.com)**

---

🚀 **Happy Testing!** ✨
