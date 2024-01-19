import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
    const { categories } = useLoaderData();
    return (
        <div>
            <div className="m-8 grid md:grid-cols-4 sm:grid-cols-2 gap-5">
                {
                    categories.map(category => <Category key={category.idCategory} category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;