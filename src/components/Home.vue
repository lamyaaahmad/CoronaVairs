<template>
<div class="full bg-light py-3">
<div class="container">
  <div class="row py-3">
   <div class="col-6 py-1 ">
    <div class="container">
    <div class=" row justify-content-start">
    <div class="  first col-6 text-uppercase">corona</div>
    <div class="col-6"> 
        <div class="last row-6 text-danger">COVID-19</div>
        <div class="last row-6">VIRUS</div>
    </div>
    </div>
    </div>
    <div class="text py-3">
    <p>The Cornus (COVID-15) was first reported in Wuhan, hubei ,<br> 
        China in December 2019,the outbreak was later recognized <br>
        as a pandemic by the World Health Organization (WHO) on <br> 
        1 March 2020.</p>
        </div>
       <div class=" row justify-content-start">
       <div class="col-4 w-50"><RouterLink type="button" class="btn btn-primary btn-lg " to='/prev'>How To Protect
        <img class="img3 " src="../assets/imgs/shield-check.png" height="20" ></RouterLink></div>
       <div class="col-4 w-50"><RouterLink type="button" class="btn text-primary btn-lg" to="/about">About COVID-19<img class="img1 " src="../assets/imgs/dd.png" height="20" > </RouterLink></div>
       </div>  
       <div class="py-3"> 
        <table class="table ">
     <thead>
      <tr class="text-secondary">
      <th class="col">WORLDWIDE CASES</th>
      <th class="col">DEATHS</th>
      <th class="col">RECOVER</th>
    </tr>
  </thead>
  <tbody >
    <tr class="tr">
      <td>8,949,671</td>
      <td>467,432</td>
      <td>4,556,091</td>
    </tr>
  </tbody>
</table>
    <p class="text-secondary py-2">* last updated: jun 21 , 2020 , 09:24 AM America/chicago</p>
    </div>
    </div>
   <div class="col-6 py-3 ">
      <div class=" bg-light"><img src="../assets/imgs/header-a.png" class="img" height="490" width="490" ></div>
    </div>
    
  </div>
</div>
</div>
</template>
<style scoped>
.full{
    background-image:url(../assets/imgs/shape-a.png);
}
.first{
    font-weight: bolder;
    font-size:70px;
    color: rgb(38, 38, 95);
}
.last{
    font-weight: bolder;
    font-size:30px;
    color: rgb(45, 45, 110);
    padding-left:25px;
}
.text{
    color: rgb(45, 45, 114);
    font-weight: bold;
}
.btn {
    border-radius:40px;
}
.btn:hover{
  background-color: #62a7d4;
  
}
.tr{
    font-weight: bolder;
    font-size:30px;
}


@media screen and (min-width:1440px){
  .first{
    font-size:80px;
  }
  .last{
    padding-top:10px;
  }
}

@media screen and (max-width:1199px){
  .first{
    font-size:50px;
  }
  .last{
    padding-top:10px;
  }
}

@media screen and (max-width:991px){
  .first{
    font-size:40px;
  }
  .last{
    padding-top:0px;
  }


}



@media screen and (max-width:768px){
.first{
    font-size: 45px;
}
.last{
    font-size:20px;
}
.img{
   width:350px;
}
.tr{
font-size:20px;
}}
@media screen and (max-width:767px){

  .first {
        font-size: 25px}
        .img{
   width:210px;
}


}
@media screen and (max-width:425px) {
.first {
        font-size: 25px}

.last{
  padding-right:20px;
}
.img{
   width:190px;
}}
@media screen and (max-width:371px){
.img{
   width:150px;
}
.first {
    font-size: 20px}
}

@media screen and (max-width:338px){
.img{
  display: none;
}
.col-6{
  width: 100%;
  text-align: center;
}

}


</style>