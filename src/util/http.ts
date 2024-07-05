// const URL = "http://localhost:3000/user";

// export async function fetchUsers() {
//   const response = await fetch(`${URL}/get/all`);
//   const users = response.json();
//   if (!response.ok) throw Error("failed to fetch data");
//   return users;
// }

// export function fetchNewUser(data: FormData) {
//   fetch(`${URL}/new`, {
//     method: "POST",
//     body: data,
//   });
// }

// export async function fetchUpdateUser(id: string, data: {}) {
//   const response = await fetch(`${URL}/edit/${id}`, {
//     method: "PATCH",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!response.ok) throw Error("failed to fetch data");
//   const result = response.json();
//   return result;
// }

// export async function fetchDeleteUser(id: string) {
//   const response = await fetch(`${URL}/delete/${id}`, {
//     method: "DELETE",
//   });
//   if (!response.ok) throw Error("failed to fetch data");

//   const result = response.json();
//   return result;
// }
