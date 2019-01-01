var request = require('request');
// Callback
// var callback = function(error, response, body){
//     console.log(body);
// };

// function doRequest(url){
//     request(url, callback);
// }

// doRequest('http://www.yad2.co.il');
// doRequest('http://www.facebook.com');

// Promises
// function doRequest(url){
//     return new Promise(function(resolve, reject){
//         request(url, function(error, response, body){
//             // console.log(body);
//             resolve(body);
//         });
//     });
// }

// doRequest('http://www.yad2.co.il').then(function(bodyYad2){
//     console.log('Yad2.co.il is here');
//     doRequest('http://www.facebook.com').then(function(bodyFacebook){
//         console.log('Facebook is here');
//     })
// });
// async/await
function doRequest(url){
    return new Promise(function(resolve, reject){
        request(url, function(error, response, body){
            // console.log(body);
            resolve(body);
        });
    });
}
async function init(){
    return new Promise(function(resolve, reject){
        var contentYad2 = await doRequest('http://www.yad2.co.il');
        console.log('Yad2.co.il is here');
        var contentFacebook = await doRequest('http://www.facebook.com');
        console.log('Facebook is here');
    });
}

// async function init2(){
//     return new Promise(function(resolve, reject){
        
//     });
// }

// (async function(){
//     await init();
//     await init2();
// })();
