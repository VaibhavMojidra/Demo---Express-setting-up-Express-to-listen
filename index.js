var express=require('express'); //importing express
var app=express();// initializing express

/*
app.listen(3000);// setting port to listen
console.log("Listening to port 3000");
*/



/*
app.set('port',3000); // creating application variable key value pair
app.listen(app.get('port'));// getting application variable using key and setting it as port to listen
//also app.listen is an asynchronous method
console.log("Listening to port "+app.get('port'));
*/


/*
//setting call back function on running app.listen method
app.set('port',3000); // creating application variable key value pair
app.listen(app.get('port'),function(){
    console.log("Listening to port "+app.get('port'));
});// getting application variable using key and setting it as port to listen with callback

console.log("Reached end");
*/


app.set('port',3000); // creating application variable key value pair 
var server= app.listen(app.get('port'),function(){ // create object returned by app.listen
    console.log("Listening to port "+server.address().port);// using object to get port which we are listening to
});