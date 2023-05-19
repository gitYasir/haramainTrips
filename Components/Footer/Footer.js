import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/" underline="hover">
        Haramain Trips
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "transparent",
          pt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="footer"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100px",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            target="_blank"
            rel="noopener"
            color="inherit"
            href="https://www.instagram.com/haramaintrips/"
          >
            <InstagramIcon fontSize="large" />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            color="inherit"
            href="https://twitter.com/HaramainTrips"
          >
            <TwitterIcon fontSize="large" />
          </Link>
        </div>
        <Copyright />
      </Box>
    </>
  );
}

export default Footer;
