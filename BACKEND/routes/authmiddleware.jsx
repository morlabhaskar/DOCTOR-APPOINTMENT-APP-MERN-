const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token,"Bhaskat_Healthy_app", (err, decode) => {
            if (err) {
                return res.status(401).send({ message: "Auth Failed", success: false });

            }
            else {
                req.body.userId = decode.id;
                next();
            }
        })
    }
    catch (error) {
        console.log(error);
        return res.status(401).send({message:"Auth failed",success:false});
        

    }
}