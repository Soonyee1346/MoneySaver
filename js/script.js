const recipeName = document.getElementById("rName");
const ingredients = document.getElementById("ingredient")

const recipes = [
    {
        recipeName: "",
        ingredients: "",
        prevPrice: "",
        currPrices: "",
        totalPrice: ""
    },

];

function navBar() {
    $("#nav-placeholder").load("/MoneySaver/nav.html");
};

function addIngredient() {
    $("#addIng").before('<input class="form Input" placeholder="Ingredient"/>');
};