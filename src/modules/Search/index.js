var Rakuten = require('./Rakuten');

var query = {
    Keyword: 'ÉRÅ[Éì'
}
console.log(Config)

var Test = new Promise(function (resolve, reject) {
    var i =0;
    var timer = setInterval(function () {
        i++;
        console.log(i)
    },100);
    setTimeout(function () {
        resolve('Test');
        clearInterval(timer);
    },1000);

});

Promise.all([Test,Rakuten.search(query)]).then(function (results) {
    results.forEach(function (result) {
        console.log(result);
    });
});