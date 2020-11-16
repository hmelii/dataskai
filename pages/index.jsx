
import Layout from "../layouts/Layout";
import DataskaiLogo from "../components/dataskai-logo/DataskaiLogo";
import AboutUs from "../components/about-us/AboutUs";
import OurWork from "../components/our-work/OurWork";

export default function Home() {
  return (
    <Layout>
      <DataskaiLogo />
      <AboutUs />
      <OurWork />
    </Layout>
  )
}
