import { Link } from 'react-router-dom';

const Category = (params) => {
    const {strCategory, strCategoryThumb} = params.category;
    return (
        <div className='w-full border-2 border-grey-300 rounded p-4 hover:border-yellow-300 transition-[border] ease-in-out duration-500'>
            <Link to={`/category/${strCategory}`}>
                <img className='w-full rounded' src={strCategoryThumb} />
                <h1 className='text-2xl mx-5 my-3'>{strCategory}</h1>
            </Link>
        </div>
    );
};

export default Category;