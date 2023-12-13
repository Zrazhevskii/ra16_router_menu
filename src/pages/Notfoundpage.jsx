import React from 'react';
import { Link } from 'react-router-dom';

export default function Notfoundpage() {
    // const navigate = useNavigate()

    // const HandleGoBack = () => {navigate()}
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
