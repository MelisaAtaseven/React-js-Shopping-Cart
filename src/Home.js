import React from 'react'
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {

    return(
        <>
        <div class="p-3 mb-2 bg-dark text-white">
            <br/>
 <p >Coffee with one click</p>
 <img src="img/cofffee.gif" />


</div>

   <nav class="navbar navbar-expand-lg navbar-light  shadow p-3 mb-5 bg-body rounded">
  <div class="container-fluid">
    <a class=" brand navbar-brand" href="#"><i class="fa-solid fa-mug-hot fa-xl"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class=" link nav-link " aria-current="page" href="#">Coffees</a>
        </li>
        <li class="nav-item">
          <a class=" link nav-link" href="#">Tea</a>
        </li>
       
    
      </ul>
      <i class="brand fa-solid fa-user-plus"></i>&nbsp; &nbsp;&nbsp;
      <i class=" brand fa-solid fa-heart"></i>&nbsp; &nbsp;&nbsp;
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline brand" type="submit"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
      </form>
      <button class=" mycart btn btn-dark rounded-pill" type="submit"> <i class="fa-solid fa-basket-shopping"></i>&nbsp; &nbsp;my cart &nbsp;&nbsp;</button>
    </div>
  </div>
</nav>

 <br/> <h1 className="text-center mt-3 text"> Coffees  &nbsp;
           </h1>
            
            
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