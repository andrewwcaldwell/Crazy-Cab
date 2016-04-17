module.exports = Backbone.View.extend({
    events: {
        'click #submit-player': 'sendPlayer', 
    },
    
    HTMLtemplate: _.template(document.getElementById('new-player-template').textContent),
    
    render: function() {
        this.model.setPosStart();
        this.model.setFuelReward();
        this.el.innerHTML = this.HTMLtemplate();
    },
    
    sendPlayer: function() {
        var input = document.getElementById('name-player').value; 
        this.model.setPlayer(input);
        this.sendVehicle();
        //Study .navigate and implement on other views
        Backbone.history.navigate('play', {trigger: true});

    },
    
    sendVehicle: function() {
        var input = '';
        if (document.getElementById('speeder').checked) {
            input = document.getElementById('speeder').value;
        } else {
            input = document.getElementById('cruiser').value;   
        }
        this.model.setVehicle(input);
        //console.log(input + ' selected');
    },
});