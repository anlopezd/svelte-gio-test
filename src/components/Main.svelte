<script>
  import { users } from "../stores/users.js";
  import Form from "./Form.svelte";
  import UserList from "./UserList.svelte";
  import Update from "./Update.svelte";
  import {  onMount } from "svelte";
  import { getUsers } from "../helpers/get-users.js";
 
  /*
  We can pass the users data like props, 
  but when we need use data between components that don't have a parent-child relationship,
  we can use the store.
  in this application probably it is not necessary, but I chose to do it this way.

  the $ allows us work with reactivity! and with the store is a autosubscribe.

  Users first is an empty array. With the onMount we can get the data from firebase after 
  the component is first rendered to the DOM, and fill the array.
  */

  let loading = false;

  onMount(async () => {
    loading = true;
    // geUsers is a function that set the last 10 users in the users store
    await getUsers();
    loading = false;
  });

</script>

<main>
  <div class="left">
    <Form />
  </div>

  <div class="right">
    <h2>Update <br /> recorded data</h2>
    {#if loading}
      <p>Loading...</p>
    {:else if $users.length >= 1}
      <UserList />
    {:else}
      <p>We don't have data yet.</p>
    {/if}
    <Update />
  </div>
</main>

<style>
  main {
    display: flex;
    min-height: calc(100vh - 90px);
  }

  p {
    height: 300px;
    font-size: 48px;
    margin-top: 50px;
  }

  .left {
    width: 50%;
    max-height: calc(100vh - 90px);
    background-color: black;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 56%,
      94% 60%,
      100% 64%,
      100% 100%,
      0 100%
    );
  }

  .right {
    width: 50%;
    max-height: calc(100vh - 90px);
    min-height: calc(100vh - 90px);
    background-color: white;
    text-align: center;
    overflow-y: scroll;
  }

  .right::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
  }

  .right h2 {
    font-size: 48px;
    letter-spacing: 4.8px;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 50px;
  }

  @media screen and (max-width: 768px) {
    main {
      flex-direction: column;
    }
    .left {
      width: 100%;
      min-height: 100vh;
      max-height: auto;
      clip-path: polygon(
        0% 0%,
        46% 0%,
        50% 5%,
        54% 0%,
        100% 0%,
        100% 100%,
        0 100%
      );
    }
    .right {
      width: 100%;
      height: 100vh;
      max-height: 100vh;
    }
  }
</style>
