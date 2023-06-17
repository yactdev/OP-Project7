const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
module.exports = (req, res, next) => {
  try {
    dotenv.config();
    console.log(req.body);
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const decodedUserId = decodedToken.userId;
    if (req.body.userid && req.body.userId == decodedUserId) {
      throw 'Invalid user ID';
    } else {
      console.log('User validated successfully');
      next();
    }
  } catch {
    console.log('ERRROOOoooooooorrrr');
    res.status(401).json({
      error: new Error('Invalid request!'),
    });
  }
};
