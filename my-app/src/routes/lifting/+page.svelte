<script>
	import { slide } from 'svelte/transition';
</script>

<div in:slide={{ axis: 'y' }} out:slide={{ axis: 'y' }}>lifting</div>
