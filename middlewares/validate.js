import {body, validationResult} from "express-validator"
async function validate(req, res, next){
    body('email').isEmail()
    // password must be at least 10 chars long
    body('phoneNumber').isLength({ min: 10 })
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
    next()
}
export default validate