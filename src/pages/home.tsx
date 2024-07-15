// src/pages/Login.tsx
import React from "react";
import Penus from "../assets/penus.png";
import User from "../assets/user.png";
// import { FiLock, FiUser } from "react-icons/fi";

const Home: React.FC = () => {
  return (
    <>
      <nav className="mx-10 flex justify-between items-center min-w-full">
        <img className="w-24" src={Penus} alt="" />
        <h1 className=" text-white">
          SMK <span className="">PLUS</span> PELITA NUSANTARA
        </h1>
        <img className="w-24" src={User} alt="" />
      </nav>
      <main></main>
    </>
  );
};

export default Home;
