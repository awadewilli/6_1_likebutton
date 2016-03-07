
var Backbone = require('backbone');
var $ = require('jquery');
var handlebars = require('handlebars');
var Buttons = require('./models/like_button');

var likeButton = new Buttons();
var initNum = likeButton.get("clickNum");
buildButton();



// function replacer(key, value){
//   if (initNum == 1){
//
//   }
// }
///////////////////////////////////////////////////////////////
/////Handlebar template
///////////////////////////////////////////////////////////////

function buildButton(){
  var source = $('#button-template').html();
  var template = handlebars.compile(source);
//,likes:modelString.likeText
  var context = {amt:likeButton.get("clickNum"),likes:likeButton.get("likeText")};
  
  console.log(likeButton.get("clickNum"));
  var html  = template(context);
  $('.container').html(html);
}

///////////////////////////////////////////////////////////////
/////Click Handler
///////////////////////////////////////////////////////////////

$('.container').on("click", "button", function(){
  likeButton.like();
  console.log(likeButton.get('clickNum'));
  buildButton();
});
