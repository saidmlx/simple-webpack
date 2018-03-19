import Product from './product'
import React, { Component } from 'react';
class Products extends Component{
  render(){
      return(
          <ul className="Products">
          {this.props.data.products.map((productData)=>{
            return <Product {...productData} />
          })
          }
          </ul>
      )
  }
}

export default Products;