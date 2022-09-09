import React from "react";
import Action from "./action";

export default function BuyBook(props: any) {
  return (
    <div className="dFlex">
      <Action count={1} />
      <Action count={5} />
      <Action count={10} />
      <Action count={20} />
    </div>
  );
}
