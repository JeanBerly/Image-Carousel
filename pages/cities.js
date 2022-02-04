import Image from 'next/image';
import React from 'react';
import { Router, useRouter } from 'next/router';
const IMAGES = {
    img1: require('../public/cities/cities1.jpg'),
    img2: require('../public/cities/cities2.jpg'),
    img3: require('../public/cities/cities3.jpg'),
    img4: require('../public/cities/cities4.jpg')
}
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
function citiesPage() {
    const [selectedImage, setSelectedImage] = React.useState('img1');
    const router = useRouter();
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
            <p className='brandName'>RandomPhotographer | Photography</p>
            <ul id='listNav'>
                <li className='listItem'><a href="/"  onClick={(event) =>{
                    event.preventDefault();
                    router.push('/');
                }}>&#62;</a></li>
                <li className='listItem'><a href="nature" onClick={(event) =>{
                    event.preventDefault();
                    router.push('nature');
                }}>Nature</a></li>
                <li className='listItem'><a href="cities" onClick={(event) =>{
                    event.preventDefault();
                    router.push('cities');
                }}>Cities</a></li>
                <li className='listItem'><a href="houses" onClick={(event) =>{
                    event.preventDefault();
                    router.push('houses');
                }}>Houses</a></li>
                <li className='listItem'><a href="technology" onClick={(event) =>{
                    event.preventDefault();
                    router.push('technology');
                }}>Technology</a></li>
            </ul>
        </nav>
        </>
    )
}

export default citiesPage