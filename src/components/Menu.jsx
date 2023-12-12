import { NavLink, Link, Outlet } from 'react-router-dom'
import '../style/index.css'

export default function Menu() {

  // const activClass = (({isActive}) => (isActive) ? 'menu__item-active' : 'menu__item') ;
    return (
      <>
      <div className='page'>
        <Link className='menu__item-active' to="/">Главная</Link>
      </div>
        <Outlet/>
        
        <footer>2021</footer>
      </>
      
    )
  }