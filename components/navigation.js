import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

function Navigation() {
    return <nav>
        <Link href="/index">
            <a style={linkStyle} title="Index Page"> Index </a>
        </Link>
        <Link href="/about">
            <a style={linkStyle} title="About Page"> About </a>
        </Link>
        <Link href="/blog">
            <a style={linkStyle} title="Blog Page"> Blog </a>
        </Link>
        <Link href="/show">
            <a style={linkStyle} title="Show Page"> Show </a>
        </Link>
    </nav>
}

export default Navigation
