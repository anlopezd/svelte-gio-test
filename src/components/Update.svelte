<script>
  import { getUsers } from "../helpers/get-users.js";

  let isUpdating = false;

  const handleClick = async () => {
    isUpdating = true;
    await getUsers();
    isUpdating = false;
  };
</script>

<div>
  <button disabled={isUpdating} on:click={ handleClick }
    >{isUpdating ? "Updating..." : "Update"}</button
  >
</div>

<style>
  div {
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #e5e5e5;
  }

  div::before {
    content: "";
    position: absolute;
    left: 0;
    top: -50px;
    width: 100%;
    background: linear-gradient(
      360deg,
      #e5e5e5 29.55%,
      rgba(229, 229, 229, 0) 100%
    );
    height: 50px;
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
    background-color: black;
    color: white;
  }
</style>
