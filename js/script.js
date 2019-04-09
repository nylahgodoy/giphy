// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var input = $("input").val();
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q="+ input +"&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            var url = response.data[0].images.original.url;
            $('div').append('<img src=' + url + '>')
        }
    });
});