import logo from './logo.svg';
import './App.css';
import chien from "./chien.gif"
import './style.css'
function App() {
  return (
    
    <div style={{border:'solid 1px black',maxWidth:'100vw'}} >

 <h1 className='title red'>Your name here</h1>

 <br/>

 <img src={chien} alt="img1" />

 <br />

 <img src={"./imageInPublic.gif"}/> 



<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
</div>
  );
}

export default App;
