<template>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light " >
  <div class="container">
    
    <RouterLink class="navbar-brand ms-5 " to="/"><h2>C<img src="../assets/imgs/TitleIcon.png" class="img" width="25" height="20">VID19</h2></RouterLink>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-around "  id="navbarNav">
      <ul class="navbar-nav">
      
        <li class="nav-item">
          <RouterLink class="nav-link  nav1" aria-current="page" to="/"><h6>Home</h6></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link nav1" aria-current="page" to="/about"><h6>About Corona</h6></RouterLink>
        </li><li class="nav-item">
          <RouterLink class="nav-link  nav1" aria-current="page" to="/sym"><h6>Symptoms</h6></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link  nav1" aria-current="page" to="/prev"><h6>Prevention</h6></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link nav1" aria-current="page" to="/treat"><h6>Treatment</h6></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link nav1" aria-current="page" to="/faq"><h6>FAQ</h6></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link nav1" aria-current="page" to="/news"><h6>News</h6></RouterLink>
        </li>
        <RouterLink type="button" class="btn btn-primary " to="/do">Do&Don't</RouterLink>
        
      </ul>
    </div>
  </div>
</nav>

</template>
<style scoped>
 
.navbar-brand{
  font-weight:bolder;
  color: rgb(26, 24, 121);
}
.img{
    vertical-align: baseline;
  
  }
.btn{
  border-radius:25px;
 
}
.nav1{
  color: rgb(26, 24, 121);
}

.nav1:hover{
  color: rgb(36, 67, 153);
}
h6{
  font-weight: bolder;
}
</style>