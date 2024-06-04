import { isTMA } from '@tma.js/sdk-react';
import { useEffect, useState } from 'react';

/**
 * @return True, if app is within telegram.
 */
export function useIsTMA(): boolean {
  const [isTApp, setIsTApp] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await isTMA()
      setIsTApp(result)
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return isTApp;
}