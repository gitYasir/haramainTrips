import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.main}>
      <div className={styles.subContainer}>
        <h1>Discover the Ultimate Stress-Free Umrah Experience</h1>
        <h3>
          Let us take care of all the details, so you can focus on your
          spiritual journey
        </h3>
        <p className={styles.para}>
          We believe that every aspect of your Umrah journey should be
          stress-free and seamless, which is why we offer comprehensive Umrah
          packages that take care of everything. From transportation to
          accommodations to guided tours of holy sites, our packages are
          designed to provide you with a memorable and hassle-free experience.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
