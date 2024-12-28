const bcrypt = require('bcryptjs');
const User = require('../models/user.model'); // Adjust the path as necessary

const authService = {
    register: async (userData) => {
        const { username, password } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        return newUser;
    },

    login: async (username, password) => {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return { user };
    }
};

module.exports = authService;
