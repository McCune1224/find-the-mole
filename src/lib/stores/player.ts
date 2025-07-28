import { writable } from "svelte/store";

// Define Player type if not already imported
type Player = {
  id: number;
  name: string;
  // Add other fields as needed
};

export function createPlayerStore() {
  const { subscribe, set, update } = writable<Player[]>([], () => {
    // Load players when store gets its first subscriber
    load();
    return () => {};
  });

  // Simulate persistent storage with localStorage
  const STORAGE_KEY = "players";

  function getStoredPlayers(): Player[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function savePlayers(players: Player[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
  }

  async function load() {
    try {
      const players = getStoredPlayers();
      set(players);
    } catch (error) {
      set([]);
    }
  }

  async function add(name: string) {
    try {
      update((players) => {
        const id =
          players.length > 0 ? Math.max(...players.map((p) => p.id)) + 1 : 1;
        const newPlayer: Player = { id, name };
        const updated = [...players, newPlayer];
        savePlayers(updated);
        return updated;
      });
    } catch (error) {
      // Optionally handle error
    }
  }

  async function edit(id: number, data: { name?: string }) {
    try {
      update((players) => {
        const updated = players.map((player) =>
          player.id === id ? { ...player, ...data } : player,
        );
        savePlayers(updated);
        return updated;
      });
    } catch (error) {
      // Optionally handle error
    }
  }

  async function remove(id: number) {
    try {
      update((players) => {
        const updated = players.filter((player) => player.id !== id);
        savePlayers(updated);
        return updated;
      });
    } catch (error) {
      // Optionally handle error
    }
  }

  return {
    subscribe,
    add,
    edit,
    remove,
    reload: load,
  };
}
