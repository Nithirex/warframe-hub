import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const WarframeStats = () => {
    const { name } = useParams();
    const [warframeinfo, setWarframeinfo] = useState(null)

    useEffect(() => {
        const fetchWarframes = async () => {
            const response = await fetch("http://localhost:8080/api/warframes/" + name)
            const json = await response.json()
            if (response.ok) {
                setWarframeinfo(json)
            }
        }

        fetchWarframes()
    }, [name])

    return (
        <div className="warframe-stats">
            {
                warframeinfo && <>
                    <h2>{name}</h2>
                    {Boolean(warframeinfo.primed) && <>
                        <Link to={"/warframestats/" + name + " " + warframeinfo.primed}>For {name + " " + warframeinfo.primed}</Link><br /><br />
                    </>}
                </>
            }
        </div>
    );
}

export default WarframeStats;