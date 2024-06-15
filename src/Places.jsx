import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation
import './App.css'; // Importing the CSS file for styling
import EmbermountImage from './Images/Embermount_City.jpg'; // Importing the image of Embermount City
import Aquanos from './Images/Aquanos.jpg'; // Importing the image of Aquanos
import Morrago from './Images/Morrago.jpg'; // Importing the image of Morrago

const Places = () => {
    return (
        <div className="places-container">
            <h1>Places</h1>
            <div className="row">
                <div className="text-container">
                    <h2>Embermount City</h2>
                    <p>The Elven capital, located on the side of a volcano.</p>
                </div>
                <div className="image-container">
                    <img src={EmbermountImage} className="location-image" alt="Embermount City" /> {/* Displaying the image of Embermount City */}
                </div>
            </div>
            <div className="row">
                <div className="text-container">
                    <h2>Morrago</h2>
                    <p>A town in the middle of the desert.</p>
                </div>
                <div className="image-container">
                    <img src={Morrago} className="location-image" alt="Morrago" /> {/* Displaying the image of Morrago */}
                </div>
            </div>

            <div className="row">
                <div className="text-container">
                    <h2>Aquanos</h2>
                    <p>A long forgotten city contained in a bubble of air deep in the ocean.</p>
                </div>
                <div className="image-container">
                    <img src={Aquanos} className="location-image" alt="Aquanos" /> {/* Displaying the image of Aquanos */}
                </div>
            </div>
            <Link to="/">Click here to go back</Link> {/* Link to navigate back to the main page */}

        </div>
    );
};

export default Places;
