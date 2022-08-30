import Styles from "./loginPage.module.scss";
import Typewriter from "typewriter-effect";
export default function LoginLandingPage() {
  return (
    <>
      <div className={Styles.bannerOuter}>
        <div className={Styles.headingContainer}>
          <h1 className={Styles.landingPageHeading}>
            <Typewriter
              loop={true}
              autoStart
              options={{
                strings: ["Empowering Startups"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className={Styles.landingPageContent}>
            We partner with non-technical founders and SMEs to grow ideas into
            products and businesses
          </p>
        </div>
      </div>
    </>
  );
}
