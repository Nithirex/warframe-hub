import { Link } from 'react-router-dom/cjs/react-router-dom'
import warframeinfolist from './info.json'

const WarframeList = () => {
    if (warframeinfolist[warframeinfolist.length - 1].name === "WARFRAME_PLACEHOLDER") {
        warframeinfolist.pop()
    }
    return (
        <div className="warframe-list">
            {warframeinfolist.map((warframeinfo) => (
                ((warframeinfo.primed !== false)
                    &&
                    <div className="warframe-info" key={warframeinfo.name}>
                        <Link to={'/warframestats/' + warframeinfo.name} >
                            <h2>{warframeinfo.name}</h2>
                        </Link>
                    </div>)
            ))}
        </div >
    );
}

export default WarframeList;