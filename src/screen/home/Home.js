import React from 'react'
import NavBar from '../../components/NavBar';
import BuqueImage from './../../assets/pngwing.com.png';
import "./home.css";

export default function Home() {
    return (<>
        <NavBar />
        <div className="home">
            <img style={{ height: '150px' }} src={BuqueImage} />
        </div>
    </>
    );
} 