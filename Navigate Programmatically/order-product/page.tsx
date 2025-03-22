"use client";
// can use router.push("/"), router.replace("/"), router.back(), router.forward()

import { useRouter } from "next/navigation";

export default function Orderproduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.replace("/");
  };
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
