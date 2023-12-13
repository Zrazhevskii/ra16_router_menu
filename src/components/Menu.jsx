import { NavLink, Outlet } from 'react-router-dom';

export default function Menu() {
    const activClass = ({ isActive }) =>
        isActive ? 'menu__item menu__item-active' : 'menu__item';
    return (
        <>
            <div className='page'>
                <nav className='menu'>
                    <NavLink className={activClass} to='/'>
                        Главная
                    </NavLink>
                    <NavLink className={activClass} to='/drift'>
                        Дрифт-такси
                    </NavLink>
                    <NavLink className={activClass} to='/timeattack'>
                        Time Attack
                    </NavLink>
                    <NavLink className={activClass} to={'/forza'}>
                        Forza Karting
                    </NavLink>
                </nav>
            </div>
            <Outlet />

            <footer>2021</footer>
        </>
    );
}
