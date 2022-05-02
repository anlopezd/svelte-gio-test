<script>
  import UserCard from "./UserCard.svelte";
  import { fade } from 'svelte/transition';
  import { users } from '../stores/users.js';
</script>

<div class="cards" transition:fade>
  {#each $users as user (user.id)}
    <UserCard {...user} />
  {/each}
</div>

<style>
  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 52px;
    min-height: 55%;
  }
</style>
