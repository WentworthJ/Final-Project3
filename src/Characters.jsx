import { Link } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Countess1 from './Images/Countess1.jpg';
import Countess2 from './Images/Countess2.jpg';
import Morrago from './Images/Morrago.jpg';
import Gunwitch from './Images/Gunwitch.jpg';
import GunwitchCorrupt from './Images/GunwitchCorrupt.jpg';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Characters = () => {
    // State to manage the current image for the Countess section
    const [currentImage1, setCurrentImage1] = useState(Countess1);
    // State to manage the current image for the Gunwitch section
    const [currentImage2, setCurrentImage2] = useState(Gunwitch);

    // Function to handle changing the image for the Countess section
    const handleImageChange1 = (image) => {
        setCurrentImage1(image);
    };

    // Function to handle changing the image for the Gunwitch section
    const handleImageChange2 = (image) => {
        setCurrentImage2(image);
    };

    return (
        <div className="places-container">
            <h1>Characters</h1>

            {/* First row: The Countess */}
            <div className="row">
                <div className="text-container">
                    <h2>The Countess</h2>
                    <p>One of the last Flame Wardens, former human mercenaries who became guardians of Embermount after being blessed with power over fire.</p>
                </div>
                <div className="image-container">
                    <img src={currentImage1} className="location-image" alt="Embermount City" />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        {/* Button group to switch images for the Countess */}
                        <ButtonGroup variant="outlined" aria-label="image button group">
                            <Button onClick={() => handleImageChange1(Countess1)}>DD1</Button>
                            <Button onClick={() => handleImageChange1(Countess2)}>DD2</Button>
                        </ButtonGroup>
                    </Box>
                </div>
            </div>

            {/* Second row: The Gunwitch */}
            <div className="row">
                <div className="text-container">
                    <h2>The Gunwitch</h2>
                    <p>A magic wielder who uses an odd combination of a broomstick staff and musket. Cursed when disrupting a ritual.</p>
                </div>
                <div className="image-container">
                    <img src={currentImage2} className="location-image" alt="Morrago" />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        {/* Button group to switch images for the Gunwitch */}
                        <ButtonGroup variant="outlined" aria-label="image button group">
                            <Button onClick={() => handleImageChange2(Gunwitch)}>DD2</Button>
                            <Button onClick={() => handleImageChange2(GunwitchCorrupt)}>DD2 (Corrupt)</Button>
                        </ButtonGroup>
                    </Box>
                </div>
            </div>

            {/* Link to navigate back to the home page */}
            <Link to="/">Click here to go back</Link>
        </div>
    );
};

export default Characters;
