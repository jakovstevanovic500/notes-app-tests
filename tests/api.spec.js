import { test, expect } from '@playwright/test';

test('register user', async ({ request }) => {
  const response = await request.post(`${process.env.API_URL}/users/register`, {
    data: {
      name: process.env.TEST_NAME,
      email: `test-${Date.now()}@test.com`,
      password: process.env.TEST_PASSWORD
    }
  });

  expect(response.status()).toBe(201);
});

test('login user', async ({ request }) => {
    const response = await request.post(`${process.env.API_URL}/users/login`, {
        data: {
            email: process.env.TEST_EMAIL,
            password: process.env.TEST_PASSWORD
        }
    });

    expect(response.status()).toBe(200);
});

test ('create note', async ({ request }) => {  
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
});

test('get notes', async ({ request }) => {
    const response = await request.post(`${process.env.API_URL}/users/login`, {
        data: {
            email: process.env.TEST_EMAIL,
            password: process.env.TEST_PASSWORD
        }
        });

    const body = await response.json();
    const token = body.data.token;

    const response2 = await request.get(`${process.env.API_URL}/notes`, {
        headers: {
            'x-auth-token': token
        }
    });
    expect(response2.status()).toBe(200);
});

test('delete note', async ({ request }) => {
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

    const noteBody = await response2.json();    // parse it
    const noteId = noteBody.data.id;            // get the id

    const response3 = await request.delete(`${process.env.API_URL}/notes/${noteId}`, {
        headers: {
            'x-auth-token': token
        }
    });
    expect(response3.status()).toBe(200);
});

test('update note', async ({ request }) => {
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

    const noteBody = await response2.json();
    const noteId = noteBody.data.id;

    const response3 = await request.put(`${process.env.API_URL}/notes/${noteId}`, {
        data: {
            title: 'updated test',
            description: 'updated description',
            completed: true,
            category: 'Work',
        },
        headers: {
            'x-auth-token': token
        }
    });
    expect(response3.status()).toBe(200);
});
