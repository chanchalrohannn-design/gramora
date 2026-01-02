import React from "react";
import { useParams } from "react-router-dom";
import image from './images/image.png'
import productList from './Home'

function DetailPage() {

    const{id}=useParams();
     const productlist=[
        {
          id:1,
        productImage:"https://w7.pngwing.com/pngs/534/602/png-transparent-pattu-saree-thumbnail.png",
       productTitel: "designer Saree",
      productPrice:"Rs 999"
        },

        {
          id:2,
        
        productImage:"https://cdn.shopify.com/s/files/1/0815/1839/5678/files/HALDI-01-FRONT.jpg?v=1696252725",
        productTitel:"mdh haldi",
        productPrice:"Rs 100"
        },
        {
          id:3,

        productImage:"https://cdn.shopify.com/s/files/1/0815/1839/5678/files/HALDI-01-FRONT.jpg?v=1696252725",
  
        productTitel:"mdh haldi",
        productPrice:"Rs 100" 
        },
        {
          id:4,
        productImage:"https://cdn.shopify.com/s/files/1/0815/1839/5678/files/HALDI-01-FRONT.jpg?v=1696252725",
        productTitel:"mdh haldi",
        productPrice:"Rs 100"
        },
        {
          id:5,
       productImage:"https://cdn.shopify.com/s/files/1/0815/1839/5678/files/HALDI-01-FRONT.jpg?v=1696252725",
       productTitel:"mdh haldi",
       productPrice:"Rs 100"

        }
     ]     
          

    const product=productlist.find(item=> item.id===Number(id));



    
    return(

        <div>
            
            <img src={product.productImage} width={200}/>
            <h1>Detail Page{id}</h1>
            <h1>{product.productTitel}</h1>
        </div>
    )
}

export default DetailPage