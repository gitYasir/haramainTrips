import { Box, Container, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        // pt: 13,
        pb: 6,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="m">
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          At Haramain Trips, we believe that every aspect of your Umrah journey
          should be stress-free and seamless, which is why we offer
          comprehensive Umrah packages that take care of everything. From
          transportation to accommodations to guided tours of holy sites, our
          packages are designed to provide you with a memorable and hassle-free
          experience.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
