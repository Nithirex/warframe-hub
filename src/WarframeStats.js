import { useParams } from "react-router-dom";

const WarframeStats = () => {
    const { name } = useParams();
    return (
        <div className="warframe-stats">
            <h2>Warframe - {name}</h2>
        </div>
    );
}

export default WarframeStats;