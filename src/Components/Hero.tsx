import { useRef, useState } from "react"


function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVdRef = useRef(null);

  const handleVideoLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  }
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMinVidClick = () => {
    sethasClicked(true);
    setCurrentIndex((prevIdx) => prevIdx + 1);
    
      setCurrentIndex(upcomingVideoIndex);
    
  }
  const getVdSource = (idx: number) => `videos/hero-${idx}.mp4`


  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-xl">
                  <div onClick={handleMinVidClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                    <video ref={nextVdRef} src={getVdSource(upcomingVideoIndex)} muted loop id="current-video" className="size-64 origin-center scale-150 object-cover object-center" onLoadedData={handleVideoLoaded}/>
                  </div>
                </div>
                <video src={getVdSource(currentIndex)} ref={nextVdRef}></video>
            </div>
        </div>
    </div>
  )
}

export default Hero