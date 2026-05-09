import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';

test('successful registration', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  
  await page.goto('https://practice.expandtesting.com/notes/app/register');
 await registerPage.register(
  process.env.TEST_NAME,
  `test+${Date.now()}@gmail.com`,
  process.env.TEST_PASSWORD
);
  await expect(page.getByText('User account created successfully')).toBeVisible();
});