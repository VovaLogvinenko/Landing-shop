import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "components/modals/header/Header";
import Main from "components/main/Main";
import About from "components/about/About";
import "scss/index.scss";

function App() {
  //  Lazy animation
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    function animLoad(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          change.target.classList.add("active");
        }
      });
    }

    const anim = document.body.querySelectorAll(".lazy-anim");
    const observer = new IntersectionObserver(animLoad, options);

    anim.forEach((e) => {
      observer.observe(e);
    });
  });

  return (
    <div className="app">
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
