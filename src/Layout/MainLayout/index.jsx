import React from "react";
import Header from "../../components/Header/indes";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import useFetch from "../../hooks/useFetch";

const MainLayout = () => {
  const { data, loading, error } = useFetch(
    "https://6548a42bdd8ebcd4ab234d7e.mockapi.io/product"
  );
  return (
    <>
      {loading ? (
        <div>loading......</div>
      ) : (
        
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
