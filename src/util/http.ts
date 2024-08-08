import { getStorageToken } from "./helpers";

const URL = "https://bestpic-api.vercel.app"
// for dev
// const URL = "http://localhost:3000"


export async function fetchUsers() {
    const response = await fetch(`${URL}/onlineusers/`);
    const users = await response.json();
    return users;
}

export async function fetchLogin(data: FormData) {
    const response = await fetch(`${URL}/onlineusers/login`, {
      method: "POST",
      body: data,
    });
    const resData = await response.json()
    return resData
}

export async function fetchToken() {
    const token = await getStorageToken()
    const response = await fetch(`${URL}/onlineusers/token`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if(!response.ok) throw Error("couldn't fetch token")
    const resData = await response.json()
    return resData
}

export async function fetchDeleteUser() {
    const token = await getStorageToken()
    const response = await fetch(`${URL}/onlineusers/deleteUser`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
}

export async function fetchIncOnlineWins(id: string) {
    const response = await fetch(`${URL}/onlineusers/${id}`, {
      method: "PATCH",
    });
    if (!response.ok) throw Error("failed to fetch data");
    const result = await response.json();
    return result;
}

export async function fetchLocalUsers() {
  const response = await fetch(`${URL}/localusers/`);
  const resData = await response.json();

  return resData;
}

export async function fetchIncLocalWins(name: string) {
    const response = await fetch(`${URL}/localusers/${name}`, {
      method: "PATCH",
    });
    const result = await response.json();
    return result;
}


