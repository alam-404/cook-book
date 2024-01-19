import { Link, useLoaderData } from "react-router-dom";
// import Category from "../Category/Category";

const Categories = () => {
    const { categories } = useLoaderData();
    return (
        <div>
            <div className="m-8 grid md:grid-cols-4 sm:grid-cols-2 gap-5">
                {
                    categories.map(category => <div key={category.idCategory} className='w-full border-2 border-grey-300 rounded p-4 hover:border-yellow-300 transition-[border] ease-in-out duration-500'>
                    <Link to={`/category/${category.strCategory}`}>
                        <img className='w-full rounded' src={category.strCategoryThumb} />
                        <h3 className='text-2xl mx-5 my-3'>{category.strCategory}</h3>
                    </Link>
                </div>)
                }
            </div>
        </div>
    );
};

export default Categories;