import Image from 'next/image';
import React from 'react';
import { Router, useRouter } from 'next/router';
import ImgCarousel from '../public/ImgCarousel';
import NavBar from '../public/NavBar.js';
// Rendering iamges part and functions:
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
function HomePage() {
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
                router={router}>
            </NavBar>
        </>
    )
}

export default HomePage