import { Link, useLoaderData } from "react-router-dom";

const Meals = () => {
    const meals_data = useLoaderData()
    return (
        <div>
            <div className="m-8 grid md:grid-cols-4 sm:grid-cols-2 gap-5">
                {
                    meals_data.meals.map(meal => <div key={meal.idMeal} className="w-full border-2 border-grey-300 rounded p-4 hover:border-yellow-300 transition-[border] ease-in-out duration-500">
                        <Link to={`/meal/${meal.idMeal}`}>
                            <img className='w-full rounded' src={meal.strMealThumb} />
                            <h1 className='text-2xl mx-5 my-3'>{meal.strMeal}</h1>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Meals;