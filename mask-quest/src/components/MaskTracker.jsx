import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css";

const masks = [
  { name: "Deku Mask", image: "/masks/Deku-Mask.png" },
  { name: "Goron Mask", image: "/masks/Goron-Mask.png" },
  { name: "Zora Mask", image: "/masks/Zora-Mask.png" },
  { name: "Fierce Deity's Mask", image: "/masks/Fierce-Deitys-Mask.png" },
  { name: "Postman's Hat", image: "/masks/Postmans-Hat.png" },
  { name: "All-Night Mask", image: "/masks/All-Night-Mask.png" },
  { name: "Blast Mask", image: "/masks/Blast-Mask.png" },
  { name: "Stone Mask", image: "/masks/Stone-Mask.png" },
  { name: "Great Fairy's Mask", image: "/masks/Great-Fairys-Mask.png" },
  { name: "Keaton Mask", image: "/masks/Keaton-Mask-Model.png" },
  { name: "Bremen Mask", image: "/masks/Bremen-Mask.png" },
  { name: "Don Gero's Mask", image: "/masks/Don-Geros-Mask.png" },
  { name: "Mask of Scents", image: "/masks/Mask-of-Scents.png" },
  { name: "Romani's Mask", image: "/masks/Romanis-Mask.png" },
  { name: "Circus Leader's Mask", image: "/masks/Troupe-Leaders-Mask.png" },
  { name: "Kafei's Mask", image: "/masks/Kafeis-Mask.png" },
  { name: "Couple's Mask", image: "/masks/Couples-Mask.png" },
  { name: "Kamaros Mask", image: "/masks/Kamaros-Mask.png" },
  { name: "Garo's Mask", image: "/masks/Garos-Mask.png" },
  { name: "Captain's Hat", image: "/masks/Captains-Hat.png" },
  { name: "Gibdo Mask", image: "/masks/Gibdo-Mask.png" },
  { name: "Mask of Truth", image: "/masks/Mask-of-Truth.png" },
  { name: "Sun's Mask", image: "/masks/Suns-Mask.png" },
  { name: "Moon's Mask", image: "/masks/Moons-Mask.png" },
  { name: "Odolwa's Remains", image: "/masks/Odolwas-Remains.png" },
  { name: "Goht's Remains", image: "/masks/Gohts-Remains.png" },
  { name: "Gyorg's Remains", image: "/masks/Gyorgs-Remains.png" },
  { name: "Twinmold's Remains", image: "/masks/Twinmolds-Remains.png" }
];

const MaskTracker = () => {
  const [completedMasks, setCompletedMasks] = useState({});
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("maskProgress")) || {};
    setCompletedMasks(savedProgress);
  }, []);

  const toggleMask = (maskName) => {
    setClicked(maskName);
    setTimeout(() => setClicked(null), 200);
    const updatedProgress = { ...completedMasks, [maskName]: !completedMasks[maskName] };
    setCompletedMasks(updatedProgress);
    localStorage.setItem("maskProgress", JSON.stringify(updatedProgress));
  };

  const remainingMasks = masks.length - Object.values(completedMasks).filter(Boolean).length;

  return (
    <div className="container mt-4">
      <h2 className="text-center">Majora's Mask Progress Tracker</h2>
      <h4 className="text-center">{remainingMasks} out of {masks.length} masks remaining</h4>
      <div className="row">
        {masks.map((mask) => (
          <div key={mask.name} className="col-md-4 mb-4">
            <div className="card text-center p-3 shadow-sm">
              <img
                src={mask.image}
                alt={mask.name}
                className="card-img-top mx-auto d-block mask-image"
              />
              <div className="card-body">
                <h5 className="card-title">{mask.name}</h5>
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className={`form-check-input me-2 ${clicked === mask.name ? "clicked" : ""}`}
                    checked={!!completedMasks[mask.name]}
                    onChange={() => toggleMask(mask.name)}
                  />
                  Completed
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaskTracker;
