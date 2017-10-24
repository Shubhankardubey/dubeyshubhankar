// Runs jQuery
$(document).ready(function(){
    // Search is clicked this code runs
    $('#search').click(function(){
        // Gets the search input
        var searchTerm= $('#searchTerm').val();
        // API url with searchTerm included
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

        $.ajax({
            type:"GET",
            url:url,
            async:false,
            dataType: "json",
            success: function(data){
                // Get heading console.log(data[1][0]);
                // Get description console.log(data[2][0]);
                // Get link console.log(data[3][0]);
                    $('#output').html('');
                for(var i=0;i<data[1].length;i++){

                $('#output').prepend("<li><a href =" +data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }

                $("#searchTerm").val('');
            },
            error: function(errorMessage){
                console.log(errorMessage);
            }
        });

    });

    $("#searchTerm").keypress(function(e){
        if(e.which==13){
            $("#search").click();
        }
    });

});
