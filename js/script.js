function navBar() {
    $("#nav-placeholder").load("/MoneySaver/nav.html");
};

function addIngredient() {
    $("#addIng").before('<input class="form Input" placeholder="Ingredient"/>');
};