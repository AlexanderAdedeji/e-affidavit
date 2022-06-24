import { useState } from "react";
import { HomeProvider } from "./context/Homecontext";

import HomeLayout from "./layout/HomeLayout";

const Home = () => {
  const [homeState, setHomeState] = useState({
    headerTabs: "personal",
  });


  return (
    <HomeProvider>
      <div id="home">
        <HomeLayout setHomeState={setHomeState} homeState={homeState} />
      </div>
    </HomeProvider>
  );
};



export default Home;
