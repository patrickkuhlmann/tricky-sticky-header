import { useState } from 'react';

export function useScrollDirection() {

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null
  );

    //TODO: implement

  return scrollDirection;
}
