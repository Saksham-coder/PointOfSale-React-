const User = require('./../models/userModel')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.auth = (req, res, next) => {

  console.log("Lets process login from backend")
    // Get token from header
    // const token = req.header('x-auth-token');
  
    // Check if not token
    // if (!token) {
    //   return res.status(401).json({ msg: 'No token, authorization denied' });
    // }
  
    // Verify token
    try {
      jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
        if (error) {
          return res.status(401).json({ msg: 'Token is not valid' });
        } else {
          req.user = decoded.user;
          next();
        }
      });
    } catch (err) {
      console.error('something wrong with auth middleware');
      res.status(500).json({ msg: 'Server Error' });
    }
  };


exports.login = async (req, res) => {
    try {
      console.log(req.body)
        const singleUser = await User.findOne({ email: req.body.email });
        console.log(singleUser)
        const correct = await bcrypt.compare(req.body.password, singleUser.password);
        console.log(correct)
        id = singleUser._id;
    const token = jwt.sign({ id }, 'abcdefebgudjnwksjcscjscsdjkcnjdc');
    console.log(token)
    // window.localStorage.setItem("x-auth-token", token);
    // res.cookie('auth',token);
    res.set('x-auth-token', token);
    res.status(200).json({
    token: token
	});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

exports.signup = (async (req, res) => {
	const newUser = await User.create(req.body);

	id = newUser._id;

	const token = jwt.sign({ id }, 'abcdefebgudjnwksjcscjscsdjkcnjdc');
	
	res.status(201).json({
		status: 'success',
		token: token,
		data: newUser
	});
});

exports.dummy = (req, res) => {
  res.send("hi")
}

exports.auth =  (req, res, next) =>{
  // Get token from header
  const token = req.params.id;

  console.log('Tokenn==>>', token)
  // Check if not token
  if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
     const decoded = jwt.verify(token, 'abcdefebgudjnwksjcscjscsdjkcnjdc');
    // console.log(decoded)
    req.id = decoded.id
    next()
    } catch (err) {
      console.error('something wrong with auth middleware');
      res.status(500).json({ msg: 'Server Error' });
  }
}

exports.getUser= async(req, res) => {
  try {
    // console.log(req.id)
      const user = await User.findById(req.id).select('-password').populate('products sold');
      res.json(user);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
};

