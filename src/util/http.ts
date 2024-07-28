import { processError } from "./helpers";

const URL = "http://localhost:3000";
const token = localStorage.getItem("token")

// TODO: change the routes according to the backend
export async function fetchUsers() {
  try {
    const response = await fetch(`${URL}/users`);
    const users = response.json();
    if (!response.ok) throw Error("failed to fetch data");
    return users;
  } catch (error) {
    return processError(error);
  }
}

export async function fetchLogin(data: FormData) {
  try {
    const response = await fetch(`${URL}/onlineUsers/login`, {
      method: "POST",
      body: data,
    });
    const resData = await response.json()
    console.log(resData);
    
    return resData
  } catch (error) {
    // returns the error message if it exist
    return processError(error);
  }
}

export async function fetchToken(){
  const response = await fetch(`${URL}/onlineUsers/token`,{
    method:"POST",
    headers:{
      'Authorization':`Bearer ${token}`
    }
  })
  const resData = await response.json()
  return resData
}

export async function fetchDeleteUser() {
  try {
    const response = await fetch(`${URL}/onlineUsers/deleteUser`, {
      method: "DELETE",
      headers:{
         'Authorization':`Bearer ${token}`
      }
    });
    if (!response.ok) throw Error("failed to fetch data");
    const result = await response.json();
    return result;
  } catch (error) {
    return error
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
