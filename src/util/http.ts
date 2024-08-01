import { getStorageToken } from "./helpers";

const onlineUsersUrl = "http://localhost:3000/onlineUsers"
const localUsersUrl = "http://localhost:3000/localUsers"

// TODO: change the routes according to the backend
export async function fetchUsers() {
    const response = await fetch(`${URL}/users`);
    const users = response.json();
    return users;
}

export async function fetchLogin(data: FormData) {
    const response = await fetch(`${onlineUsersUrl}/login`, {
      method: "POST",
      body: data,
    });
    const resData = await response.json()
    return resData
}

export async function fetchToken() {
    const token = await getStorageToken()
    const response = await fetch(`${onlineUsersUrl}/token`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const resData = await response.json()
    return resData
}

export async function fetchDeleteUser() {
    const token = await getStorageToken()
    const response = await fetch(`${onlineUsersUrl}/deleteUser`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
}

export async function fetchUpdateUser(id: string, data: {}) {
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
}

export async function fetchLocalUsers() {
  const response = await fetch(`${localUsersUrl}/users`);
  const resData = response.json();
  return resData;
}

export async function fetchUpdateUserWins(name: string) {
    const response = await fetch(`${localUsersUrl}/${name}`, {
      method: "PATCH",
    });
    const result = response.json();
    return result;
}


