import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useEffect, useState } from 'react'

const WarframeList = () => {
    const [warframeinfolist, setWarframeinfolist] = useState(null)

    useEffect(() => {
        const fetchWarframes = async () => {
            const response = await fetch("http://localhost:8080/api/warframes")
            const json = await response.json()
            if (response.ok) {
                setWarframeinfolist(json)
            }
        }

        fetchWarframes()
    }, [])

    return (
        <div className="warframe-list">
            {Boolean(warframeinfolist) &&
                warframeinfolist.map((warframeinfo) => (
                    ((warframeinfo.primed !== undefined && warframeinfo.name !== "WARFRAME_PLACEHOLDER")
                        &&
                        <div className="warframe-info" key={warframeinfo.name}>
                            <Link to={'/warframestats/' + warframeinfo.name} >
                                <h2>{warframeinfo.name}</h2>
                            </Link>
                        </div>
                    )
                ))
            }
        </div >
    );
}

export default WarframeList;