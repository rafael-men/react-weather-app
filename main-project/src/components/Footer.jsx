import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>
          Desenvolvido por Rafael
        </p>
      </div>
    </footer>
  );
};


const footerStyle = {
  backgroundColor: "#374151",
  color: "white",
  padding: "20px 0",
  position: "relative",
  width: "100%",
  height:'100%',
  bottom:'fixed'
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
};

const textStyle = {
  margin: "10px 0",
};

export default Footer;
