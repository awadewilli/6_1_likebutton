var Backbone = require('backbone');
var clicks;
var Buttons = Backbone.Model.extend({
    defaults:{
      'clickNum':0,
      'likeText':'Likes',
      'likeTextSing':'Like'
    },
    like: function(){
      this.set('clickNum',this.get('clickNum') + 1);
    }
  
});


module.exports = Buttons;
