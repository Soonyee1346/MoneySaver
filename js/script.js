function navBar() {
    $("#nav-placeholder").load("nav.html");
};

function addIngredient() {
    $("#addIng").before('<input class="form Input" placeholder="Ingredient"/>');
};