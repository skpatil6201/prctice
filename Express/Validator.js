const express = require('express')
const app = express()


const { body, validationResult } = require('express-validator')
const { param } = require('express-validator')
const { query } = require('express-validator')
app.use(express.json())

app.post(
    "/data/:id",
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
        param('id').isMongoId()
    ],
    (req, res) => {
        console.log("req.body:", req.body);

        const err = validationResult(req)
        if (!err.isEmpty()) {
            res.status(400).json()
        }


        const { email, password } = req.body;

        // send response
        res.status(200).json({
            message: "Data received successfully",
            email,
            password
        });
    }
);


app.post('/tejas', [

    param('id').isMongoId(),
    query('page').isInt({ min: 3 })
], (req, res) => {

})

app.get('/', (req, res) => {
    res.send("hello tejas")
})

app.listen(8000, () => {
    console.log("port run on 5000")
})