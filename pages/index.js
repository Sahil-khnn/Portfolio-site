import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahil | MERN-Stack Developer</title>
        <meta
          name="description"
          content="I’m a MERN Stack developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/favv.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
