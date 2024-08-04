import storage from "redux-persist/lib/storage";

export function shuffle(array: any[]) {
  let currentIndex = array.length;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}


export function capitalize(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}


export async function getStorageToken() {
  const persistStorage = await storage.getItem("persist:root")
  if (persistStorage) {
    const storageData: { token: string } = JSON.parse(persistStorage);
    const token: { value: string } = JSON.parse(storageData.token);
    return token.value
  }
  return;
}
