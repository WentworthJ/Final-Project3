import { Link } from "react-router-dom";
import './App.css';
import Crystal from './Images/Crystal.jpg';


const Items = () => {
    return (
        <div className="places-container">
            <h1>Items</h1>
            <div className="row">
                <div className="text-container">
                    <h2>Eternia Crystal</h2>
                    <p>The Eternia Crystals are ancient sources of power that were used to seal away the Old Ones, powerful dark beings that seek to destroy.</p>
                    <Link to="/">Click here to go back</Link>
                </div>
                <div className="image-container">
                    <img src={Crystal} className="location-image" alt="Embermount City" />
                </div>
            </div>
            
        </div>
    );
};

export default Items;
