module.exports = Backbone.Model.extend({
    
    defaults: {
        gridMax: 100,
        gridMin: 0,
        coorY: 50,
        coorX: 50,
        fuelX: 0,
        fuelY: 0,
        user: '',
        fuel: 5,
        use: 0,
        score: 0,
        reward: 0,
        
        vehicles: {
            speeder: {
                mpg: 2,
                tank: 30,
                reward: 15,
            },
            cruiser: {
                mpg: 1,
                tank: 15,
                reward: 8,
            },
        },
    },
    /// Functions for Settings from Game Set-up / Add Player
    setPlayer: function(callback) {
        var handoff = this.get('user');
        handoff = callback;
        this.set('user', handoff);
        console.log('Username set to: ' + handoff);
        // Probably not needed >> this.trigger('change', this);  
    },
    
    setVehicle: function(callback) {
        var handoff = this.get('vehicles');
        var arr = [];
        for (var i in handoff) {
            if (i === callback) {
                arr.push(handoff[i]);
            }
        }
        var helpFuel = this.get('fuel');
        var helpUse = this.get('use');
        var helpReward = this.get('reward');
        
        helpFuel = arr[0].tank;
        helpUse = arr[0].mpg;
        helpReward = arr[0].reward;
        this.set('fuel', helpFuel);
        this.set('use', helpUse);
        this.set('reward', helpReward);
        console.log('Updated - mpg: ' + helpUse + ", fuel: " + helpFuel);
    },
    
    setPosStart: function() {
        var helpY = this.get('coorY');
        var helpX = this.get('coorX');
        
        var helpY = this.getRand();
        var helpX = this.getRand();
        
        this.set('coorY', helpY);
        this.set('coorX', helpX);
    },
    
    setFuelReward: function() {
        var helpY = this.get('fuelY');
        var helpX = this.get('fuelX');
        
        var helpY = this.getRand();
        var helpX = this.getRand();
        
        this.set('fuelY', helpY);
        this.set('fuelX', helpX);
    },
    
    newFuelReward: function() { 
        var helpFY = this.get('fuelY');
        var helpFX = this.get('fuelX');
        var helpPY = this.get('coorY');
        var helpPX = this.get('coorX');
        var helpFuel = this.get('fuel');
        var helpReward = this.get('reward');
        
        if ( helpFX === helpPX && helpFY === helpPY) {
            this.setFuelReward();
            this.score10();
            helpFuel = helpFuel + helpReward;
            console.log('You reached the Fuel Points Rewards Card - You have received More Fuel Points');
        }
        this.set('fuel', helpFuel);
    },
    
    urDead: function() {
        var helpFuel = this.get('fuel');
        if (helpFuel === 0) {
            alert('Sorry. Ass, Grass, or Gas, and you aint got no gas... looks like your SOL Amigo! Start a New Game');
        }
    },
        
    /// Functions for Gameplay    
    moveLeft: function() {
        var handoff = this.get('coorX');
        var helpFuel = this.get('fuel');
        var helpUse = this.get('use');
        if (helpFuel === 0) {
            console.log ('Player is out of fuel :(');
            
        } else {
            helpFuel = helpFuel - helpUse;
            if (handoff === 0) {
                console.log ('Player is already pulled all the way left, He can\'t pull left any further dude!');
            } else {
                    handoff = handoff - 10;
            }
        }
        this.set('fuel', helpFuel);
        this.set('coorX', handoff);
        this.urDead();
        //console.log('Updated Postion, X = ' + handoff);
    },
    moveUp: function() {
        var handoff = this.get('coorY');
        var helpFuel = this.get('fuel');
        var helpUse = this.get('use');
        if (helpFuel === 0) {
            console.log ('Player is out of fuel :(');
        } else {
            helpFuel = helpFuel - helpUse;
            if (handoff === 100) {
                console.log ('Player is already pulled all the way up, He can\'t pull up any further dude!');
            } else {
                handoff = handoff + 10;
            }
        }
        this.set('fuel', helpFuel);
        this.set('coorY', handoff);
        this.urDead();
        //console.log('Updated Postion, Y = ' + handoff);
    },
    moveDown: function() {
        var handoff = this.get('coorY');
        var helpFuel = this.get('fuel');
        var helpUse = this.get('use');
        if (helpFuel === 0) {
            console.log ('Player is out of fuel :(');
        } else {
            helpFuel = helpFuel - helpUse;
            if (handoff === 0) {
                console.log ('Player is already pulled all the way down, He can\'t pull down any further dude!');
            } else {
                handoff = handoff - 10;
            }
        }
        this.set('fuel', helpFuel);
        this.set('coorY', handoff);
        this.urDead();
        //console.log('Updated Postion, Y = ' + handoff);
    },
    moveRight: function() {
        var handoff = this.get('coorX');
        var helpFuel = this.get('fuel');
        var helpUse = this.get('use');
        if (helpFuel === 0) {
            console.log ('Player is out of fuel :(');
        } else {
            helpFuel = helpFuel - helpUse;
            if (handoff === 100) {
                console.log ('Player is already pulled all the way right, He can\'t pull right any further dude!');
            } else {
                handoff = handoff + 10;
            }
        }
        this.set('fuel', helpFuel);
        this.set('coorX', handoff);
        this.urDead();
        //console.log('Updated Postion, X = ' + handoff);
    },
    //Attempt to work this back in...
    /*
    expendFuel: function() {
        var handoff = this.get('fuel');
        if (handoff === 0) {
            console.log ('Player is out of fuel');
        } else {
            handoff = handoff - 1;
        }
        this.set('fuel', handoff);
        console.log('Fuel level is at ' + handoff);
    },
    */
    
    getRand: function() {
        var min = this.get('gridMin');
        var max = this.get('gridMax');
        return Math.floor(Math.random() * (max-min+1)+min);   
    },
    
    score10: function() {
        var helpScore = this.get('score');
        helpScore = helpScore + 10;
        this.set('score', helpScore);
    },
    
    score100: function() {
        var helpScore = this.get('score');
        helpScore = helpScore + 100;
        this.set('score', helpScore);
    },
});