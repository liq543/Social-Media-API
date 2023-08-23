const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');
const { Thought } = require('../models/Thoughts');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const users = [
    { username: 'Alice', email: 'alice@email.com' },
    { username: 'Bob', email: 'bob@email.com' }
];

const thoughts = [
    { thoughtText: 'This is a random thought from Alice', username: 'Alice' },
    { thoughtText: 'Bob thinking about food!', username: 'Bob' },
];

const seedDatabase = async () => {
    try {
        await User.insertMany(users);
        console.log('User data inserted!');

        await Thought.insertMany(thoughts);
        console.log('Thought data inserted!');

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
        mongoose.connection.close();
    }
};

seedDatabase();