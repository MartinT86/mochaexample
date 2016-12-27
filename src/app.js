var example = require("./callbackExample");

example.service(3, function(err, data){
    if(err) throw err;
    console.log('got it:', data);
})