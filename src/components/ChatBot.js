import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "275e2baffef3751676db727d1649779d8",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return <div></div>;
}

export default Chatbot;