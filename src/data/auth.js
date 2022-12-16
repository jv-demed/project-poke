export function auth(users, login, password){
    const user = users.filter((user) => user.login == login);
    if(user[0] && user[0].password == password){
        return true;
    }
    return false;
}