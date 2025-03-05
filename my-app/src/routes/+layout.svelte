<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { Apple, Dumbbell, LayoutDashboard, UserRound } from 'lucide-svelte';
</script>

<nav class="bg-base-100 w-full p-2 shadow">
	<div class="mx-auto flex max-w-7xl items-center px-4">
		<div class="flex flex-1">
			<div class=" text-3xl font-bold">MuscleMetrics</div>
		</div>
		<div class="flex flex-1 justify-center gap-2">
			<a href="/dashboard" class="btn btn-ghost flex">
				<LayoutDashboard class="size-6" /> <span class="pl-0.5">Dashboard</span>
			</a>
			<a href="/nutrition" class="btn btn-ghost flex">
				<Apple class="size-6" /> <span class="pl-0.5">Nutrition</span>
			</a>
			<a href="/lifting" class="btn btn-ghost">
				<Dumbbell class="size-6" /> <span class="pl-0.5">Lifting</span>
			</a>
		</div>
		<div class="flex flex-1 justify-end">
			<div class="avatar btn btn-square flex size-12 items-center justify-center overflow-hidden">
				<UserRound class="size-7" />
			</div>
		</div>
	</div>
</nav>

{@render children()}
