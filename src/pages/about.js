import Head from "next/head";
import NavBar from "../../Components/NavBar/NavBar";
import About from "../../Components/About/About";

function about() {
  return (
    <>
      <Head>
        <title>About Haramain Trips</title>
        <meta name="description" content="About Haramain Trips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/HaramainTripsLogoV1.png" />
      </Head>
      <NavBar />
      <About />
    </>
  );
}

export default about;
