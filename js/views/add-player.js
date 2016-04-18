module.exports = Backbone.View.extend({
    events: {
        'click #submit-player': 'goTime', 
    },
    
    HTMLtemplate: _.template(document.getElementById('new-player-template').textContent),
    
    render: function() {
        this.model.setPosStart();
        this.model.setFuelReward();
        this.model.resetScore();
        this.el.innerHTML = this.HTMLtemplate();
    },
    
    goTime: function() {
        this.sendPlayer();
        this.sendVehicle();
        Backbone.history.navigate('play', {trigger: true});
    },
    
    sendPlayer: function() {
        var input = document.getElementById('name-player').value; 
        this.model.setPlayer(input);
    },
    
    sendVehicle: function() {
        var input = '';
        if (document.getElementById('speeder').checked) {
            input = document.getElementById('speeder').value;
        } else {
            input = document.getElementById('cruiser').value;   
        }
        this.model.setVehicle(input);
    },
});