module.exports = {
    search: function (query) {
        var self = this;

        return new Promise(function (resolve, reject) {
            Vue.http.jsonp('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222', self.convertQuery(query)).then(function (res) {
                var data = self.transform(res.data);
                console.log(data);
                resolve(data);
            }, function (error) {
                reject(Error(error));
            });

        });
    },
    convertQuery: function (query) {
        return {
            applicationId: '1081478947788622111',
            keyword: query.Keyword
        };
    },
    transform: function (data) {
        return data;
    }
}