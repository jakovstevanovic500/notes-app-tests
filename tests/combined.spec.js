import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test ('verify note creation with api', async ({ request,page }) => {  
     const response = await request.post(`${process.env.API_URL}/users/login`, {
        data: {
            email: process.env.TEST_EMAIL,
            password: process.env.TEST_PASSWORD
        }
        });

    const body = await response.json();
    const token = body.data.token;

    const response2 = await request.post(`${process.env.API_URL}/notes`, {
        data: {
            title: 'test',
            description: 'test',
            category: 'Home',
        },
        headers: {
            'x-auth-token': token
        }
    });
    expect(response2.status()).toBe(200);

    const loginPage = new LoginPage(page);
    
      await page.goto('https://practice.expandtesting.com/notes/app/login');
      await loginPage.login(
        process.env.TEST_EMAIL,
        process.env.TEST_PASSWORD
      );
      await expect(page.getByTestId('logout')).toBeVisible();
      await page.goto('https://practice.expandtesting.com/notes/app/notes');
    await expect(page.getByTestId('note-card-title').first()).toBeVisible();
});

