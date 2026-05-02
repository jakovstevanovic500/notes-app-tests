import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';  
import { NotesPage } from '../pages/NotesPage.js';

test('add note', async ({ page }) => {
     const loginPage = new LoginPage(page);

  await page.goto('https://practice.expandtesting.com/notes/app/login');
  await loginPage.login(
    process.env.TEST_EMAIL,
    process.env.TEST_PASSWORD
  );
  await expect(page.getByTestId('logout')).toBeVisible();

    const notesPage = new NotesPage(page);

    await page.goto('https://practice.expandtesting.com/notes/app/notes');
    await notesPage.addNote('Test Note', 'This is a test note');
    await expect(page.getByTestId('note-card-title').first()).toBeVisible();
});

test('delete note', async ({ page }) => {
    const loginPage = new LoginPage(page);

  await page.goto('https://practice.expandtesting.com/notes/app/login');
  await loginPage.login(
    process.env.TEST_EMAIL,
    process.env.TEST_PASSWORD
  );
  await expect(page.getByTestId('logout')).toBeVisible();

  const notesPage = new NotesPage(page);

    await page.goto('https://practice.expandtesting.com/notes/app/notes');
    await notesPage.addNote('Delete Test Note', 'temp');
    await notesPage.deleteNote();
    await page.waitForTimeout(1000);
    await expect(page.getByTestId('note-card-title').filter({ hasText: 'Delete Test Note' })).not.toBeVisible();
});






