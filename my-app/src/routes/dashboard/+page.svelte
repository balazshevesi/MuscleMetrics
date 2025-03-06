<script>
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -20 }} out:fly={{ y: 20 }}>dashboard</div>
