import React from "react";
import { Link } from "react-router-dom";

import ProfileMenu from "./ProfileMenu";

export default function Nav() {
  return (
    <div className="Nav">
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/nav2">Navigation 2</Link>
      </p>
      <p>
        <Link to="/nav3">Navigation 3</Link>
      </p>
      <ProfileMenu />
    </div>
  );
}
