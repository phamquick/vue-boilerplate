var Rakuten = require('./Rakuten');

Rakuten.search({}).then(function(result){
    console.log(result);
},function(error){
    console.log(error);
});

getItems(function (data) {
    console.log(data);
});
function getItems(callback) {

}


