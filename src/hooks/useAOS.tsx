import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (): void => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 0,
      easing: 'ease-in-out-quad',
    });
    
    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useAOS;
