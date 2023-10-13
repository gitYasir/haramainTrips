import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cards from "../../Data/data";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import { Link } from "@mui/material";

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        <Box
          minHeight={"100vh"}
          sx={{
            bgcolor: "background.paper",
            pt: 13,
            pb: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            maxWidth="m"
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link color={"inherit"} href="/packages">
                <Button variant="contained">Packages</Button>
              </Link>
              <Link color={"inherit"} href="#Subscribe">
                <Button variant="outlined">Subscribe</Button>
              </Link>
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
                  <div
                    style={{
                      height: 300,
                      width: 250,
                      position: "relative",
                    }}
                  >
                    <Image src={card.image} alt="" fill={true} />
                  </div>
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
                    <Link color={"inherit"} href="/packages">
                      <Button size="small">Packages</Button>
                    </Link>
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
