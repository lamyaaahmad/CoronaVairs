<template>
<div class="bg-light">
  <div class="first p-4">
    <div class="text-center">
   <h5 class=" text1 text-primary">HOW TO PROTECT YOURSELF?</h5>
    </div>
   <div class="text-center">
   <h1 class="text2">PREVENTION & ADVICE</h1>
   </div>
    <div class="text-center">
   <p>There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19)<span> The best way to<br> prevent illness is to avoid being exposed to this virus</span>. Stay aware of the latest information on<br> The COVID-19 outbreak, available on the WHO website and through your national and local public<br> health authority</p>
    </div>
  </div>
<div class="second p-3 d-flex justify-content-center align align-items-center">
    <div class="card bg-light border-light text-center" >
  <img src="../assets/imgs/advice-a.png" class="img3 card-img-top rounded-circle w-50" >
  <div class="card-body">
    <span>Wash your hands frequently</span>
    <p class="card-text p-2">Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
  </div>
</div>
<div class="card bg-light border-light  text-center" >
  <img src="../assets/imgs/advice-b.png" class="img3 card-img-top rounded-circle w-50" >
  <div class="card-body">
    <span>Maintain social distancing</span>
    <p class="card-text p-2">Maintain at least 1 metre(3 feet)distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.</p>
  </div>
</div>
<div class="card bg-light border-light text-center" >
  <img src="../assets/imgs/advice-c.png" class="img3 card-img-top rounded-circle w-50" >
  <div class="card-body">
    <span>Avoid touching face</span>
    <p class="card-text p-2">Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.</p>
  </div>
</div>
<div class="card bg-light border-light text-center" >
  <img src="../assets/imgs/advice-d.png" class="img3 card-img-top rounded-circle w-50" >
  <div class="card-body">
    <span>Practice respiratory hygiene</span>
    <p class="card-text p-2">Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze</p>
  </div>
</div>
</div>
<div class="third p-5 ">
    <div class="container p-5 justify-content-center">
    <div class="row justify-content-center">
    <div class="col-6 p-5">
        <div class="d-grid gap-2 col-6 mx-auto w-auto">
        <RouterLink  class="btn btn-primary text-start" type="button" to="/wash">Check how wash hands <img class="img1 " src="../assets/imgs/arrow.png" height="25"></RouterLink>
        </div>
    </div>
    <div class="col-6 p-5 ">
        <div class="d-grid gap-2 col-6 mx-auto w-auto">
        <RouterLink class="btn btn-light text-primary text-start" type="button" to="/faq">Q&A and coronavirus <img class="img1 " src="../assets/imgs/dd.png" height="25"></RouterLink>
        </div>
    </div>
  </div>
</div>

</div>


</div>
</template>

<style scoped>
.text1{
    font-weight: bold;

}
.text2{
    font-weight: bolder;
    color: rgb(25, 57, 126);
}
span{
  color: rgb(25, 57, 126);
    font-weight: bold;
}
p{
  color: rgb(75, 75, 129);
    font-weight: 500;
}
.card{
    width:40vh;
    height:40vh;
    margin:15px;
    border-color: rgb(255, 255, 250);
}

.img3{
    margin: 0px 10px 0px 60px;
}
.img1{
    margin: 0px 10px 0px 60px;
}
.btn{
   border-radius:40px;
   font-weight: bolder;
   text-align: left;
}
.btn:hover{
  background-color:#62a7d4;
}
.container{
    max-width:900px;
}







@media screen and (max-width:768px){
 .third{
  margin-top: 20vh;
 }
 .img3{
    margin: 0px 10px 0px 50px;
}
.card{
  margin:0px;
}}
@media screen and (max-width:938px){
  .img1{
    margin: 0px ;
   }

}

@media screen and (max-width:585px){
 .second{
  display: block !important;
 }
.card{
  height:70vh;
  margin-left:170px;
}

.third{
  margin-top: 0vh;
  padding:0px !important;
 }
.container{
    padding: 0rem !important;;
  }
.col-6{
  width: 100%;
}

}
@media screen and (max-width:500px){
    .card{
      margin-left:120px;
    }
  }

 @media screen and (max-width:425px){
    .card{
      margin-left:90px;
    }
  }
  @media screen and (max-width:375px){
    .card{
      margin-left:60px;
    }
    .img1{
    margin: 0px ;
   }
  }

@media screen and (max-width:320px){
  .card{
      margin-left:20px;
  }
  

}

</style>