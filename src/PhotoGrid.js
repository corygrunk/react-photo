import './PhotoGrid.css';
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function PhotoGrid() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className='tile_grid'>
        <div className="tile"><img src="./photos/photo_01.jpg" alt="A thing" /></div>
        <div className="tile"><img src="./photos/photo_02.jpg" alt="A thing" /></div>
        <div className="tile"><img src="./photos/photo_03.jpg" alt="A thing" /></div>
        <div className="tile"><img src="./photos/photo_04.jpg" alt="A thing" /></div>
        <div className="tile"><img src="./photos/photo_05.jpg" alt="A thing" /></div>
        <div className="tile"><img src="./photos/photo_06.jpg" alt="A thing" /></div>
      </div>
      <div>
        <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button>

        <Lightbox
          open={open}
          index={2}
          close={() => setOpen(false)}
          slides={[
            { src: "./photos/photo_01.jpg" },
            { src: "./photos/photo_02.jpg" },
            { src: "./photos/photo_03.jpg" },
            { src: "./photos/photo_04.jpg" },
            { src: "./photos/photo_05.jpg" },
            { src: "./photos/photo_06.jpg" }
          ]}
        />
      </div>
    </div>
  );
}

export default PhotoGrid;