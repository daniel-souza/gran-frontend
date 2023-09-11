import data from "@/db/mock"

export default {
    // Usuários: /users
    getUsers: () => data.users,
    createUser: (user: User) => {
        user.id = data.users[data.users.length - 1].id + 1;
        data.users.push(user);
    },
    emailExists: (email: string) => {
        return data.users.some(user => user.email === email);
    },
    // Usuários: /users/:userId
    getUser: (userId: string) => {
        return data.users.find(user => user.id === parseInt(userId));
    },
    updateUser: (userId: string, user: User) => {
        const index = data.users.findIndex(user => user.id === parseInt(userId));
        if(index === -1) null;
        data.users[index] = user;
    },
    deleteUser: (userId: string) => {
        const index = data.users.findIndex(user => user.id === parseInt(userId));
        if(index === -1) null;
        data.users.splice(index, 1);
    }
}