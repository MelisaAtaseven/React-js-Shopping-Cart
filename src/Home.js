import React from 'react'
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class=" brand navbar-brand fs-4" href="#" >ReactShop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class=" link nav-link  fs-6 " aria-current="page" href="#">All Items</a>

 
      </div>
    </div>
  </div>
</nav>

<img src="./img/banner.png" class=" img-fluid "></img>
            <h1 className="text-center mt-3"> All Items   &nbsp;
            <i className="fa fa-shopping-basket"></i></h1>
            
            
<section className="py-4 container ">
<div className="row justify-content-center">
{data.productData.map((item,index) => {
return(
<Itemcard 
img={item.img} 
title={item.title} 
desc={item.desc} 
price={item.price} 
item={item} 
key={index} />
)
} )}


</div>
</section>



        </>
        );
};

export default Home;