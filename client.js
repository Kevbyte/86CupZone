var getTweets = function(){
  console.log("inside")
  $.ajax({
  method: 'GET',
  url: 'http://localhost:4040/getTwit',
  contentType: 'application/json',  
  success: function(data){
    console.log("data ====== ",data);
    for(var i=0; i<data.messages.length; i++){
      $('body').append("<div>" + data.messages[i] + "</div>");
    }
    
  },
  error: function(data){
    console.log("Failed to fetch data")
  }
  });
};

$('body').append('<div class="drivers"></div>');
$('.drivers').append('<span></span>')