import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbae";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Link from "next/link";
import style from "../../tutorialapp/styles/Ninjas.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={style.title}>Homepage</h1>
        <p className={style.text}></p>
        <p className={style.text}></p>
        <Link href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  );
}
