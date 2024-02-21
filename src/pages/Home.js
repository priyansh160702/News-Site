import { Fragment } from "react";
import MainHeader from "../components/MainHeader";
import Articles from "../components/Articles";

const Home = () => {
  return (
    <Fragment>
      <MainHeader />;
      <Articles />
    </Fragment>
  );
};

export default Home;
