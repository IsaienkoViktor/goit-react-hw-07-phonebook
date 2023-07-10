import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://64ac076b9edb4181202f00e9.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await usersApi.get('/contacts');
  return data;
};

export const addContacts = async user => {
  const { data } = await usersApi.post('/contacts', user);
  return data;
};

// GET
// /users/:id

// POST
// /users

// PUT
// /users/:id

// DELETE
// /users/:id
