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
            <h2>{name}{warframeinfo.primed !== "True" && <Link to={"/warframestats/" + name + " Prime"}>{warframeinfo.primed}</Link>}</h2><br /><br />
        </div>
    );
}

export default WarframeStats;