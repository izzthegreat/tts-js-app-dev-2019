const list = $('ul')
$('#addItem').submit(function() { //Add To Do Button
     //Create New List Item With Text Input
    let input = $('#textField').val()
    $('<li></li>').text(input).appendTo(list)
    let newItem = list.find('li')[list.find('li').length-1]
    newItem.click(function(){
        debugger
        newItem.attr("style","text-decoration:line-through")
    }) 
    $('#textField').val() = "" //Clear The Text Box For The next Item
})