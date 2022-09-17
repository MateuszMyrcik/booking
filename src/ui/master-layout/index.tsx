import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import { NavigationItems } from "../../configs/navigation";
import { FooterComponent } from "../footer";

import { Navigation } from "../navigation";

interface IMasterLayoutComponent {
  children?: React.ReactNode;
}

export const MasterLayoutComponent: React.FC<IMasterLayoutComponent> = ({
  children,
}) => {
  return (
    <div>
      <Head>
        <title>Booking</title>
        <meta name="description" content="Book your awesome room" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation items={NavigationItems} />
      </header>
      <main className="min-h-screen" style={{ paddingTop: "72px" }}>
        {children}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience
        </CookieConsent>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};
