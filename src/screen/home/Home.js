import React from 'react'
import NavBar from '../../components/NavBar';
import BuqueImage from './../../assets/pngwing.com.png';

export default function Home() {
    return (<>
        <NavBar />
        <div >
            <img style={{ height: '150px' }} src={BuqueImage} />
        </div>
    </>
    );
} 