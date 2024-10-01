import Link from 'next/link';


const Header = () => {
    return ( 
        <>
        <header>
            <nav>
                <Link href="/" title=''>Quiz App</Link>
                <ul>
                    <li><Link href="/tasks" title=''>Tareas</Link></li>
                    <li><Link href="/tasks/3" title=''>Tarea 3</Link></li>
                    <li><Link href="/users" title=''>Users</Link></li>

                    </ul></nav></header></>
     );
}
 
export default Header;