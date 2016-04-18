var addView = require('./views/add-player');
var playView = require('./views/play-game');
var endView = require('./views/game-over');
var gameModel = require('./models/game');

module.exports = Backbone.Router.extend({
    
    initialize: function() {
        this.game = new gameModel();
        this.view = null; 
        Backbone.history.navigate('add', {trigger: true});
    },
    routes: {
        'add': 'addPlayer',
        'play': 'playGame',
        'end': 'gameOver',
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
            el: document.getElementById('play-game')
            //el: document.getElementById('new-player')
        });
        this.view.render();
    },
    
    gameOver: function() {
        if (this.view !== null) {
            this.view.el.innerHTML = '';
            this.view.undelegateEvents();
        }
        
        this.view = new endView({
            model: this.game,
            el: document.getElementById('play-game')
            //el: document.getElementById('game-over')
        });
        this.view.render();
    }
});