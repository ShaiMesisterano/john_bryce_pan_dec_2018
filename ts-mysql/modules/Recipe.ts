class Recipe implements IRecipe {
    name: string;
    ingredients: string[];
    bakeTime: number;
    constructor(recipe: IRecipe) {
        this.name = recipe.name;
        this.ingredients = recipe.ingredients;
        this.bakeTime = recipe.bakeTime;
    }
}