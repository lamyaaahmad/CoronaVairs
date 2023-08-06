<template>
    <div class="full"> 
    <div class="container">
     <div class="row p-5">
    <h1>C<img src="../assets/imgs/coronavirus.png" class="img " width="40" height="30">VID<span>19</span></h1>
    <p>This website is for health information and advice about coronavirus (COVID-19), how to prevent and protect<br>yourself from disease</p>
    <p>Learn about the government response to coronavirus on <a href="https://www.gov.uk/"> GOV.UK</a></p>
    <div class="row w-100 ">
        <a class="col-3 btn btn-primary  bottom1 rounded-0 border-0" type="button" href="https://ar-ar.facebook.com/"><h6>Find Us on Facebook</h6></a>
        <a class="col-3 btn btn-primary bottom2 rounded-0  border-0" type="button" href="https://twitter.com/login?lang=ar"><h6>Find Us on Twitter</h6></a>
        <a class="col-3 btn btn-primary bottom3 rounded-0 border-0" type="button" href="https://www.instagram.com/"><h6>Find Us on Instagram</h6></a>
       </div>
      </div>
      <div class="row w-75 ">
        <div class="col-3 ro2 ro">
            <div class="row"><h5 class="text-light">QUICK LINK</h5></div>
           <div class="row "> <RouterLink to="/about" class="ro1">About Corona</RouterLink></div>
           <div class="row "><RouterLink to="/sym" class="ro1">Symptoms</RouterLink></div>
            <div class="row "> <RouterLink to="/prev"  class="ro1">Prevention</RouterLink></div>
            <div class="row "> <RouterLink to="/pro" class="ro1">Protect yourself</RouterLink></div>
            <div class="row "><RouterLink to="/faq" class="ro1">FAQs</RouterLink></div>
        </div>
        <div class="col-5  ro"> 
            <div class="row"><h5 class="text-light">HELPFULL LINK</h5></div>
           <div class="row "> <a href="https://www.who.int/teams/health-workforce/health-professions-networks" class="ro1">Healthcare Professionals</a></div>
           <div class="row "><a href="https://www.medxjordan.com/en" class="ro1">Healthcare Facilities</a></div>
            <div class="row "> <a href="https://scholar.google.com.eg/scholar?q=Older+Adults+Medical+Conditions&hl=ar&as_sdt=0&as_vis=1&oi=scholart"  class="ro1">Older Adults&Medical Conditions</a></div>
            <div class="row "> <a href="https://opwdd.ny.gov/coronavirus-guidance/protect-yourself-and-your-family-coronavirus-covid-19" class="ro1">Repair Your Family</a></div>
            
        </div>
        <div class="col-3  ro">
        <div class="row"><h5 class="text-light">IMPORTANT LINK</h5></div>
           <div class="row "> <a href="https://www.who.int/" class="ro1">Who Website</a></div>
           <div class="row "><a href="https://www.cdc.gov/" class="ro1">CDC Website</a></div>
            <div class="row "> <a href="https://www.nhs.uk/"  class="ro1">NHS Website</a></div>
            <div class="row "> <a href="https://www.harvard.edu/" class="ro1">Harvard Health</a></div>
        </div> 
      </div>
      
      <div class="p-5">
      <div class="row border-top border-0  ro3" >
        <div class="col-10"><p>©2001 COVID-19 Template Made by <span class="text-light">Amany Abdelfattah</span> Thanks To-Mina Karam Ghopital</p></div>
        <div class="col-2"><p>Privacy Policy</p></div>
        
        <p>Disclaimer: We hope you find the information presented on this website useful. This website is for general information and raise awareness of (2019-nGoV) rely. All the information based on WHO, NHS and CDC website Information on our website is meant for awareness. If you have any doubt please verify from respective site</p>
         

      </div>
    </div>
</div>



    </div>
</template>
<style scoped>
.full{
    background-color: rgb(23, 23, 92);
    background-image:url(../assets/imgs/shape-a.png);
}

.img{
    vertical-align: baseline;
   
   
  }
h1{
    color:white;
}

span{
    color:rgb(35, 35, 131);
}
 p{
    font-weight: bold;
    color: rgb(129 137 155);
 }

a{
    text-decoration: none;
}
.bottom1{
  margin-left:10px;
  background-color: rgb(41, 68, 128);
}
.bottom2{
    margin-left:15px;
    
}
.bottom3{
    margin-left:15px;
    background-color: rgb(206, 73, 73);
}

.btn:hover{
    background-color: rgb(121, 140, 141);
}
h5{
    font-weight: bolder;
}
.ro1{
    font-weight: bold;
    color:rgb(129 137 155) ;
}
.ro2{
    margin-left:45px;
}
.ro1:hover{
    color: black;
}

p{
    margin-top:30px;
} 
@media screen and (max-width:991px){
.w-75{
    width:auto !important;
}
}
@media (min-width:426px) and (max-width:768px){
.w-75{
    width:auto !important;
}
.ro2[data-v-d1ee5111] {
    margin-left: 0px;
}}

@media (min-width:321px) and (max-width:425px){
.w-75{
    width:auto !important;
} 
.ro2[data-v-d1ee5111] {
    margin-left: 0px;
}
.rounded-0{
    width: 50%;
}
.bottom1{
  margin-left:13px;
  
}
.btn{
    margin-top:10px;
}
.img[data-v-d1ee5111] {
    vertical-align:middle;
}


}


@media screen and (max-width:375px){

.rounded-0{
    width: 50%;
}
.bottom1{
  margin-left:13px;
  
}
.btn{
    margin-top:10px;
}

.w-75{
   display: block !important;
}

.ro{
    width:100% !important;
    margin-top: 10px;
}

}

@media screen and (max-width:320px){

.rounded-0{
    width: 50%;
}
.bottom1{
  margin-left:13px;
  
}
.btn{
    margin-top:10px;
}

.w-75{
   display: block !important;
}

.ro{
    width:100% !important;
    margin-top: 10px;
}

}



</style>