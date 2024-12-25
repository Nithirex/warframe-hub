import { useParams } from "react-router-dom";
import warframeinfolist from './info.json'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const WarframeStats = () => {
    var warframeinfo = []
    const { name } = useParams();
    for (let i = 0; i < warframeinfolist.length; i++) {
        if (warframeinfolist[i].name === name) {
            warframeinfo = warframeinfolist[i]
        }
    }
    return (
        <div className="warframe-stats">
            <h2>{name}</h2>
            {Boolean(warframeinfo.primed) && <Link to={"/warframestats/" + name + " " + warframeinfo.primed}>For {name + warframeinfo.primed}</Link>}<br /><br />
        </div>
    );
}

export default WarframeStats;