import React, {useEffect, useState} from 'react'
import axios from 'axios';
import SingleProduct from '../components/SingleProduct'

function Home({ products }) {
  const [loading, setLoading] = useState()
  useEffect(() => {
    setLoading(true)
    if(products) {
      setTimeout(()=>{
        setLoading(false)
      },2000)
    }
  }, [])
  var loadingCompleted = loading ? 'container loading-skeleton' : 'container';  
  return (
    <div className={loadingCompleted}>
      <div className="row gy-3 product-cards">
        {
          products.map((val) => {
            // console.log(val);
            return (
              <div className="col-md-6 col-lg-4 col-xl-3" key={val.id} id={val.id}>
                <SingleProduct product={val}></SingleProduct>
              </div>
            )
          })
          
        }
        
      </div>
    </div>
  )
}
export async function getStaticProps() {
  // Fetch data from external API
  const res = await axios.get(`https://api.escuelajs.co/api/v1/products?limit=100&offset=0`)

  // Pass data to the page via props
  return { props: { products: res.data } }
}
export default Home
