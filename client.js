var getTweets = function(){
  console.log("inside")
  $.ajax({
  method: 'GET',
  url: 'http://localhost:4040/getTwit',
  success: function(data){
    console.log("data ====== ", data);
    console.log("Successfully fetched data!!!")
  },
  error: function(data){
    console.log("Failed to fetch data")
  }
  });
};