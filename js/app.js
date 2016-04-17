window.addEventListener('load', function () {
    var GameRouter = require('./router');
    
    var router = new GameRouter();
    Backbone.history.start();
    router.navigate();
    // add views or models as needed.
    
});