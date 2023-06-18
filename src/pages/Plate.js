import "../css/page/Gallery.scss";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

import Nav from "../components/Nav";
import Gal2 from "../assets/util/Gal2";

export default function Plate() {
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
          <Gal2 />
        </div>
      </div>
    </div>
  );
}
