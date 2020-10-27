import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

/* A single, simple component
 */
export default function Home() {
  // Keep the measured dimensions in React state
  const [measuredDivRect, setMeasuredDivRect] = useState(null);
  const measuredDivRef = useRef();
  useLayoutEffect(() => {
    setMeasuredDivRect(
      measuredDivRef && measuredDivRef.current
        ? measuredDivRef.current.getBoundingClientRect()
        : null
    );
  }, [measuredDivRef.current]);
  // const measuredDivRef = useCallback((node) => {
  //   if (node != null) setMeasuredDivRect(node.getBoundingClientRect());
  // }, []);
  // Get the height (or NULL for the server-side render)
  const measuredDivHeight = measuredDivRect ? measuredDivRect.height : "NULL";

  return (
    <>
      <div
        // Note that we are using React CSS, not Tailwind classes
        //style={{ height: "100%", margin: "5rem" }}
        className="h-full m-8"
      >
        <div
          // style={{ padding: "1rem", backgroundColor: "lightblue" }}
          // className="min-repro-test"
          className="p-4 bg-blue-300"
          ref={measuredDivRef}
        >
          <p>div height: {measuredDivHeight}</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
