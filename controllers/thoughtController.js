const {Thought} = require('../models/Thoughts');
const User = require('../models/User');

module.exports = {
    // GET all thoughts
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find().populate('username', 'username');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // GET a single thought by its _id
    getThoughtById: async (req, res) => {
        try {
            const thought = await Thought.findById(req.params.id);
            if (!thought) return res.status(404).json({ message: 'Thought not found' });
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST a new thought
    createThought: async (req, res) => {
        try {
            const { thoughtText, username, userId } = req.body;
            const thought = new Thought({ thoughtText, username });
            const savedThought = await thought.save();
            
            // Push the thought's _id to the associated user's thoughts array
            await User.findByIdAndUpdate(userId, { $push: { thoughts: savedThought._id } });
            
            res.status(201).json(savedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // PUT to update a thought by its _id
    updateThought: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!thought) return res.status(404).json({ message: 'Thought not found' });
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to remove a thought by its _id
    deleteThought: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            if (!thought) return res.status(404).json({ message: 'Thought not found' });

            // BONUS: Remove the thought's _id from the associated user's thoughts array
            await User.updateOne({ _id: thought.userId }, { $pull: { thoughts: thought._id } });

            res.json({ message: 'Thought deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST to create a reaction
    createReaction: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $push: { reactions: req.body } },
                { new: true }
            );
            if (!thought) return res.status(404).json({ message: 'Thought not found' });
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to pull and remove a reaction by its reactionId
    deleteReaction: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $pull: { reactions: { reactionId: req.body.reactionId } } },
                { new: true }
            );
            if (!thought) return res.status(404).json({ message: 'Thought not found' });
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
