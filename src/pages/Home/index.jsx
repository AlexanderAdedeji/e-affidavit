import {useState} from "react"

import HomeLayout from "./layout/HomeLayout";


const Home = () => {
  const [homeState, setHomeState] = useState({
    headerTabs:"personal"
  })



  return (
    <div id="home">
      <HomeLayout setHomeState={setHomeState} homeState={homeState} />
    </div>
  );
};

export default Home;
