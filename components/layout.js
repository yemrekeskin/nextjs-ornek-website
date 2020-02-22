import Navigation from "./navigation";
import Head from 'next/head';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

function Layout({ children }) {
    return <div style={layoutStyle}>

        <Head>
            <title> Index </title>
        </Head>

        <Navigation />
        <main>
            {children}
        </main>
        <footer>
            designed by yek
        </footer>
    </div>
}

export default Layout