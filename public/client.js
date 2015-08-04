var getTweets = function(){
  $.ajax({
  method: 'GET',
  url: 'http://localhost:4040/getTwit',
  success: function(data){
    console.log(data);

  }
});
};