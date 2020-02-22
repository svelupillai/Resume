import React from 'react';
import '../App.css';
import {Image} from 'react-bootstrap';
import back from '../code.jpg'

function Home(){
    return (
        <div className='JobDescription' id="Home">
            <Image src={back} className='Home'/>
            <div className='title'>
            <h2>Senaga Velupillai</h2>
            <h4>Software Engineer | Web Developer</h4>
            </div>
        </div>
    );
}

export default Home;