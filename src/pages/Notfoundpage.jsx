import { Link } from 'react-router-dom';

export default function Notfoundpage() {
    return (
        <div className='wrapper-error-pages'>
            <div className='error-pages'>
                К сожалению, такой страницы не существует
            </div>
            <div className='wrapper-btn'>
                <Link className='btn' to='/'>
                    На главную
                </Link>
            </div>
        </div>
    );
}
