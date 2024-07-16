import { processError } from "./helpers";

const URL = "http://localhost:3000/user";

export async function fetchUsers() {
  try {
    const response = await fetch(`${URL}/user/get/all`);
    const users = response.json();
    if (!response.ok) throw Error("failed to fetch data");
    return users;
  } catch (error) {
    return processError(error);
  }
}

export async function fetchNewUser(data: FormData) {
  try {
    await fetch(`${URL}/new`, {
      method: "POST",
      body: data,
    });
  } catch (error) {
    // returns the error message if it exits
    return processError(error);
  }
}

export async function fetchUpdateUser(id: string, data: {}) {
  try {
    const response = await fetch(`${URL}/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw Error("failed to fetch data");
    const result = response.json();
    return result;
  } catch (error) {
    return processError(error);
  }
}

export async function fetchDeleteUser(id: string) {
  try {
    const response = await fetch(`${URL}/delete/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw Error("failed to fetch data");
    const result = response.json();
    return result;
  } catch (error) {
    return processError(error);
  }
}

export async function fetchUpdateUserWins(name: string) {
  try {
    const response = await fetch(`${URL}/challenge/${name}`, {
      method: "PATCH",
    });
    if (!response.ok) throw Error("failed to connect");
    const result = response.json();
    return result;
  } catch (error) {
    return processError(error);
  }
}

export async function fetchChallengers() {
  const response = await fetch(`${URL}/challengers`);
  const challengers = response.json();
  if (!response.ok) throw Error("failed to fetch challengers");
  return challengers;
}
