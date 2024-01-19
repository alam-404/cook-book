import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
                <h1 className="bg-black text-3xl text-white p-3 font-semibold"><Link to={'/'}>CookBook 📒</Link></h1>
        </div>
    );
};

export default Header;