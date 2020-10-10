import React, { useCallback, useState } from "react";

/* The main component
 */
export default function Home() {
  const [measuredDivRect, setMeasuredDivRect] = useState(null);
  const measuredDivRef = useCallback((node) => {
    if (node != null) setMeasuredDivRect(node.getBoundingClientRect());
  }, []);

  const measuredDivHeight = measuredDivRect ? measuredDivRect.height : "NULL";

  const brCount = 12;
  let brs = [];
  for (let i = 0; i < brCount; i++) {
    brs.push(<br key={i}></br>);
  }

  return (
    <>
      <div
        style={{ height: "100%", margin: "5rem" }}
        // className="h-full m-8"
      >
        <div
          style={{ padding: "1rem", backgroundColor: "lightblue" }}
          // className="p-4 bg-blue-300"
          ref={measuredDivRef}
        >
          <div>
            <p>div height: {measuredDivHeight}</p>
            {brs}
          </div>
        </div>
      </div>
    </>
  );
}
