import css from "./NavBar.module.scss";
import Link from "@mui/material/Link";
import { useState } from "react";
import Image from "next/image";
import { AppBar, Toolbar, Typography } from "@mui/material";

function NavBar() {
  const [state, setState] = useState(false);
  function toggleMenu() {
    setState(!state);
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link href={"/"} style={{ display: "flex", flexDirection: "row" }}>
          <Image
            src={"/HaramainTripsLogoV1.0.png"}
            alt=""
            height={30}
            width={30}
            style={{ margin: 3 }}
          />
          <Typography variant="h6" color="white" noWrap ml={1}>
            Haramain Trips
          </Typography>
        </Link>
        <nav className={css.navBar}>
          <div className={css.logoArea}></div>
          <div
            className={state ? `${css.span} ${css.cross}` : css.span}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={state ? `${css.menu} ${css.active}` : css.menu}
            onClick={toggleMenu}
          >
            <ul>
              <li>
                <Link href={"/"} passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/packages"} passHref>
                  Packages
                </Link>
              </li>
              <li>
                <Link href={"/about"} passHref>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/contact"} passHref>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
//
export default NavBar;
