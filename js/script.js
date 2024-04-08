const recipeName = document.getElementById("rName");
const submitRecipe = document.getElementById("submitRecipe");
var i = 1;

const recipes = [
    {
        recipeName: "",
        ingredients: [],
        prevPrice: "",
        currPrices: "",
        totalPrice: ""
    },

];

function navBar() {
    $("#nav-placeholder").load("/MoneySaver/nav.html");
};

function addIngredient() {
    $("#addIng").before(`<input class="form Input" id="ingredient${i}" placeholder="Ingredient"/>`);
    i++;
};

const addRecipe= () => {
    recipes.recipeName = recipeName;
    for(var j = 0; j < i; j++){
        recipes.ingredients[j] = document.getElementById(`ingredients{$j}`).value
        console.output(recipes.ingredients[j])
    }
}

submitRecipe.addEventListener("click", addRecipe);