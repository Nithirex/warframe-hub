import { Link } from 'react-router-dom/cjs/react-router-dom'
import warframeinfolist from './info.json'

const WarframeList = () => {
    warframeinfolist.pop()
    return (
        <div className="warframe-list">
            {warframeinfolist.map((warframeinfo) => (
                <div className="warframe-info" key={warframeinfo.name}>
                    <Link to={'/warframestats/' + warframeinfo.name} >
                        <h2>{warframeinfo.name}</h2>
                    </Link>
                </div>
            ))}
        </div >
    );
}

export default WarframeList;