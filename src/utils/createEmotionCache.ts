import createCache from '@emotion/cache';

// Configure emotion cache
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default createEmotionCache;
