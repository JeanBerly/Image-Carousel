import Image from "next/image";
export default function ImgCarousel(props) {
    // VARIABLES PASSED TO THE COMPONENT
    const numImages = props.numImages;
    const selectedImage = props.selectedImage;
    const setSelectedImage = props.setSelectedImage;
    const IMAGES = props.IMAGES;
    // FUNCTIONS THAT ARE USED IN THIS IMG CAROUSEL
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
    // RETURNING THE HTML ELEMENT
    return (
        <>
            <div id='carouselImg'>
                <div id='previousImage'><span onClick={() => {
                    setSelectedImage(previousImage(selectedImage));
                }}>&#60;</span></div>
                <div id='nextImage'><span onClick={() => {
                    setSelectedImage(nextImage(selectedImage));
                }}>&#62;</span></div>
                <Image
                    className='imgDisplayed'
                    src={IMAGES[selectedImage]}
                    layout='fill'
                    sizes='cover'
                    priority
                />
            </div>
        </>
    );
}