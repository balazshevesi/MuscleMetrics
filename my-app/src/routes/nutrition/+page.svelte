<script>
	import { slide } from 'svelte/transition';
	import { ChevronLeft, ChevronRight, Plus } from 'lucide-svelte';
	import Entry from './Entry.svelte';
	import MicronutrientEntry from './MicronutrientEntry.svelte';
</script>

<div>
	<div class="mx-auto w-full max-w-5xl items-center px-4 py-16">
		<h2 class="text-base-content mb-6 flex items-center gap-3 text-2xl font-bold">
			<ChevronLeft class="stroke-3 size-7" />
			<span>Today</span>
			<ChevronRight class="stroke-3 size-7" />
		</h2>
		<div class="bg-base-100 mb-5 flex flex-col gap-2 rounded-lg px-8 pb-8 pt-6 shadow-xl">
			<div class="mb-2 flex justify-between">
				<div class="text-content mb-4 text-xl font-semibold">Nutrition Log</div>
				<div class="ml-6 flex gap-4">
					<div class="btn btn-primary"><Plus class="size-6" />Food</div>
					<div class="btn btn-outline"><Plus class="size-6" />Exercise</div>
				</div>
			</div>
			<div class="flex flex-col gap-1 overflow-hidden rounded-lg">
				<Entry></Entry>
				<Entry></Entry>
				<Entry></Entry>
				<Entry></Entry>
				<Entry></Entry>
			</div>
		</div>

		<div class="bg-base-100 mb-5 flex w-full rounded-xl px-8 pb-8 pt-6 shadow-lg">
			<div class="flex flex-col">
				<div class="text-content mb-6 text-xl font-semibold">Energy Summary</div>
				<div class="flex">
					<div class="flex flex-col items-center justify-center">
						<div class="relative">
							<div
								class="radial-progress progress-primary relative top-0 z-30 mb-3"
								style="--value:30; --size:7rem; --thickness: 10px;"
								aria-valuenow="30"
								role="progressbar"
							>
								<div class="text-base-content text-center leading-4">
									<div class="text-xl font-semibold">1580</div>
									<span class="se text-sm font-semibold">kcal</span>
								</div>
							</div>
							<div
								class="radial-progress progress-accent absolute left-0 top-0 z-20 mb-3"
								style="--value:70; --size:7rem; --thickness: 10px;"
								aria-valuenow="80"
								role="progressbar"
							></div>
							<div
								class="radial-progress progress-secondary bg-base-200 absolute left-0 top-0 z-10 mb-3"
								style="--value:100; --size:7rem; --thickness: 10px;"
								aria-valuenow="100"
								role="progressbar"
							></div>
							<div class="text-center text-lg font-semibold">Consumed</div>
						</div>
					</div>
					<div class="divider-horizontal mx-6"></div>
					<div class="flex items-center justify-center">
						<div>
							<div
								class="radial-progress bg-base-200 mb-3"
								style="--value:39; --size:7rem; --thickness: 10px;"
								aria-valuenow="39"
								role="progressbar"
							>
								<div class=" text-center leading-4">
									<div class="text-xl font-semibold">1194</div>
									<span class="se text-sm font-semibold">kcal</span>
								</div>
							</div>
							<div class="text-center text-lg font-semibold">Remaining</div>
						</div>
					</div>
				</div>
			</div>
			<div class="divider divider-horizontal mx-10"></div>
			<div class="w-full">
				<div class="text-content mb-6 text-xl font-semibold">Targets</div>
				<div class=" w-full">
					<div class="flex w-full flex-col gap-3">
						<div class="flex items-center gap-4">
							<span class="w-20 font-semibold">Energy</span>
							<div class="flex w-full flex-col">
								<div class="flex justify-between">
									<div class="text-sm font-semibold">1580 / 2774 kcal</div>
									<div class="text-sm font-semibold">57%</div>
								</div>
								<progress class="progress h-2.5" value={57} max="100"></progress>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<span class="w-20 font-semibold">Protein</span>
							<div class="flex w-full flex-col">
								<div class="flex justify-between">
									<div class="text-sm font-semibold">150 / 277 g</div>
									<div class="text-sm font-semibold">30%</div>
								</div>
								<progress class="progress progress-accent h-2.5" value={30} max="100"></progress>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<span class="w-20 font-semibold">Carbs</span>
							<div class="flex w-full flex-col">
								<div class="flex justify-between">
									<div class="text-sm font-semibold">77 / 170 g</div>
									<div class="text-sm font-semibold">46%</div>
								</div>
								<progress class="progress progress-secondary h-2.5" value={46} max="100"></progress>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<span class="w-20 font-semibold">Fat</span>
							<div class="flex w-full flex-col">
								<div class="flex justify-between">
									<div class="text-sm font-semibold">104 / 150 g</div>
									<div class="text-sm font-semibold">69%</div>
								</div>
								<progress class="progress progress-primary h-2.5" value={69} max="100"></progress>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-base-100 mb-5 flex w-full flex-col rounded-xl px-8 pb-8 pt-6 shadow-lg">
			<div class="text-content mb-5 text-xl font-semibold">Micronutrients</div>
			<div class="flex gap-0">
				<div class="flex h-fit flex-1 flex-col gap-5 rounded-lg p-2">
					<div class="flex flex-col gap-1 overflow-hidden rounded-lg">
						<div class="bg-base-300 px-2 py-1 font-semibold">Vitamins</div>
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
					</div>
					<div class="flex flex-col gap-1 overflow-hidden rounded-lg">
						<div class="bg-base-300 rounded-t-lg px-2 py-1 font-semibold">Vitamins</div>
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
					</div>
				</div>
				<div class="flex h-fit flex-1 flex-col gap-5 rounded-lg p-2">
					<div class="flex flex-col gap-1 overflow-hidden rounded-lg">
						<div class="bg-base-300 rounded-t-lg px-2 py-1 font-semibold">Vitamins</div>
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
					</div>
					<div class="flex flex-col gap-1 overflow-hidden rounded-lg">
						<div class="bg-base-300 rounded-t-lg px-2 py-1 font-semibold">Vitamins</div>
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
						<MicronutrientEntry />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
