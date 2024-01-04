import React from "react";
import Header from "../../components/Header/indes";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../services/api";
import Loading from "../../components/ReuseAble/Loading";

const MainLayout = () => {
  const { data, loading, error } = useFetch(
    API_URL
  );
  return (
    <>
      {loading ? (
        <Loading/>
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
