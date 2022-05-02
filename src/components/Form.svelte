<script>
  import { addDoc, collection } from "firebase/firestore";
  import Input from "./Input.svelte"
  import { db } from "../firebaseConfig";
  import validator from "validator"

  let name = "";
  let email = "";
  let image = "";
  let sending = false;
  let hasError = false;
  let errors = {
    name: "",
    email: "",
    image: "",
  };

  const handleSubmit = async () => {
    try {
      if (name.trim().length < 5) {
        errors.name = "Name must be at least 5 characters";
        hasError = true;
      } else {
        errors.name = "";
      }

      if (email.trim().length < 5) {
        errors.email = "Email must be at least 5 characters";
        hasError = true;
      } else {
        errors.email = "";
      }
    
      if(!validator.isEmail(email)){
        errors.email = "Email is not valid";
        hasError = true;
      } else {
        errors.email = "";
      }

      if (image.trim().length < 5) {
        errors.image = "Image must be at least 5 characters";
        hasError = true;
      } else {
        errors.image = "";
      }

      if (hasError) {
        // after 1 seconds we will reset hasError value
        setTimeout(() => {
          hasError = false;
        }, 1000);
        return;
      }

      sending = true;
      await addDoc(collection(db, "users"), {
        name,
        email,
        image,
        date: new Date().toLocaleString(),
      });

      sending = false;
      name = "";
      email = "";
      image = "";
    } catch (error) {
      console.log(error);
    }
  };
</script>

<form on:submit|preventDefault={ handleSubmit }>
  <h1>Enter the data to the register</h1>
  <div class="inputs-container">

    <Input bind:value={ name } error={ errors.name } placeholder="User Name" /> 

    <Input bind:value={ email } error={ errors.email } placeholder="Email" />

    <Input bind:value={ image } error={ errors.image } placeholder="Image Link" />

  </div>
  <button type="submit" disabled={ sending }>
    {sending ? "Sending..." : "Send"}</button
  >
</form>

<style>
  form {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }

  @media screen and (max-width: 768px){
    form {
      min-height: 100vh;
    }
    button {
      margin-bottom: 20px;
    }
  }

  h1 {
    color: white;
    font-size: 48px;
    letter-spacing: 4.8px;
    text-transform: uppercase;
    line-height: 57px;
    font-weight: 500;
    margin-top: 40px;
    max-width: 530px;
  }

  .inputs-container {
    width: 100%;
  }

   button {
    width: 194px;
    height: 51px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>
