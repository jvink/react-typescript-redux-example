import { useEffect } from 'react';

export const useMount = (func: () => any) => useEffect(func, []);
