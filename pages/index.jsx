import Layout from "../layouts/Layout";
import DataskaiLogo from "../components/dataskai-logo/DataskaiLogo";
import AboutUs from "../components/about-us/AboutUs";
import OurWorks from "../components/our-works/OurWorks";
import OurProjects from "../components/our-projects/OurProjects";
import Operations from "../components/operations/Operations";
import Testers from "../components/Testers/Testers";
import Usage from "../components/usage/Usage";

export default function Home() {
  return (
    <Layout>
      <DataskaiLogo/>
      <AboutUs/>
      <OurWorks/>
      <OurProjects/>
      <Operations/>
      <Testers/>
      <Usage/>
    </Layout>
  )
}
