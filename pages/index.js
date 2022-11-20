import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Op Bot A Multipurpose Bot!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Op Bot The Best Modified Version Of Miltaro Bot!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
