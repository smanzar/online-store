import React, {useEffect, useState} from 'react'
import Size from "../pages/api/data.json"
import LargeImg from "./LargeImg"
function ProductDescription(props) {
  
  return(
    <div className='container'>
      <div className="row gy-3">
        <div className="col-md-6">
          <LargeImg images={props.productDetail.images}/>
        </div>
        <div className="col-md-6">
          <div className="product-content">
            <h2>{props.productDetail.title}</h2>  
            <p>{props.productDetail.description}</p> 
            <h6 className="card-title mb-3"><small>Price</small> <strong>AED {props.productDetail.price}</strong>	</h6>
            <div className="category d-flex justify-content-between align-items-center">
              <div className='category d-flex'>
                <p className="m-0"><strong>Category</strong></p>  
                <ul className="list-unstyled p-0 mb-0 ms-3">
                  <li>{props.productDetail.category.name}</li>
                </ul>
              </div>
            </div> 
            {
              (props.productDetail.category.name === 'Shoes' || props.productDetail.category.name === 'Clothes') ? 
              <div className='size-guide mt-3'>
                <h6>Size Guide</h6>  
                <div className='table-responsive mt-3'>
                  <table className="table table-striped">
                    <tbody>
                      {
                        Size?.map((val) => {
                          return (
                            <tr key={val.id}>
                              <td><strong>{val.name}</strong></td>
                              {
                                val.sizes.map((size) => {
                                  return (
                                    <td key={size.id}>{size}</td>
                                  )
                                })
                              }
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div> : ''
            }
            <div className="d-grid gap-2 mt-4">
              <button className="btn btn-outline-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription