// Next is a function called once our middleware is complete and done running 
// and then passes the request object to the next middleware
module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({ error: "Please purchase more credits!"}) // Status code 403 Forbbiden can be changed to 402 Payment needed in future
    }

    // If user has more than 1 credit and next() is called, it passes along the request 
    next();
};