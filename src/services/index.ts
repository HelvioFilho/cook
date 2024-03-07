import * as ingredients from "./ingredientsService";
import * as recipes from "./recipesService";
import * as preparation from "./preparationsService";

export const services = {
  ingredients,
  recipes,
  preparation,

  storage: {
    imagePath:
      "https://aazufcicrlrogrvknnoy.supabase.co/storage/v1/object/public/ingredients",
  },
};
