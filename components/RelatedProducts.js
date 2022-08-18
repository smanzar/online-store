import SingleRelatedProduct from './SingleRelatedProduct'
import Slider from 'react-slick';
import Head from "next/head";
const RelatedProducts = (props) => {
	var largeImg = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					centerMode: true,
					centerPadding: '30px',
				}
			}
		]
	};
	return(
			<div className='mt-5 related-product-container'>
				<Head>
					<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
					<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				</Head>
				<div className="container">
					<h4>Related Products</h4>
					<div className='row mt-3'>
						<Slider {...largeImg}>
							{
								props.relatedProducts?.map((product) => {
									return (
										<div className="px-md-3 px-2" key={product.id}>
											<SingleRelatedProduct product={product}/>
										</div>
									)
								})
							}
						</Slider>
					</div>
				</div>
			</div>
	)
}

export default RelatedProducts