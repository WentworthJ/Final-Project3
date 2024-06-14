import { Link } from "react-router-dom";
import './App.css';
import EmbermountImage from './Images/Embermount_City.jpg';
import Aquanos from './Images/Aquanos.jpg';
import Morrago from './Images/Morrago.jpg';



const Places = () => {
    return (
        <div className="places-container">
            <h1>Places</h1>
            <div className="row">
                <div className="text-container">
                    <h2>Embermount City</h2>
                    <p>The Elven capital, located on the side of a volcano.</p>
                    <Link to="/">Click here to go back</Link>
                </div>
                <div className="image-container">
                    <img src={EmbermountImage} className="location-image" alt="Embermount City" />
                </div>
            </div>
            <div className="row">
                <div className="text-container">
                    <h2>Morrago</h2>
                    <p>A town in the middle of the desert.</p>
                    <Link to="/">Click here to go back</Link>
                </div>
                <div className="image-container">
                    <img src={Morrago} className="location-image" alt="Another location" />
                </div>
            </div>

            <div className="row">
                <div className="text-container">
                    <h2>Aquanos</h2>
                    <p>A long forgotten city contained in a bubble of air deep in the ocean.</p>
                    <Link to="/">Click here to go back</Link>
                </div>
                <div className="image-container">
                    <img src={Aquanos} className="location-image" alt="Another location" />
                </div>
            </div>
            
        </div>
    );
};

export default Places;
