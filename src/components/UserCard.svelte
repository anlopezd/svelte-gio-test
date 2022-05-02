<script>
  import { fade } from 'svelte/transition';
  export let name, email, image, id;
  let longName = false;
  if(name.includes("...")){
    //If the name was truncated, we change the font-size to make it more readable
    longName = true;
  }
  
</script>

<div class="card" transition:fade>
  <!-- If we have a error with the image link, we will use the error image --> 
  <img src={ image } alt={ id } onerror="this.src='https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg'" />
  <h3 class:long={ longName } >{ name }</h3>
  <p>{ email }</p>
</div>

<style>
  .card {
    width: 275px;
    height: 250px;
    margin: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #00000040;
    overflow: hidden;
    text-align: center;
  }

  .long {
    font-size: 23px;
  }

img {
    object-fit: cover;
    width: 100%;
    height: 140px;
  }

h3 {
    font-size: 28px;
    line-height: 34px;
    font-weight: 500;
    margin-top: 13px;
    word-wrap: break-word;
    width: 100%
  }

 p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    font-family: "Titillium Web", sans-serif;
    word-wrap: break-word;
  }
</style>
