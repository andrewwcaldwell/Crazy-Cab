var addView = require('./views/add-player');
var playView = require('./views/play-game');
var gameModel = require('./models/game');

module.exports = Backbone.Router.extend({
    
    initialize: function() {
        this.game = new gameModel();
        this.view = null;        
    },
    routes: {
        'play': 'playGame',
        'add': 'addPlayer',
    }, 
    
    playGame: function() {
        //console.log('Ready to Play Game');
        // Obligatory Cleaning Crew
        if (this.view !== null) {
            this.view.el.innerHTML = '';
            this.view.undelegateEvents();
        }
        
        this.view = new playView({
            model: this.game,
            el: document.getElementById('play-game')
        });
        this.view.render();
    },
    
    addPlayer: function() {
        //console.log('Ready to Add Player');
        // Obligatory Cleaning Crew
        if (this.view !== null) {
            this.view.el.innerHTML = '';
            this.view.undelegateEvents();
        }
        
        this.view = new addView({
            model: this.game,
            el: document.getElementById('new-player')
        });
        this.view.render();
    },
});