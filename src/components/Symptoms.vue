<template>
<div class="bg-light">
  <div class="first p-4">
    <div class="text-center">
   <h5 class=" text1 text-primary">WHAT ARE THE SYMPTOMS OF COVID-19?</h5>
    </div>
   <div class="text-center">
   <h1 class="text2">SYMPTOMS OF CORONAVIRUS </h1>
   </div><br>
    <div class="text-center">
   <p>The most common symptoms of COVID-19 are fever, tiredness and dry cough Some<br> patients may have aches and pains, nasal congestion, runny nose, sore throat or <br>diarrhea. These symptoms are usually mild and begin gradually Also the symptoms may <br>appear 2-14 days after exposure.</p>
    </div>
  </div>
  <div class="second d-flex justify-content-center align align-items-center">
    <div class="card shadow bg-body rounded"> 
  <img src="../assets/imgs/symptom-a.png" class="img card-img-top rounded-circle w-25 shadow ">
  <div class="card-body"><br>
    <h5 class="card-title text-primary">Fever</h5>
    <p class="card-text"><span>High Fever</span>-this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days it you affected</p>
    
  </div>
    </div>
    <div class="card shadow bg-body rounded"> 
  <img src="../assets/imgs/symptom-b.png" class="img card-img-top rounded-circle w-25 shadow">
  <div class="card-body"><br>
    <h5 class="card-title text-primary">Cough</h5>
    <p class="card-text"><span>Continuous cough</span>- this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual)</p>
    
   </div>
    </div>
    <div class="card shadow bg-body rounded"> 
  <img src="../assets/imgs/symptom-c.png" class="img card-img-top rounded-circle w-25 shadow">
  <div class="card-body"><br>
    <h5 class="card-title text-primary">Shortness of breath</h5>
    <p class="card-text"><span>Difficulty breathing</span>-Around 1 out of every 6 people who gets COVID 19 becomes seriously it and develops difficulty breathing or shortness of breath</p>
    
    </div>
    </div>
</div>


<div  class="third">
    <div class="container">
    <div class="row justify-content-center">
    <img src="../assets/imgs/megaphone.png" class="img2">
    <div class="col-6">
    <p><span class="text-primary">at home and call your doctor</span>: # you think you have been exposed to COVID-19 and develop a fever and any symptoms such as cough or difficulty breathing, call your healthcare provider as soon as possible for medical advice</p>
    </div>
    <div class="col-4">

        <RouterLink type="button" class="btn btn-primary btn-lg rounded-pill" to="/faq"><img src="../assets/imgs/map-marker-question.png" class="img3">Have question?Find answer  </RouterLink>
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
p{

    color: rgb(75, 75, 129);
    font-weight: 500;
}
span{
    font-weight: bolder;
    color: rgb(25, 57, 126);
}

.card{
    width:45vh;
    height:40vh;
    margin:15px;
    border-color: rgb(255, 255, 250);
}
.img{
    position: absolute;
    bottom:230px;
    right:0;
}
span{
    color: rgb(25, 25, 83);
    font-weight: bolder;
}
.third{
    padding-top:15vh;
    padding-bottom:10vh;
}
.img2{
    width:100px;
    height:40px;
    
}
button{
    margin-top:20px;
}
.btn:hover{
    background-color: #62a7d4;

}
.img3{
    width:25px;
}


@media screen and (max-width:1270px){
.img{
    bottom: 270px;
}
}

@media screen and (max-width:890px){
.img{
    width:40% !important;
    bottom:260px;
}
}

@media screen and (max-width:768px){
.img{
    bottom:260px;
}
}

@media screen and (max-width:723px){
.second{
    display: block !important;

}
.card{
   width:100%;
}
.img{
    width:20% !important;
    bottom:230px;

}


}

</style>