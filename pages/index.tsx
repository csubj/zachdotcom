import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Zach Barner | Film, Photography</title>
        </Head>
        <Container>
          <div className="text-center m-20">
            Hardness and strength are companions of death.
          </div>
        </Container>
      </Layout>
    </>
  );
}
