import SimpleSlider from '../slider/slider';
import './centerblock.css';
function CenterBlock() {
  return (
    <div className='centerblock'>
      <SimpleSlider />
      <div className='choice'>Choice Of </div>
      <div className='destination'>Destinations </div>
      <div className='explorText'>
        explore the beauty of god's earth in a beautiful forest and have fun
      </div>
      <button className='btnExploreNow'>Exsplore Now</button>
      <div className='trainfoto'></div>
      <div className='textWhat'>What do customers say about us?</div>
      <div className='revier'>
        <div className='fotoMen'></div>
        <div className='circle'></div>
      </div>
      <div className='title_avatar'>
        <p className='title_avatar-name'>Alpanasap</p>
        <p className='title_avatar-country'>Japung, Indonesia</p>
      </div>
      <p className='avatar_des'>
        Very satisfying service makes it comfortable, a beautiful place in the
        world.
      </p>
      <div className='star_raiting'></div>
    </div>
  );
}
export default CenterBlock;
