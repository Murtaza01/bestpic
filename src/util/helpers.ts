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

export function processError(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export function capitalize(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

