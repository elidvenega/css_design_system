import React from "react";

export const Home = () => {
  const styles = {
    padding: "1rem",
  };
  return (
    <>
      <div className="container bg-dark">
        <h1>Design system</h1>
        <div className="bg-light text-dark" style={styles}>
          light blue bg with dark text
        </div>
        <div className="bg-white text-dark" style={styles}>
          white bg, with dark text
        </div>
        <div className="example-component" style={styles}>
          light blue bg with alpha and white text
        </div>
      </div>
    </>
  );
};
