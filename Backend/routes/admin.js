const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser');
// Load environment variables
dotenv.config();

app.use(cors());
app.use(bodyParser.json());


// Admin login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Load preset credentials from .env
    const presetUsername = process.env.ADMIN_USERNAME;
    const presetPassword = process.env.ADMIN_PASSWORD;

    try {
        // Check if username and password match the preset credentials
        if (username !== presetUsername || password !== presetPassword) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // If the credentials are valid, generate a JWT token
        const token = jwt.sign({ username: presetUsername }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.username = decoded.username;
        next();
    } catch (err) {
        console.error("Error verifying token:", err);
        res.status(403).json({ message: "Invalid token" });
    }
};

router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "Protected route accessed successfully", username: req.username });
});

module.exports = router;