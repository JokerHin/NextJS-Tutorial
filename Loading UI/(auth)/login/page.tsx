"use client";
export default async function Login() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return <h1>Login</h1>;
}
