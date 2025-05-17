var express = require('express');
var router = express.Router();
var path = require('path');

/* GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api' , function (req, res, next) {
  console.log('GET request to the homepage');
  next()
})

router.get('/api' , function (req, res, next) {
  res.send('GET request to the homepage');
})

router.get('/api/:id' , function(req,res, next){
  res.send('GET request to the homepage with id: ' + req.params.id);
})

/* POST */
router.post('/api', function (req, res, next) {
  res.json({
    message: 'POST request to the homepage',
    body: req.body
  });
})

/* Download */
router.get('/download', function (req, res, next) {
  res.download('public/Hello.txt', 'Hello.txt');
})

/* Redirect */
router.get('/secret', function (req, res, next) {
  console.log('Redirecting to login');
  res.redirect('/login');
})
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/unknown', function(req, res, next) {
  let obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  }
  res.type('application/json');
  //res.status(400).send(JSON.stringify(obj));
  res.status(400).json(obj);
});

/* Send File */
router.get('/file/:filename', function (req, res, next) {
  const options = {
    root: path.join(__dirname, '../public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.filename
  res.sendFile(fileName, options, (err) => {
    if(err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  })
});
module.exports = router;
