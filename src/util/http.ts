const URL = "http://localhost:3000/user";

export async function fetchUsers() {
  try {
    const response = await fetch(`${URL}/get/all`);
    const users = response.json();
    return users;
  } catch (e) {
    return e;
  }
}

export function fetchNewUser(data: FormData) {
  fetch(`${URL}/new`, {
    method: "POST",
    body: data,
  });
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
    const result = response.json();
    return result;
  } catch (e) {
    return e;
  }
}

export async function fetchDeleteUser(id: string) {
  try {
    const response = await fetch(`${URL}/delete/${id}`, {
      method: "DELETE",
    });
    const result = response.json();
    return result;
  } catch (e) {
    return e;
  }
}
