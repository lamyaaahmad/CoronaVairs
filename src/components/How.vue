<template>
    <div class="bg-light">
   <div class="first p-4">
    <div class="text-center">
   <h5 class=" text1 text-primary">HOW CORONAVIRUS IS SPREAD</h5>
    </div>
   <div class="text-center">
   <h1 class="text2">TRANSMISSION OF COVID-19</h1>
   </div>
    <div class="text-center">
   <p>Because it's a new illness, we do not know exactly how coronavirus spreads<br> from person to person. Similar viruses are spread in cough droplets</p>
    </div>
    </div>
   <div class="second p-2 d-flex justify-content-center">
    <div class="card text-start m-2" style="width: 18rem;">
  <img src="../assets/imgs/spread-a.png" class="card-img-top border-bottom border-4 border-primary" >
  <div class="card-body">
    <h5 class="card-title text-primary">Person-to-person spread as close contact with infected</h5>
    <p class="card-text">The coronavirus is thought to spread manly from person to person. This can happen between people who are in close contact with one another</p>
   
  </div>
</div>
<div class="card text-start m-2" style="width: 18rem;">
  <img src="../assets/imgs/spread-b.png" class="card-img-top border-bottom border-4 border-primary" >
  <div class="card-body">
    <h5 class="card-title text-primary">Touching or contact with infected surfaces or objects</h5>
    <p class="card-text">A person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes</p>
   
  </div>
</div>
<div class="card text-start m-2 " style="width: 18rem;">
  <img src="../assets/imgs/spread-c.png" class="card-img-top border-bottom border-4 border-primary" >
  <div class="card-body">
    <h5 class="card-title text-primary">Droplets that from infected person coughs or sneezes</h5>
    <p class="card-text">The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another</p>
   
  </div>
</div>
</div>
    <div class="third p-5">
        <div class="d-grid gap-2 col-3 mx-auto">
  <button class="btn btn-primary rounded-pill " type="button"><img src="../assets/imgs/map-marker-question.png" class="img3"> Have question about spreading</button>
  
</div>
</div>
</div>
</template>
<style scoped>
.text1{
    font-weight: bold;
}
.btn:hover{
  background-color:#62a7d4;
}


.text2{
    color: rgb(25, 25, 83);
    font-weight: bolder;
}

p{
    color: rgb(75, 75, 129);
    font-weight: 500;
}

.img3{
    width:20px;
}
.btn{
    font-weight: bold;
}
@media screen and (max-width:1024px){
    .col-3{
        width:40%;
    }
}
@media screen and (max-width:768px){
    .col-3{
        width:50% !important;
    }
}
@media screen and (max-width:425px){
    .col-3{
        width:70% !important;
    }
    .second{
        display: block !important;
       }
    .card{
        margin-left:11vh !important;
    }
}
@media screen and (max-width:375px){
    .card{
        margin-left:6vh !important;
    }
}
@media screen and (max-width:350px){
 .card{
    margin-left:4vh !important;
 }

}
@media screen and (max-width:336px){
 .card{
    margin-left:2vh !important;
 }

}

@media screen and (max-width:320px){
    .col-3{
        width:100% !important;
    }
    
}

</style>