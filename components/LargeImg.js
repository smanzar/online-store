import Slider from 'react-slick';
import Head from "next/head";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const LargeImg = (props) => {
    // console.log(props)
    var largeImg = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
    return(
        <>
            <Head>
				<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			</Head>
            <Slider {...largeImg} className="product-img-slider">
                {
					props.images.map((img, index) => {
						return (
							<Zoom key={index}>
                                <div className='product-image-large'>
								    <img src={img} alt={img}/>
                                </div>
							</Zoom>
						)
					})
				}
				
			</Slider>
            
        </>
    )
}

export default LargeImg