import React from "react";

function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default ScrollToTop;
