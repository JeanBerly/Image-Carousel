import Image from 'next/image';
import React from 'react';
import { Router, useRouter } from 'next/router';
import ImgCarousel from '../public/ImgCarousel';
import NavBar from '../public/NavBar.js';
const IMAGES = {
    img1: require('../public/nature1.jpg'),
    img2: require('../public/nature2.jpg'),
    img3: require('../public/nature3.jpg'),
}
const numImages = Object.getOwnPropertyNames(IMAGES).length;
// separates the img and index
function separateString(selectedImg) {
    let index = parseInt(selectedImg.split('img')[1]);
    let imgSrc = '';
    if (index < 10) imgSrc = selectedImg.substring(0, (selectedImg.length - 1));
    else imgSrc = selectedImg.substring(0, (selectedImg.length - 2));
    let newString = [imgSrc, index];
    console.log(newString);
    return newString;
}
function nextImage(selectedImg) {
    let [imgSrc, index] = separateString(selectedImg);
    if (index === numImages) index = 1;
    else index += 1;
    let newImg = imgSrc + index;
    return newImg;
}
function previousImage(selectedImg) {
    let [imgSrc, index] = separateString(selectedImg);
    if (index === 1) index = numImages;
    else index -= 1;
    let newImg = imgSrc + index;
    return newImg;
}
console.log(previousImage);
function naturePage() {
    const [selectedImage, setSelectedImage] = React.useState('img1');
    const router = useRouter();
    return (
        <>
            <ImgCarousel
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                IMAGES={IMAGES}
                numImages={numImages}>
            </ImgCarousel>
            <NavBar
                router={router}
            ></NavBar>
        </>
    )
}
export default naturePage