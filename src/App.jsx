import ButtonGrdient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGrdient />
    </>
  );
};
export default App;
