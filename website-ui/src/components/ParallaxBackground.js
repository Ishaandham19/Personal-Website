import { ParallaxBanner } from "react-scroll-parallax";
import MainTitle from "./MainTitle"
import image from "./images/space_stones/_2399.jpg" 
import back from "./images/space_stones/spaceBack.png"
import fore from "./images/space_stones/spaceFore.png"
import mid_moons from "./images/space_stones/spaceMid1.png"
import mid_stones from "./images/space_stones/spaceMid2.png"


export const ParallaxBackground = () => {
//  Banner Type objects
  const background = {
    image: back,
    // speed: -20,
    // opacity: [1, 0.3],
    // scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline = {
    translateY: [0, 20],
    // scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    // expanded: false,
    children: <MainTitle></MainTitle>
  };

  const midground1 = {
    image: mid_moons,
    // speed: -10,
    // translateY: [0, 15],
    // opacity: [1, 0.5],
    // shouldAlwaysCompleteAnimation: true
  };

  const midground2 = {
    image: mid_stones,
    // speed: 10,
    // translateY: [10, 0],
    // scale: [1, 1.1, "easeOutCubic"],
    // shouldAlwaysCompleteAnimation: true
  };


  const foreground = {
    image: fore, 
    speed: 20,
    // change translateY to [5, 0] after image is changed
    translateY: [15, 0],
    // scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };


  // const gradientOverlay =  {
  //   opacity: [0, 1, "easeOutCubic"],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: <div className="gradient inset" />
  // };

  return (
    <ParallaxBanner
      layers={[background, midground1, midground2, foreground, headline]}
      style={{height: "100vh"}}
    />
  );
};


// changes to make
// SpaceFore - kep only the stones, remove the dirty purple ground.
// SpaceMid1 - Moon has a outline on it.
// SpaceBack - outlines observed in the background