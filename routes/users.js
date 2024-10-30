var value = 0;
var total = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  value +=2;
  total+= value;
  res.send('respond with a resource');
});