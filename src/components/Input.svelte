<script>
    export let value = ""
    export let error = ""
    export let placeholder = ""
</script>

<div>
    {#if error}
        <p class="error-message">{ error }</p>
    {/if}
    
    <input type="text"  class:error={ error } bind:value placeholder={ placeholder } />
</div>
      


<style>
    div{
        position: relative;
        width: 65%;
        margin: 0 auto;
    }
    input {
    width: 100%;
    height: 51px;
    background-color: black;
    border: 1px solid white;
    outline: none;
    color: white;
    padding: 8px 15px;
    border-radius: 3px;
    margin: 15px 0;
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    position: relative;
  }

  input::placeholder {
    color: white;
  }

  .error {
    border: 1px solid red;
  }

  .error-message {
    color: red;
    font-size: 12px;
    position: absolute;
    top: -5px;
  }
</style>