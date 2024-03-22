function navBar(dir) {
    if(dir == null){
        $("#nav-placeholder").load("nav.html");
    }
    else {
        dir = dir + "nav.html";
        $("#nav-placeholder").load(dir);
    }
};

function addIngredient() {
    $("#addIng").before('<input class="form Input" placeholder="Ingredient"/>');
};