<template>

<div class="dis bg-light m-4">
<div class=" p-5">
  <div class="text-center">
   <h2 class="text2">Follow steps to wash hands</h2>
   </div>
   <div class="text-center">
   <h5 class=" text1 text-primary">Why do I need to wash hand<img class="img1 ms-1" src="../assets/imgs/dd.png" height="25"></h5>
    </div>
   
  </div>
<div class="four p-3 d-flex ">
    <div class="card bg-light border-light text-center ">
      <img src="../assets/imgs/hand-a.png" class="img2 card-img-top rounded-circle w-75 " >
  <div class="card-body">
    <span>Soap on<br> Hand</span>
    
  </div>
</div>

<div class="card bg-light border-light  text-center" >
  <img src="../assets/imgs/hand-b.png" class="img2 card-img-top rounded-circle w-75" >
  <div class="card-body">
    <span>Plam on<br> Plam</span>
    
  </div>
</div>
<div class="card bg-light border-light text-center" >
  <img src="../assets/imgs/hand-c.png" class="img2 card-img-top rounded-circle w-75" >
  <div class="card-body">
    <span>Between<br>Finger</span>
    
  </div>
</div>
<div class="card bg-light border-light text-center" >
  <img src="../assets/imgs/hand-d.png" class="img2 card-img-top rounded-circle w-75" >
  <div class="card-body">
    <span>Back to <br>Hands</span>
    
  </div>
</div>
<div class="card bg-light border-light text-center" >
  <img src="../assets/imgs/hand-e.png" class="img2  card-img-top rounded-circle w-75" >
  <div class="card-body">
    <span>Clean with<br> Water</span>
    
  </div>
</div>
<div class="card bg-light border-light text-center" >
  <img src="../assets/imgs/hand-f.png" class="img2  card-img-top rounded-circle w-75" >
  <div class="card-body">
    <span>Focus on<br> Wrist</span>
   
  </div>
</div>
</div>
</div>

</template>
<style scoped>
.img2{
  margin:0px 15px;
}

.card{
    width:40vh;
    height:40vh;
    margin:15px;
    border-color: rgb(255, 255, 250);
}
.text1{
    font-weight: bold;

}
.text2{
    font-weight: bolder;
    color: rgb(25, 25, 83);
}
span{
    color:rgb(25, 25, 83) ;
    font-weight: bold;
}
@media screen and (max-width:425px){

.card{
 
  margin-left:70px;
}


.four{
  display: block !important;
  
}
}
@media screen and (max-width:375px){
  .card{
    margin-left:40px;
  }

}
@media screen and (max-width:320px){
  .card{
    margin-left:20px;
  }
  
}

</style>