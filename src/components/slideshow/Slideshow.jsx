import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assests/slideimg1.jpg'
import img2 from '../../assests/slideimg2.jpg'
import img3 from '../../assests/slideimg3.jpg'
import img4 from '../../assests/slideimg4.jpg'
import img5 from '../../assests/slideimg5.jpg'
import img6 from '../../assests/slideimg6.jpg'
import img7 from '../../assests/slideimg7.jpg'
import img8 from '../../assests/slideimg8.jpg'
import img9 from '../../assests/slideimg9.jpg'
import img2dentist from '../../assests/about-dentist-img.jpg'


const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img2dentist,
    ];

    return (
        // <section id='services'>
        //     <h5>What I do</h5>
        //     <h2>Portfolio</h2>
        //     <div style={{ width: "40%", margin: "0 auto" }}>
        //         <Slider {...settings}>
        //             {images.map((image, index) => (
        //                 <div key={index}>
        //                     <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%", borderRadius: "100px" }} />
        //                 </div>
        //             ))}
        //         </Slider>
        //     </div>
        // </section>
        <section id='portfolio' style={{ padding: "4rem 0" }}>
            <h5>What we do.</h5>
    <h2 style={{ textAlign: "center",  marginBottom: "2rem" }}>Gallery</h2>
    <div
        style={{
            width: "80%",
            margin: "0 auto",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "45px",
            // background: "#ffffff",
            overflow: "hidden",
        }}
    >
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{
                            width: "100%",
                            height: "50rem", // Fixed height for consistency
                            objectFit: "cover",
                        }}
                    />
                </div>
            ))}
        </Slider>
    </div>
</section>

    );
};

export default Slideshow;
