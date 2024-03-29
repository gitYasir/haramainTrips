import Head from "next/head";
import NavBar from "../../Components/NavBar/NavBar";
import Packages from "../../Components/Packages/Packages";
import Subscribe from "../../Components/Subscribe/Subscribe";

function packages() {
  return (
    <>
      <Head>
        <title>Haramain Trips Packages</title>
        <meta name="description" content="Haramain Trips Packages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/HaramainTripsLogoV1.png" />
      </Head>
      <NavBar />
      <Packages />
      <Subscribe />
    </>
  );
}

export default packages;
