import Image from 'next/image';
import React from 'react';
import { Router, useRouter } from 'next/router';
const IMAGES = {
    img1: require('../public/img1.jpg'),
    img2: require('../public/img2.jpg'),
    img3: require('../public/img3.jpg'),
    img4: require('../public/img4.jpg'),
    img5: require('../public/img5.jpg'),
    img6: require('../public/img6.jpg'),
    img7: require('../public/img7.jpg'),
    img8: require('../public/img8.jpg'),
    img9: require('../public/img9.jpg'),
    img10: require('../public/img10.jpg'),
    img11: require('../public/img11.jpg'),
    img12: require('../public/img12.jpg'),
    img13: require('../public/img13.jpg'),
}
const numImages = Object.getOwnPropertyNames(IMAGES).length;
// separates the img and index
function separateString(selectedImg){
    let index = parseInt(selectedImg.split('img')[1]);
    let imgSrc = '';
    if (index < 10) imgSrc = selectedImg.substring(0, (selectedImg.length - 1));
    else imgSrc = selectedImg.substring(0, (selectedImg.length - 2));
    let newString = [imgSrc, index];
    console.log(newString);
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

export default HomePage