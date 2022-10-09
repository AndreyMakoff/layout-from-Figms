import './carasule.css';

function Carasule() {
  
  return (
    <div className='carasul'>
      <div className='carasul_img'>
        <img
          className='carasul_img-1'
          src='../../../image/fotoslider1.png'
          alt='foto'
        ></img>
        <img
          className='carasul_img-1'
          src='../../../image/fotoslider2.png'
          alt='foto'
        ></img>
        <img
          className='carasul_img-1'
          src='../../../image/fotoslider3.png'
          alt='foto'
        ></img>
      </div>
      <button className='carasul_btn-next'>Next</button>
    </div>
  );


}
export default Carasule;
