// types.ts

// Since 'erasableSyntaxOnly' is enabled in your environment, 
// using a const object is the standard way to declare screen states!
export const AppScreen = {
  HOME: 'HOME',
  COOK: 'COOK',
  DISCOVER: 'DISCOVER',
  SAVED: 'SAVED',
  RECIPE_DETAIL: 'RECIPE_DETAIL',
  COOKING_STEPS: 'COOKING_STEPS'
} as const;

export type AppScreen = typeof AppScreen[keyof typeof AppScreen];

export interface Ingredient {
  name: string;
}

export interface RecipeStep {
  order: number;
  title: string;
  description: string;
  durationSeconds: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  likes: number;
  imageUrl: string;
  ingredients: string[];
  equipmentNeeded: string[];
  isBudgetFriendly: boolean;
  budgetEstimatePesos: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTimeMinutes: number;
  steps: RecipeStep[];
  byUserIngredients?: boolean;
}