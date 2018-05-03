import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe('Burger',
         'Wanna eat? I am delicious but not crunchy',
          'http://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/02750-3%20BK_Web_QuarterPndKing_300x270_CR.png',
          [
              new Ingredient('Meat',1),
              new Ingredient('French Fries',20)
          ]
        ),
        new Recipe(
            'Double Chicken Shwarama', 
            'khaoge to hume na bhool paoge naam hai humra shawarma', 
        'https://i.ytimg.com/vi/Vjdvl-aYXGg/maxresdefault.jpg',
    [
        new Ingredient('Meat',1),
              new Ingredient('French Fries',20)
    ]
),
        new Recipe(
            'Chicken Shwarama',
            'I am available in diferent tast please eat me na',
          'https://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/Chicken-Shawarma-Stuffed-Pita-Pockets.jpg',
        [
            new Ingredient('Meat',1),
              new Ingredient('French Fries',20)
        ]
    )
];



constructor(private shopService: ShoppingListService){

}
        getRecipes(){
            return this.recipes.slice();
        }

        getRecipe(index: number){
            return this.recipes[index];
        }

        addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.shopService.addIngredients(ingredients);
        }



}