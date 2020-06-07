import { useState, useCallback } from "react";

function useToggle() {
  const [state, setState] = useState(false);

  return {
    open: state,
    togggleOpen: useCallback(() => setState(!state), [state]),
  };
}

export default useToggle;
