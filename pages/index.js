import Image from 'next/image';
import image1 from '../public/img1.jpg'
import IMAGES from './images.js';
import React from 'react';
const numImages = Object.getOwnPropertyNames(IMAGES).length;
// separates the img and index
function separateString(selectedImg){
    let imgSrc = selectedImg.substring(0, (selectedImg.length - 1));
    let index = parseInt(selectedImg.substring((selectedImg.length - 1)));
    let newString = [imgSrc, index];
    return newString;
}
function nextImage(selectedImg){
    let [imgSrc, index] = separateString(selectedImg);
    if (index === numImages) index = 1;
    else index += 1;
    let newImg = imgSrc + index;
    return newImg;
}
function previousImage(selectedImg){
    let [imgSrc, index] = separateString(selectedImg);
    if (index === 1) index = numImages;
    else index -= 1;
    let newImg = imgSrc + index;
    return newImg;
}
function HomePage() {
    const [selectedImage, setSelectedImage] = React.useState('img1');
    return (
        <>
        <div id='carouselImg'>
            <div id='previousImage'><span onClick={() =>{
                setSelectedImage(previousImage(selectedImage));
            }}>&#60;</span></div>
            <div id='nextImage'><span onClick={() =>{
                setSelectedImage(nextImage(selectedImage));
            }}>&#62;</span></div>
            <Image
                className='imgDisplayed'
                src={IMAGES[selectedImage]}
                alt="Picture of a tree"
                layout='fill'
                sizes='cover'
                priority
            />
        </div>
        <nav id='mainNav'>
            <p className='brandName'>James Tye | Photography</p>
            <ul id='listNav'>
                <li className='listItem'><a href="#">&#62;</a></li>
                <li className='listItem'><a href="#">Nature</a></li>
                <li className='listItem'><a href="#">Cities</a></li>
                <li className='listItem'><a href="#">Houses</a></li>
                <li className='listItem'><a href="#">Technology</a></li>
            </ul>
        </nav>
        </>
    )
}

export default HomePage