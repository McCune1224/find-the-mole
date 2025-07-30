<div class="min-h-screen flex flex-col justify-center items-center py-12">
	<h1
		class="text-7xl font-extrabold mb-10 text-center bg-black/80 text-white px-8 py-6 rounded-3xl shadow-lg"
	>
		The Mole
	</h1>
	<div
		class="text-white flex flex-col items-center gap-8 w-full max-w-xl mx-auto bg-black/90 rounded-2xl shadow-2xl px-8 py-12 mt-2"
	>
		<p
			class="text-3xl text-white text-center leading-relaxed mb-6 text-gray-900 font-medium"
		>
			Welccome to the Mole Game Manager
			<br />
		</p>
		<p class="text-2xl text-white text-center mb-6">
			<span class="font-extrabold">Player List:</span> you can add/remove
			players, as well as mark their status in the game (safe / unsafe). When
			inputting a player's name into the
			<a class="text-blue-500 underline" href="/survival">Elimination</a> terminal,
			you can check if they are safe or unsafe.
		</p>
		<div class="flex flex-col gap-4 w-full max-w-lg">
			<a href="/players" class="btn btn-secondary big-btn w-full shadow-xl"
				>Player List</a
			>
			<p class="text-2xl text-white text-center mb-6">
				<span class="font-extrabold">Elimination:</span> You may input the
				player's names into a terminal to see if they are safe or unsafe. If you
				want to eliminate a player, you can do so in the
				<a class="text-blue-500 underline" href="/players">Player List</a> section.
				This page is more for visual flair and doesn't really do much else :)
			</p>
			<a href="/survival" class="btn btn-primary big-btn w-full shadow-xl"
				>Elimination</a
			>
		</div>
	</div>
</div>
