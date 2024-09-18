import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Categories = () => {
    const categories = useLoaderData();

    const [data, setData] = useState([])
    useEffect(()=>{
        if ("categories" in categories){
            setData(categories['categories'])
        }
        else{
            setData(categories['meals'])
        }
    }, [categories])

    return (
        <div>
            <div className="m-8 grid md:grid-cols-4 sm:grid-cols-2 gap-5">
                {
                    data.map(category => <div key={category.idCategory || category.idMeal} className='w-full border-2 border-grey-300 rounded p-4 hover:border-yellow-300 transition-[border] ease-in-out duration-500'>
                    <Link to={category.strCategory ? `/categories/${category.strCategory}` : `/meal/${category.idMeal}`}>
                        <img className='w-full rounded' src={category.strCategoryThumb || category.strMealThumb} />
                        <h3 className='text-2xl mx-5 my-3'>{category.strCategory || category.strMeal}</h3>
                    </Link>
                </div>)
                }
            </div>
        </div>
    );
};

export default Categories;