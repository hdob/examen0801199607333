var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/08011999607333', function(req,res,next){
  var objeto = [
    {
      "Nombre":"Hector Yovanni Doblado Lanza",
      "Cuenta": "0801199607333",
      "Correo": "hectorydoblado@gmail.com"
    }

              ];
  res.json(objeto);

});

router.get('/suma',function(req,res,next){
res.render('suma',{"numero1":"","numero2":"","sum":""});
});

var sumas = [];
router.post('/suma',function(req,res,next){
console.log(req.body);
var n1= req.body.numero1;
var n2= req.body.numero2;
sumas.push(req.body.numero1);
sumas.push("+");
sumas.push(req.body.numero2);
sumas.push("=");
sumas.push(parseInt(n1) + parseInt(n2));
var suma = sumas;
var sumt = {"numero1": req.body.numero1,"numero2": req.body.numero2,"sum": sumas};
res.render('suma',sumt);
});

module.exports = router;
