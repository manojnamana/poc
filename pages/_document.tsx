import { Title } from "@mui/icons-material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <title>Tacscan</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          />
        </Head>
      <body style={{backgroundColor:" #efe8fd;"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
