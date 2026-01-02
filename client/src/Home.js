import React, { useEffect, useState } from 'react'

import './css/Home.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Home() {

  const navi=useNavigate();
  const[data,setData]=useState([]);

  async function getData(){

    const response= await axios.get("")
    setData(response.data);
    console.log(response.data);

  }
  useEffect(()=>{
    getData();

  },[])


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
        
      function goToDetailPage(id){
        navi(`/detail/${id}`)

      }
          
      return(
        <div className='productContainer'>
          {
            productlist.map((product)=>(
              
              <div  className='productcard' onClick={()=>goToDetailPage(product.id)} key={product.id}> 
                <img src={product.productImage} className="image"/>
                <h1>{product.productTitel}</h1>
                <h3>{product.productPrice}</h3>

                </div>


            ))
          }

        </div>
      )
    }








      

        
  
    
        
    


export default Home