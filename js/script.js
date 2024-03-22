function navBar() {
    $("#nav-placeholder").load("nav.html");
};

function addIngredient() {
    $("#invisibleIng").after('<input class="form Input" placeholder="Ingredient"/><div id="invisibleIng"></div>');
};