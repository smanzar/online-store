import Link from 'next/link'
const SingleRelatedProduct = (props) => {
	return(
		<div className='single-related-product'>
			<Link href="/product/[id]" as={`/product/${props.product.id}`}>
				<a className='text-decoration-none'>
					<img src={props.product.images[0]} alt={props.product.images[0]} className="img-fluid"/>
					<h6 className='text-center mt-2'>{props.product.title}</h6>	
				</a>
			</Link>
		</div>
	)
}

export default SingleRelatedProduct