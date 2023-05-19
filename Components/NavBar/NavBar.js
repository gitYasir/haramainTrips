import styles from "./NavBar.module.scss";
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
        <Link
          href="/"
          sx={{ display: "flex", flexDirection: "row" }}
          underline="none"
        >
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
        <nav className={styles.navBar}>
          <div
            className={
              state
                ? `${styles.span} ${styles.cross} ${styles.actSpan}`
                : styles.span
            }
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={state ? `${styles.menu} ${styles.active}` : styles.menu}
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
