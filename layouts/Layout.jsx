import Head from "next/head";
import Header from "./header/Header";
import Wrapper from "./wrapper/Wrapper";
import Footer from "./footer/Footer";
import Main from "./main/Main";

export default function Layot({ children } ) {
  console.log(children);

  return (
    <>
      <Head>
        <title>DATASKAI</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Wrapper>

        <Header/>
        <Main>
          { children }
        </Main>

        <Footer/>

      </Wrapper>
    </>
  )
}
