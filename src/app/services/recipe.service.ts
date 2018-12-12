import { Recipe } from '../recipes/recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './ingredients.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeServices {
    recipesChanged = new Subject<Recipe[]>();
    //recipesSelected= new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe 1',
            'this a simple recipe',
            'https://www.cocinavital.mx/wp-content/uploads/2018/02/platillos_para_una_comida_de_cuaresma_portada.jpg',        
           [
                new Ingredient('aples' , 5),
                new Ingredient('Chease' , 5)
           ]
            ),
           new Recipe(
            'A test recipe 2',
            'this a simple recipe',
            'http://radiotexmex.fm/wp-content/uploads/2016/06/photoEscudo_TLAX_Gastronomia_Ac_gastronomia.jpg',
           [
            new Ingredient('bread' , 5)
           ]
            ),
           new Recipe(
            'A test recipe 3',
            'this a simple recipe',
            'https://gds.portal5g-media.com/contentFiles/image/2016/11/FEA/principal/53075_w840h0_1478286614appetite.jpg',
           [
            new Ingredient('salt' , 5)
           ]),
           new Recipe(
            'A test recipe 4',
            'this a simple recipe',
            'https://i.blogs.es/36938e/istock-840527124/450_1000.jpg',
            [
                new Ingredient('aples' , 5)
            ]
            ),
            ];

    constructor(private ingredientsService: IngredientsService) { }
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    AddRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredientsService.addIngredients(ingredients);

    }

    onDelateRecipe(index: number) {

        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());


    }
}