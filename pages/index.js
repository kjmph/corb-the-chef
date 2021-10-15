import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/corb-logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corb the Chef</title>
        <meta name="description" content="Home of the cultural bird" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Big Bird!
        </h1>

        <p className={styles.description}>
          Home of the sophisticated cultured bird.
        </p>

        <Image src={logo} alt="Yummy bird"></Image>
      </main>

      <footer className={styles.footer}>
        <p>Eat that chicken, y&apos;all</p>
      </footer>
    </div>
  )
}
