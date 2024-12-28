const users = [];

class UserService {
    static createUser(user) {
        users.push(user);
        return user;
    }

    static getUserById(userId) {
        return users.find(user => user.id === userId);
    }

    static updateUser(userId, updatedUser) {
        const index = users.findIndex(user => user.id === userId);
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedUser };
            return users[index];
        }
        return null;
    }

    static deleteUser(userId) {
        const index = users.findIndex(user => user.id === userId);
        if (index !== -1) {
            const deletedUser = users.splice(index, 1);
            return deletedUser[0];
        }
        return null;
    }

    static getAllUsers() {
        return users;
    }
}

module.exports = UserService;