import './PhotoGrid.css';

function PhotoGrid() {
  return (
    <div className='tile_grid'>
      <div className="tile"><img src="./photos/photo_01.jpg" alt="A thing" /></div>
      <div className="tile"><img src="./photos/photo_02.jpg" alt="A thing" /></div>
      <div className="tile"><img src="./photos/photo_03.jpg" alt="A thing" /></div>
      <div className="tile"><img src="./photos/photo_04.jpg" alt="A thing" /></div>
      <div className="tile"><img src="./photos/photo_05.jpg" alt="A thing" /></div>
      <div className="tile"><img src="./photos/photo_06.jpg" alt="A thing" /></div>
    </div>
  );
}

export default PhotoGrid;