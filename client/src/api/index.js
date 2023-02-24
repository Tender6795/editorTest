import { get, post, patch, httpDelete } from './axios';

/* auth requests */
export const login = (body) => post('/user/login', body);
export const registration = (body) => post('/user/registration', body);
export const check = () => get('/user/auth')

/* pages requests */
export const getPages = () => get('/page')
export const createPage = (body) => post('/page', body)