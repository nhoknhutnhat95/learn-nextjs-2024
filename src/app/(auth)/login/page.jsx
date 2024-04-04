import ButtonLogin from "@/components/button-login";
import React from "react";
import {readFileSync} from 'fs'
import { redirect } from "next/navigation";

const LayoutPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataJSON = await data.json();
  return (
    <div>
      Login nè: {dataJSON.length}
      <ButtonLogin></ButtonLogin>
    </div>
  );
};

export default LayoutPage;
