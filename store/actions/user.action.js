export const CHECK_USER = 'CHECK_USER';

export const checkUser = (user, pass) => ({
    type: CHECK_USER,
    usuario: user,
    password: pass
});