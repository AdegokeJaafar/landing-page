import Layout from '../components/layout';
import Header from '../components/header';
import Feature from '../components/features';
import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/footer";
import Service from "../components/services"

const Index = () => {

  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header/>
      <Hero/>
      <Feature/>
      <Service/>
      <About/>
      <Footer/>
    </Layout>
  )
}

export default Index;