import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Header from './sections/Header';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import './App.css';

function App() {
  const containerRef = useRef(null);

  return (
    <div className="App">
        {/* here will be placed the animation */}
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <Header></Header>
          </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
