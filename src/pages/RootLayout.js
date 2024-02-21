import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { Fragment } from "react";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
