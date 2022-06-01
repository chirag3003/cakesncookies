import Head from 'next/head'
import Navbar from "components/Navbar/Navbar"
import LandingSection from "components/LandingSection/LandingSection";
import ProductSection from "components/ProductSection";


export default function Home() {
    return (
        <div >
            <Head>
                <title>Cakes n Cookie{"'"}s</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Navbar/>
                <LandingSection/>
                <ProductSection/>
            </main>
        </div>
    )
}
