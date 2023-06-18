import "../css/page/Gallery.scss";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

import Nav from "../components/Nav";
import Gal4 from "../assets/util/Gal4";

export default function Dhabi() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="gallery">
      <div className={`g-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`g-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="g-icon" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>
        <div className="photos">
          <Gal4 />
        </div>
      </div>
    </div>
  );
}
