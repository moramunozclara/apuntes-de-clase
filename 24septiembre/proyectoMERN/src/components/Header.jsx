import {Link, NavLink} from 'react-router-dom';

const Header = () => {

    // elementos de mi useUSer
    const {user, logout, login, register} = useUser();


    return ( 
        <>
        <p>Soy Header</p>
        <p>Esta es una página pública</p>

        <header className="bg-gray-800 text-white w-full">
            <nav className="p-2 flex items-center justify-between">
                <NavLink to="/">
                    <h1>Mern - Auth</h1>
                </NavLink>


                <ul>

                <NavLink to="/home">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/login">
                    <li>Login</li>
                </NavLink>
                <NavLink to="/registro">
                    <li>Registro</li>
                </NavLink>
                <NavLink to="/admin">
                    <li>Admin</li>
                </NavLink>


                <NavLink to="/admin">
                    <li>Admin</li>
                </NavLink>
                <NavLink onClick={logout}>
                    <li>SALIR</li>
                </NavLink>
                </ul>
            </nav>



        </header>

        
        </>
     );
}
 
export default Header;
