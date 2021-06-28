import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";


import Footer2 from "./Footer2";


const Footer = () => {
  const gContext = useContext(GlobalContext);

  switch (gContext.footer.style) {
    case "style2":
      return <Footer2 />;
    default:
      return <Footer2 />;
  }
};

export default Footer;
