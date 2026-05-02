import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://practice.expandtesting.com/notes/app/login');
  await loginPage.login(
    process.env.TEST_EMAIL,
    process.env.TEST_PASSWORD
  );
  await expect(page.getByTestId('logout')).toBeVisible();
});

test('invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://practice.expandtesting.com/notes/app/login');
    await loginPage.login(
        process.env.TEST_EMAIL,
        'wrong password'
    );
    await expect(page.getByTestId('alert-message')).toBeVisible();
});