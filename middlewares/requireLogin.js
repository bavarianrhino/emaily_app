// Next is a function called once our middleware is complete and done running 
// and then passes the reqest object to the next middleware
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: "Please login in to purchase!"})
    }

    // If logged in and next() is called, it passes along the request 
    next();
};