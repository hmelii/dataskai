import Head from "next/head";
import Header from "./header/Header";
import Wrapper from "./wrapper/Wrapper";
import Footer from "./footer/Footer";
import Content from "./content/Content";

export default function Layot({ children }) {

  return (
    <>
      <Head>
        <title>DATASKAI</title>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <script type="text/javascript" src="asciinema-player.js"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
        <link rel="manifest" href="site.webmanifest"/>
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Wrapper>

        <Header/>
        <Content>
          {children}
        </Content>

        <Footer/>

      </Wrapper>
    </>
  )
}
