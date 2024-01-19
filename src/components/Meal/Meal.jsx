import { useLoaderData } from "react-router-dom";
import { ingredients } from "../../utils/meal_utils";

const Meal = () => {
    const {meals} = useLoaderData();
    const meal = meals[0];
    const ingredients_values = ingredients(meal);
    // console.log(ingredients_values)
    return (
        <div className="m-8">
            <div className="flex md:flex-row sm: flex-col">
                <div className="h-96 w-96">
                    <img src={meal.strMealThumb} className="rounded-lg w-full" />
                </div>
                <div className="px-6 sm: mt-2">
                    <h1 className="text-5xl">{meal.strMeal}</h1>
                    <p className="text-gray-600 text-lg mt-3 mb-2">{meal.strCategory} | {meal.strArea}</p>
                    <div className="mt-2">
                        <h2 className="text-xl mb-2 font-bold">Ingredients:</h2>
                        <ol className="grid grid-cols-4 gap-3 ms-3">
                            {
                                Object.entries(ingredients_values).map(([ingredient_name, ingredient_measure]) =>{
                                    return (
                                        <li key={ingredient_name} className="m-0 p-0">
                                            <div>
                                                <p className="font-semibold">{ingredient_name}</p>
                                                <p className="ms-2 text-gray-500">{ingredient_measure}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <div className="mt-6 text-justify">
                <h2 className="text-xl mb-2 font-bold">Instructions:</h2>
                <p className="text-gray-600 text-lg ms-3">{meal.strInstructions}</p>
            </div>
        </div>
    );
};

export default Meal;