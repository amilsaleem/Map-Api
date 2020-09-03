
var exp=require("express");
var app=exp();
const fs = require('fs');
const hbs = require('hbs');
const path = require('path');
app.set('views', path.join(__dirname));
app.set('view engine', 'hbs');

let rawdata = fs.readFileSync('data.json');
let vehicle = JSON.parse(rawdata);

console.log(vehicle[0]);
var a = new Array(Object.keys(vehicle).length);
//var a[Object.keys(vehicle).length][2]=0;
//var a=[][];

for (var i = 0; i < a.length; i++) {
    a[i] = new Array(2);
}

for(i=0;i<Object.keys(vehicle).length;i++){
  a[i][0]=vehicle[i].longitude;
  a[i][1]=vehicle[i].latitude;

}
console.log(a);
//

app.get('/',function (req,res) {

 res.render('ind', {vehicle:a,nos:Object.keys(vehicle).length})
})

app.listen(9001,function () {
        console.log("Running");
})
