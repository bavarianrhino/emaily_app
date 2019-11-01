
module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({ error: "Please purchase more credits!"})
    }

    next();
};
// ************************************
// Notes can be found in consolelog.js 
// ************************************