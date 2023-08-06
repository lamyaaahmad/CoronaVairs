

<template>
    <div class="full bg-light">
<div class="container py-5 mb-2">
  <div class="row justify-content-evenly">
    <div class="col-6">
     <h5 class="first text-primary">ABOUT THE DISEASE</h5>
     <h3 class="second" >CORONAVIRUS(COVID-19)</h3>
     
      <p class="three"><span>COVID-19 is a new illness that can affect your lungs<br>and airways</span>. It's caused by a virus called coronavirus. It <br>
         was discovered in December 2019 in Wuhan, Hubei, <br>China<br><br>

Common signs of infection include respiratory symptoms,<br> fever cough, shortness of breath and breathing difficulties. <br>In more  severe cases infection can cause pneumonia, severe <br> acute respiratory syndrome, kidney failure and even death<br><br><br>

Standard recommendations to prevent infection spread include <br>regular hand washing, covering mouth and nose when coughing<br>  and sneezing thoroughly cooking meat and eggs. Avoid close <br>contact with anyone showing symptoms of respiratory illness<br> such as coughing and sneezing
</p>
</div>
<div class="col-4 py-3">
  <table class="table table-bordered border-light shadow-lg p-3 mb-5 bg-body rounded table-hover rounded" >
  <tbody>
    <tr>
      <th scope= "row"><h6>What you need to know</h6></th>
     </tr>
     <tr>
      <th scope="row"><RouterLink class="text-primary p-1" to="/how">How Coronavirus is spread <img class="img1 " src="../assets/imgs/dd.png" height="25"></RouterLink></th>
     </tr>
     <tr>
      <th scope="row"><RouterLink class="text-primary p-1" to="/sym">Symptoms of Coronavirus   <img class="img2 " src="../assets/imgs/dd.png" height="25"></RouterLink></th>
     </tr>
     <tr>
      <th scope="row"><RouterLink class="text-primary p-1 " to="/pro">How to protect Yourself <img class="img3  " src="../assets/imgs/dd.png" height="25"></RouterLink></th>
     </tr>
     <tr>
      <th scope="row"><RouterLink class="text-primary p-1 " to="/treat">Treatment for Coronavirus <img class="img1 " src="../assets/imgs/dd.png" height="25" ></RouterLink></th>
     </tr>
     <tr>
      <th scope="row"><RouterLink class="text-primary p-1 " to="/do">Myth-Busters of coronavirus <img class="img5 " src="../assets/imgs/dd.png" height="25" ></RouterLink></th>
     </tr>
     <tr>
      <th scope="row"><RouterLink class="text-primary p-1" to="/faq">Question & answers  <img class="img6 " src="../assets/imgs/dd.png" height="25" ></RouterLink></th>
     </tr>
  </tbody>
</table>
    </div>
  </div>
</div>
</div>
</template>
<style scoped>
.second{
    font-weight: bolder;
    color: rgb(25, 57, 126);
    margin:9px 0px 15px 0;

}
span{
    font-weight: bolder;
    color: rgb(25, 57, 126);
}
.three{
    color:rgb(103, 103, 136);
    font-weight: bold;
}
a{
  display: block;
   text-decoration:none;
   font-size: 20px;
   margin-left:9px;
   
}
h6{
  margin-left:9px;
  font-weight: bold;
  font-size: 25px;
  color: rgb(25, 57, 126);
}
.img1{
  margin-left:30px;
}
.img2{
  margin-left:38px;
}

.img3{
  margin-left:55px;
}

.img5{
margin-left:10px;
}
.img6{
margin-left:88px;
}
@media screen and (max-width:1199px) {

.col-6{
  width:100%;
  text-align: center;
}
.col-4{
  width: 100%;
  text-align: center;
}}
@media screen and (max-width:371px){
  a[data-v-161b4f7e] {
    font-size: 15px;
    margin-left: 0px;
}
}


</style>