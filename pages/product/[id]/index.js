import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import ProductDescription from '../../../components/ProductDescription'
import RelatedProducts from '../../../components/RelatedProducts'

const product = ({productDetail, relatedProducts}) => {
    const router = useRouter();
    const {id} = router.query;
    // const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //     setLoading(true)
    //     if(productDetail || relatedProducts) {
    //     setTimeout(()=>{
    //         setLoading(false)
    //     },2500)
    //     }
    // }, [])
    // var loadingCompleted = loading ? 'container loading-skeleton' : 'container';
    return (
       <div className='container'>
        <ProductDescription productDetail={productDetail}/>
        <RelatedProducts relatedProducts={relatedProducts}/>
       </div>
    ); 
}
export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${context.params.id}`)
    const productDetail = res.data
    let relatedRes = '';
    if (productDetail) {
        relatedRes = await axios.get(`https://api.escuelajs.co/api/v1/categories/${productDetail.category.id}/products?limit=10&offset=0`)
    } else {
        router.push('/')
    }
    const relatedProducts = relatedRes.data
    // Pass data to the page via props
    return { props: { productDetail, relatedProducts } }
}


export default product