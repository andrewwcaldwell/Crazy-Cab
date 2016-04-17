module.exports = Backbone.View.extend({
    initialize: function() {
        this.model.on('change', this.render, this);
        //console.log('ready for changes');
    },
    
    events: {
        'click #button-left': 'recordLeft',
        'click #button-up': 'recordUp',
        'click #button-down': 'recordDown',
        'click #button-right': 'recordRight',   
    },
    
    HTMLtemplate: _.template(document.getElementById('play-game-template').textContent),
    
    render: function() {
        this.model.newFuelReward();
        // Import Model Values for Render
        var posX = this.model.get('coorX');
        var posY = this.model.get('coorY');
        var comboP = 'X: ' + posX + ' , Y: ' + posY;
        
        var fuelX = this.model.get('fuelX');
        var fuelY = this.model.get('fuelY');
        var comboF = 'X: ' + fuelX + ' , Y: ' + fuelY;
        
        var user = this.model.get('user');
        var fuel = this.model.get('fuel');
        var score = this.model.get('score');
        
        
        var HTML = this.HTMLtemplate({
            username: user,
            fuellevel: fuel,
            position: comboP,
            fuelRewards: comboF,
            score: score,
            cab: 'test',
        });
        //console.log(HTML);
        
        this.el.innerHTML = HTML;
        document.getElementById('cab').style.cssText += 'margin-top:'+ posY +'%; margin-left:'+ posX + '%;';
    },
    
    recordLeft: function () {
        //console.log('You hit the Left Button');
        this.model.moveLeft();
    },
    
    recordUp: function () {
        //console.log('You hit the Up Button');
        this.model.moveUp();
    },
    
    recordDown: function () {
        //console.log('You hit the Down Button');
        this.model.moveDown();
    },
    
    recordRight: function () {
        //console.log('You hit the Right Button');
        this.model.moveRight();
    },
    
    
});