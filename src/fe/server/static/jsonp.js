
function JsonpRequest(options) {
    var url = options.url;
    var success = options.success;
    window.successCallback = function(res){
        success && success(res);
    }
    var scrip = document.createElement('script');
    scrip.src = url + '&callback=successCallback'
    document.body.appendChild (scrip);
}

var request = new JsonpRequest({
    url : 'http://127.0.0.1:3001/get/1?a=1&b=2&u=5',
    success:function(res){
        console.log(res);
    }
});
