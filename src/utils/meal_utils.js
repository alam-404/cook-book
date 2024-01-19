function ingredients(meals){
    let ingredients_with_values = {};
    for (let i = 1; i < 21; i++) {
        const meal_key = meals[`strIngredient${i}`];
        if (meal_key == '' || meal_key == null) continue
        const meal_value = meals[`strMeasure${i}`];
        ingredients_with_values[meal_key] = meal_value;
    }
    return ingredients_with_values;
}

export {ingredients}