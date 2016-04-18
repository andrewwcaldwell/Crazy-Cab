module.exports = Backbone.View.extend({
    initialize: function() {
        this.model.on('change', this.render, this);
        var view = this;
        
        Mousetrap.bind('left', function () {
            view.recordLeft();
        });
        
        Mousetrap.bind('up', function () {
            view.recordUp();
        });
        
        Mousetrap.bind('down', function () {
            view.recordDown();
        });

        Mousetrap.bind('right', function () {
            view.recordRight();
        });
    },

    events: {
        //'click #button-left': 'recordLeft',
        //'click #button-up': 'recordUp',
        //'click #button-down': 'recordDown',
        //'click #button-right': 'recordRight', 
        'keypress': 'keyAction',
    },
    
    HTMLtemplate: _.template(document.getElementById('play-game-template').textContent),
    
    render: function() {
        this.model.newFuelReward();
        // Import Model Values for Render
        var posX = this.model.get('coorX');
        var posY = this.model.get('coorY');
    
        var fuelX = this.model.get('fuelX');
        var fuelY = this.model.get('fuelY');
        
        var user = this.model.get('user');
        var fuel = this.model.get('fuel');
        var score = this.model.get('score');
        
        
        var HTML = this.HTMLtemplate({
            username: user,
            fuellevel: fuel,
            score: score,
            cab: '',
            fare: '',
        });
        //console.log(HTML);
        var edit = fuelY -1;
        
        this.el.innerHTML = HTML;
        document.getElementById('cab').style.cssText += 'top:'+ posY +'0%; left:'+ posX + '0%;';
        document.getElementById('fare').style.cssText += 'top:'+ edit +'0%; left:'+ fuelX + '0%;';
    },
    
    recordLeft: function () {
        //console.log('You hit the Left Button');
        this.model.moveLeft();
        document.getElementById('cab').style.cssText += 'background-image: url(../resource/Car_Left.png);';
    },
    
    recordUp: function () {
        //console.log('You hit the Up Button');
        this.model.moveUp();
        document.getElementById('cab').style.cssText += 'background-image: url(../resource/Car_Up.png);';
    },
    
    recordDown: function () {
        //console.log('You hit the Down Button');
        this.model.moveDown();
        document.getElementById('cab').style.cssText += 'background-image: url(../resource/Car_Down.png);';
    },
    
    recordRight: function () {
        //console.log('You hit the Right Button');
        this.model.moveRight();
        document.getElementById('cab').style.cssText += 'background-image: url(../resource/Car_Right.png);';
    },
    
    
});