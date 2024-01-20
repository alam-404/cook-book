import { Link } from "react-router-dom"

function App() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center my-40 px-5">
      <div>
        <h1 className="text-6xl my-5">Welcome to <span className="text-yellow-500">CookBook</span> 📒</h1>
        <div className="text-lg my-5 mx-2">
          <p>Your ultimate recipe book, powered by <a className='text-blue-500' href="https://www.themealdb.com/api.php">themealdb</a> api.</p>
          <p>Here you can find your favorite recipes.</p>
        </div>
        <Link to={'/categories'}>
          <button className="rounded-full text-xl text-white font-semibold bg-orange-300 hover:bg-orange-500 transition-colors ease-in-out duration-500 py-4 px-10">
            Browse categories <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default App
