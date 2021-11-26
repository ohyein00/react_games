import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes,Navigate,Outlet} from 'react-router-dom';
import Step01 from "./step01";
import Step02 from "./step02";

const Subs = () => {
  return (
    <>
      <h2>subs</h2>
      <Outlet/>
      <p>안내문구</p>
    </>
  )
}


export default Subs