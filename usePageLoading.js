// Copied from stack overflow ¯\_(ツ)_/¯ 
// https://stackoverflow.com/questions/60755316/next-js-getserversideprops-show-loading/60756105#60756105:~:text=You%20can%20create%20a%20custom%20hook%3A

import Router from 'next/router';
import { useEffect, useState } from 'react';

export const usePageLoading = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const routeEventStart = () => {
      setIsPageLoading(true);
    };
    const routeEventEnd = () => {
      setIsPageLoading(false);
    };

    Router.events.on('routeChangeStart', routeEventStart);
    Router.events.on('routeChangeComplete', routeEventEnd);
    Router.events.on('routeChangeError', routeEventEnd);
    
    return () => {
      Router.events.off('routeChangeStart', routeEventStart);
      Router.events.off('routeChangeComplete', routeEventEnd);
      Router.events.off('routeChangeError', routeEventEnd);
    };
  }, []);

  return { isPageLoading };
};