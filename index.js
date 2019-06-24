var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", addToNeedToBuyList);

function addToNeedToBuyList() {
  var needToBuy = $('.name').val();

cardContainer.append (`
<p class="needToBuy"><input type="checkbox" class="checkbox"> I need to buy ${needToBuy}
`);

var checkbox = $('.checkbox');
checkbox.on("click", remove)

function remove(){
  event.target.parentNode.remove();
}
$('.name').val("");
}
