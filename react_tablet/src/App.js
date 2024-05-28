import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive';

const ResponsiveExample = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isRetina = useMediaQuery({ minResolution: '2dppx' });

  return (
    <div id="wrap">
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div id="star1"></div>
      <div id="star2"><p>여우별 : 기숙사 화재 감지 시스템</p></div>
    </div>
  );
};

const Fox = () => {
  return (
    <div className="fox">
    </div>
  );
};

const House = () => {
  return (
    <div className='house'></div>
  );
};


const Box_1 = () => {
  return (
    <div className='box_1'>
      <div id='box_1_header'></div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FBavXyN18K8?si=wEOHywVNSyhszaSf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};


const Box_2 = () => {
  return (
    <div className='box_2'>
      <div id='box_2_header'></div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/d8K802parSA?si=ZCTVf0neLoOhUc9R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

const Box_3 = () => {
  return (
    <div className='box_3'>
      <div id='box_3_header'></div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hg4oVgNq7Do?si=lV35A9n-hmqSgyz9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <House />
      <Box_1 />
      <Box_2 />
      <Box_3 />
      <Fox />
      <ResponsiveExample>
      </ResponsiveExample>
    </div>
  );
}

export default App;
