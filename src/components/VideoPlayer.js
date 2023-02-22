import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  return (
    <div className="VideoPlayer">
      <h2>Video Player</h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=783ccP__No8&t=192s" />
    </div>
  );
}

export default VideoPlayer;
