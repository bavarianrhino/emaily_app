
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: "Please login in to purchase!"})
    }

    next();
};
// ************************************
// Notes can be found in consolelog.js 
// ************************************