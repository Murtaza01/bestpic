import { getStorageToken } from "./helpers";

const URL = "http://localhost:3000"

// TODO: change the routes according to the backend
export async function fetchUsers() {
    const response = await fetch(`${URL}/onlineUsers/users`);
    const users = response.json();
    return users;
}

export async function fetchLogin(data: FormData) {
    const response = await fetch(`${URL}/onlineUsers/login`, {
      method: "POST",
      body: data,
    });
    const resData = await response.json()
    return resData
}

export async function fetchToken() {
    const token = await getStorageToken()
    const response = await fetch(`${URL}/onlineUsers/token`, {
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
    const response = await fetch(`${URL}/onlineUsers/deleteUser`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
}

// export async function fetchUpdateUser(id: string, data: {}) {
//     const response = await fetch(`${URL}/edit/${id}`, {
//       method: "PATCH",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (!response.ok) throw Error("failed to fetch data");
//     const result = response.json();
//     return result;
// }

export async function fetchLocalUsers() {
  const response = await fetch(`${URL}/localUsers/users`);
  const resData = response.json();
  return resData;
}

export async function fetchUpdateUserWins(name: string) {
    const response = await fetch(`${URL}/localUsers/${name}`, {
      method: "PATCH",
    });
    const result = response.json();
    return result;
}


