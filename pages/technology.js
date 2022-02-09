import Image from 'next/image';
import React from 'react';
import { Router, useRouter } from 'next/router';
import ImgCarousel from '../public/ImgCarousel';
import NavBar from '../public/NavBar.js';
const IMAGES = {
    img1: require('../public/technology1.jpg'),
    img2: require('../public/technology2.jpg'),
    img3: require('../public/technology3.jpg'),
}
const numImages = Object.getOwnPropertyNames(IMAGES).length;
function technologyPage() {
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

export default technologyPage