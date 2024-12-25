import { Link } from "react-router-dom/cjs/react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h2>Homepage</h2><br />

            <h3>Links</h3>
            <ul>
                <li><Link to="/warframelist">Warframes</Link></li>
            </ul>
        </div>
    );
}

export default Home;