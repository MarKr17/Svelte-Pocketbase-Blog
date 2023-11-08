<script>
  import Navbar from "../lib/Navbar.svelte";
  import NavbarLogged from "../lib/NavbarLogged.svelte";
  import TailwindCss from "../TailwindCSS.svelte";
  import { page } from '$app/stores';
</script>
<TailwindCss />
{#if $page.data.user.username != ''}
	<NavbarLogged />
{:else}
	<Navbar />
{/if}
<slot />