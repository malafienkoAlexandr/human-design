import { User } from 'UserModule';
import { UserInfo } from 'UserInfoModule';
import cuid from 'cuid';
import { createAction, createAsyncAction } from 'typesafe-actions';

export const createUser = createAction('CREATE_USER', (user: User) => ({
    id: cuid(),
    name: user.name,
    birthDate: user.birthDate,
    birthTime: user.birthTime,
    utc: user.utc,
    city: user.city,
    country: user.country,
}))<User>();

export const editUser = createAction('EDIT_USER', (user: User) => ({
    id: user.id,
    name: user.name,
    birthDate: user.birthDate,
    birthTime: user.birthTime,
    utc: user.utc,
    city: user.city,
    country: user.country,
}))<User>();


// export const loadTodosAsync = createAsyncAction(
//   'LOAD_TODOS_REQUEST',
//   'LOAD_TODOS_SUCCESS',
//   'LOAD_TODOS_FAILURE'
// )<undefined, null, string>();