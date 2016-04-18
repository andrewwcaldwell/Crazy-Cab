module.exports = Backbone.View.extend({
    events: {
        'click #submit-restart': 'restart', 
    },
    
    HTMLtemplate: _.template(document.getElementById('game-over-template').textContent),
    
    render: function() {
        var userscore = this.model.get('score');
        var highscore = this.model.get('hScore');
        var HTML = this.HTMLtemplate({
            highscore: highscore,
            userscore: userscore,
        });
        this.el.innerHTML = HTML;
    },
    
    restart: function() {
        //Study .navigate and implement on other views
        Backbone.history.navigate('add', {trigger: true});

    },
});