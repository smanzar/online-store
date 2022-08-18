import Link from 'next/link'
import Slider from 'react-slick';
import Head from "next/head";
import Image from 'next/image'

const SingleProduct = (props) => {
	var settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return(
		<div className="card">
			<Head>
				<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			</Head>
			<Slider {...settings} className="product-img-slider">
				{
					props.product.images.map((img, index) => {
						return (
							<div className='product-image' key={index}>
								<img src={img} alt={img}/>
							</div>
						)
					})
				}
				
			</Slider>
			<div className="card-body">
				<h6 className="card-title">{props.product.title}</h6>
				<h6 className="card-title"><small>Price</small> <strong>AED {props.product.price}</strong>	</h6>
				<p className="card-text small">{props.product.description}</p>
			</div>
			<div className="card-footer">
				<div className="text-center">
					<Link href="/product/[id]" as={`/product/${props.product.id}`}>
						<a className="btn btn-outline-primary btn-sm">View Product</a>
					</Link>
				</div>
			</div>
		</div>
		
	)
}
  
export default SingleProduct;