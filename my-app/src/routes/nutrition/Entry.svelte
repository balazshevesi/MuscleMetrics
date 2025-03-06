<script lang="ts">
	import { Apple, EllipsisVertical } from 'lucide-svelte';

	// instance-level logic goes here
</script>

<div class="bg-base-200 flex w-full items-center gap-2 px-4 py-1.5 text-sm font-medium">
	<div class="flex items-center justify-center">
		<Apple class="stroke-3 size-5 stroke-red-600" />
	</div>
	<div class="ml-3 flex-1 font-medium">Raw Egg</div>
	<div class="flex-1">15:36</div>
	<div class="text-eight flex-right">2</div>
	<div class="flex-1">large</div>
	<div class="flex flex-1 justify-end">
		<div>209 kcal</div>
	</div>
	<div class="btn btn-ghost btn-xs btn-circle ml-2">
		<EllipsisVertical class="size-5" />
	</div>
</div>
