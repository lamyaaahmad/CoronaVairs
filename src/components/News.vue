<template>
   <div class="bg-light">
  <div class="first p-4">
    <div class="text-center">
   <h5 class=" text1 text-primary">RECENT FROM BLOG</h5>
    </div>
   <div class="text-center">
   <h1 class="text2">LATEST UPDATE</h1>
   </div>
  </div>
  
   <div class="second p-2 d-flex justify-content-center align align-items-center">
    <div class="card text-center m-4 border-0" style="width: 18rem;">
  <img src="../assets/imgs/blog-a.jpg" class="card-img-top p-3" >
  <h5>Caring for someone at home</h5>
  <div class="card-body">
    <p class="card-text">Most people who get sick with COVID-19 will have only mild illness and should recover at home: Care at home can help stop the spread of COVID.</p>
  </div>
</div>
<div class="card text-center border-0 shadow bg-body rounded" style="width: 18rem;" id="card2">
  <img src="../assets/imgs/blog-b.jpg" class="card-img-top p-3 ">
  <h5>15 ways to keep safe and healthy</h5>
  <div class="card-body">
    <p class="card-text">Most people who get sick with COVID-19 will have only mild illness and should recover at home Care at home can help stop the spread of COVID-19.</p>
  </div>
</div>
<div class="card text-center m-4 border-0" style="width: 18rem;">
  <img src="../assets/imgs/blog-c.jpg" class="card-img-top p-3" >
  <h5>If You Think You Are Sick</h5>
  <div class="card-body">
    <p class="card-text">If you are sick with COVID-19 or think you might have it, follow the steps below to help protect other people in your home and community.</p>
  </div>
</div>
</div>
</div> 
    
</template>
<style scoped>
.text2{
  color: rgb(25, 57, 126);
}
h5{
  color: rgb(25, 57, 126);
    font-weight: bold;
}
p{
  color: rgb(75, 75, 129);
    font-weight: 500;
}

@media screen and (max-width:693px){
    .second{
       padding:0px !important;
    }
}




@media screen and (max-width:647px){
  .second{
    display: block !important;
   
  }  
  #card2{
   margin:23px;
   
  }
  .card{
    width:100% !important;
    margin: 0px !important;
  }
  .card-img-top{
    padding:5rem !important;
  }



}



</style>