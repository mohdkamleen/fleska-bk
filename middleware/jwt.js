const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;  // Store this securely!
const generateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
        expiresIn: '7d'
    });
};
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) return res.status(401).json({ "message": "Unauthorized." })
    jwt.verify(token, JWT_SECRET, (err, decToken) => {
        if (err) return res.status(401).json({ "message": "Unauthorized." })
        req.userId = decToken.id
        next()
    })
};
module.exports = { generateToken, verifyToken };