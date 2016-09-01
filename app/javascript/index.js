var $ = require('jquery');
var _ = require('lodash');

var dice = [1,2,3,4,5,6];

module.exports = $('#rollthedice').on('click', function(){
  var rolled = _.shuffle(dice).pop();
  $('#dicevalue').html('<h1>'+rolled+'</h1>');
  $('#rollthedice').text('Roll Again?');
});
