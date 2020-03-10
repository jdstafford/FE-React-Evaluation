import React from "react";
import { Link } from "react-router-dom";

import Username from "./Username";

function Nav() {
  return (
    <div className="Nav">
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <a href="javascript:void(0);">Navigation 2</a>
      </p>
      <p>
        <a href="javascript:void(0);">Navigation 3</a>
      </p>
      <Username />
    </div>
  );
}

export default Nav;
