import { GrTechnology } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
// GrTechnology
const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 pb-1 border-b-red-950 w-fit" : ""
        } to={'/'}><li>Home</li></NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 pb-1 border-b-red-950 w-fit" : ""
        } to={'/addProduct'}><li>Add-Product</li></NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 pb-1 border-b-red-950 w-fit" : ""
        } to={'/myCart'}><li>My Cart</li></NavLink>

    </>
    const logo = <div>
        <div className='flex items-center text-3xl '>
            <h1>Z-Tech</h1>
            <h1 className='text-white'><GrTechnology ></GrTechnology></h1>
        </div>
    </div>
    return (
        <div className='flex justify-between items-center lg:max-w-7xl lg:mx-auto py-4'>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-outline normal-case text-xl">{logo}</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex menu-horizontal px-1 gap-4 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border-b-2 pb-1 border-b-red-950 w-fit" : ""
                    } to={'/login'}><li className='text-cyan-800 list-none btn '>Login</li></NavLink>
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;