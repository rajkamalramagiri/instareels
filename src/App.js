import "./App.css";
import VideoCard from "./VideoCard";
import video from "./sample.mp4";
import video1 from "./sample1.mp4";

function App() {
  return (
    <div className="app">
      <div className="app_top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png"
          alt="logo"
          className="app_logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        <VideoCard url={video} />
        <VideoCard url={video1} />
      </div>
    </div>
  );
}

export default App;
