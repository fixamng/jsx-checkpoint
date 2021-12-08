// import "./style.css";
import image from "./imageInSrc.jpg";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img className="img-div" src={image} alt="something" />
        <br />
        <img className="img-div" src="./imageInPublic.jpg" alt="something" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
