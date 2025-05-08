// hooks/useAOS.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
      easing: 'ease-in-out-quad',
    });
    
    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useAOS;