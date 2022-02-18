<script lang="ts">
  import Time from "./components/Time.svelte";
  export let headerText: string;
  export let age: number;
  export let isMale: boolean;
  function toggle() {
    isMale = !isMale;
  }
</script>

<main>
  <h1>{headerText}!</h1>
  <p>You are {age} years old.</p>
  <button on:click={toggle}> Toggle text </button>
  <p>You are {isMale ? "teste" : "teste2"}.</p>
  <p>
    <Time />
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
