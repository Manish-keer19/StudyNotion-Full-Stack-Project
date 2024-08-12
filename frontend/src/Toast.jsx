import React from "react";
import { toast } from "react-hot-toast";

function Toast() {
  const notify = () => toast.error("Here is your toast!");
  return (
    <div>
      <button onClick={notify}>Show Toast</button>
  
    </div>
  );
}

export default Toast;
