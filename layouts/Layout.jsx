import Head from "next/head";
import Header from "./header/Header";
import Wrapper from "./wrapper/Wrapper";
import Footer from "./footer/Footer";
import Content from "./content/Content";

export default function Layot({ children } ) {
  console.log(children);

  return (
    <>
      <Head>
        <title>DATASKAI</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Wrapper>

        <Header/>
        <Content>
          { children }
        </Content>

        <Footer/>

      </Wrapper>
    </>
  )
}
