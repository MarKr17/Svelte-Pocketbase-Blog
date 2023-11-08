import { onMount } from "svelte";

  const apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  let data = [];

  onMount(async () => {
    const response = await fetch(apiUrl);
    data = await response.json();
  });