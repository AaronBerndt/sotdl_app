import { useState, useCallback } from "react";

function useToggle() {
  const [state, setState] = useState(false);

  return [state, useCallback(() => setState(!state), [state])];
}

export default useToggle;
