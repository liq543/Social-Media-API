const User = require('../models/User');

module.exports = {
    // GET all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // GET a single user by its _id
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST a new user
    createUser: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // PUT to update a user by its _id
    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to remove a user by its _id
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json({ message: 'User deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST to add a new friend to a user's friend list
    addFriend: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to remove a friend from a user's friend list
    removeFriend: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
