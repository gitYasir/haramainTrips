import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [
  {
    id: 1,
    title: "Visit the Holy Kaaba",
    image: "/images/kaaba.jpg",
    description: "Get the chance to perform Tawaf around the Holy Kaaba",
  },
  {
    id: 2,
    title: "Explore the Prophet’s Mosque",
    image: "/images/nabawi.jpg",
    description: "Visit the Prophet’s Mosque and offer prayers in the Rawdah",
  },
  {
    id: 3,
    title: "Perform Umrah with Ease",
    image: "/images/umrahSteps.png",
    description:
      "Perform Umrah with ease as we take care of all the arrangements and guide you step by step",
  },
  {
    id: 4,
    title: "Experience the Zamzam Water",
    image: "/images/Zamzam-water-dispenser.jpg",
    description: "Drink the blessed Zamzam water from the well of Zamzam",
  },
  {
    id: 5,
    title: "Visit Historic Sites",
    image: "/images/historicsITES.jpg",
    description:
      "Discover the rich history of Makkah and Madinah at various historic sites",
  },
  {
    id: 6,
    title: "Try Authentic Arabic Cuisine",
    image: "/images/saudicuisine101_Card_2.jpg",
    description:
      "Indulge in the delicious and exotic flavors of Arabic cuisine",
  },
];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              width={"100%"}
              lineHeight={1}
            >
              Discover the Ultimate Stress-Free Umrah Experience
            </Typography>
            <Typography
              component="h2"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Let us take care of all the details, so you can focus on your
              spiritual journey
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              We believe that every aspect of your Umrah journey should be
              stress-free and seamless, which is why we offer comprehensive
              Umrah packages that take care of everything. From transportation
              to accommodations to guided tours of holy sites, our packages are
              designed to provide you with a memorable and hassle-free
              experience.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Packages</Button>
              <Button variant="outlined">Subscribe</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt=""
                    sx={{ minHeight: { md: 300 }, maxHeight: { md: 300 } }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      minHeight: { md: 190 },
                      maxHeight: { md: 190 },
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "center",
                      minHeight: { md: 50 },
                      maxHeight: { md: 50 },
                    }}
                  >
                    <Button size="small">Packages</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
