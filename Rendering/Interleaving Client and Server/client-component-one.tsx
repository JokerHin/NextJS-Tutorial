"use client";
import { ClientComponentTwo } from "./client-component-two";

import { useState } from "react";

export const ClientComponentOne = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [name, setName] = useState("Client Component one");
  return (
    <div>
      <h1>Client Component one</h1>
      {children}
    </div>
  );
};
