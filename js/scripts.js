$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {
    event.preventDefault();
    const colorInput = $("input#color").val();
    const tvShowInput = $("input#tvShow").val();
    const animalInput= $("input#animal").val();
    const foodInput = $("input#food").val();
    const hobbiesInput = $("input#hobbies").val();
    const array = [colorInput, tvShowInput, animalInput, foodInput, hobbiesInput]
    const newArray = []
    newArray.push(array[1], array[0], array[2]);

    $(".color").text(colorInput);
    $(".tvShow").text(tvShowInput);
    $(".animal").text(animalInput);
    $(".food").text(foodInput);
    $(".hobbies").text(hobbiesInput);
    $("#story").show();

    $("#allFavoriteThings").append("<li>"+ array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + array[4] + "</li>")
    $("#allFavoriteThings").append("<li>"+ newArray[0] + " " + newArray[1] + " " + newArray[2] + "</li>");
  });
});
