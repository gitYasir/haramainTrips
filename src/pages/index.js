import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Subscribe from "../../Components/Subscribe/Subscribe";
import HomePage from "../../Components/Home/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haramain Trips</title>
        <meta name="description" content="An Umrah Company Like No Other" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/HaramainTripsLogoV1.png" />
      </Head>
      <main>
        <HomePage />
        <Subscribe />
      </main>
    </>
  );
}
