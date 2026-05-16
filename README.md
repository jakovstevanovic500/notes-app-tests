# Notes App Test Automation

## About the App
A simple note-taking app that requires users to register and log in to access content. Available at https://practice.expandtesting.com/notes/app

**Features:**
- Create, edit, delete and view notes
- User registration and login

## What's Being Tested
- UI tests: registration, login (valid and invalid), create note, delete note
- API tests: register, login, create note, get notes, delete note
- Combined test: create note via API, verify it appears in the UI

## How to Run

1. Clone the repo

git clone https://github.com/jakovstevanovic500/notes-app-tests

2. Install dependencies

npm install

3. Create a `.env` file in the root with the following variables:

BASE_URL=https://practice.expandtesting.com/notes/app
API_URL=https://practice.expandtesting.com/notes/api
TEST_EMAIL=your_email
TEST_PASSWORD=your_password
TEST_NAME=your_name

4. Run the tests

npx playwright test --project=chromium

## Project Structure
- `pages/` — page object models for register, login and notes pages
- `tests/` — all test files
- `.github/workflows/` — CI/CD pipeline configuration