import React from "react";

function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <h1 className="marginFix">About Us</h1>
      <p className="missionTitles aboutText">
        Hal-0 World gets the inspiration for its name after the 1961's movie
        "Space Odissey". <br />
        This web app was built by two Ironhack graduates - Joana & Marvin - for
        the Web Development Bootcamp. Both students really love all space
        related themes and Marvin quickly dug into the NASA API, which really
        helped us implement some really nice features (check the APOD page see
        it in action!)
        <br />
        Every user will be an astronaut seeking space missions. Each astronaut
        must be logged in to apply, create, edit, delete and review missions.{" "}
        <br />
        For more official information regarding the space, please check the NASA
        website. <br />
        Thank you for visiting Hal-0 World, <br />a warm welcome from its
        creators.
      </p>
      <hr />
      <footer className="footer">
        -{" "}
        <a
          href="https://www.linkedin.com/in/joana-parentedacosta/"
          target="_blank"
        >
          Joana
        </a>{" "}
        &{" "}
        <a
          href="https://www.linkedin.com/in/marvin-valke-web-dev-fullstack/"
          target="_blank"
        >
          Marvin
        </a>{" "}
        -{" "}
      </footer>
    </div>
  );
}

export default AboutPage;
