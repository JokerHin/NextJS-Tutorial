import fs from "fs";
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <div>
      <h1>Server component one</h1>
      <ClientComponentOne />
    </div>
  );
};
