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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cards from "../../Data/data";
import NavBar from "../NavBar/NavBar";

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 10,
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
