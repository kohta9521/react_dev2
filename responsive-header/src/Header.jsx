import React, { useState, useEffect } from "react";

export default function Header() {
  const [ state, setState ] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      :  setState((prevState) => ({ ...prevState, mobileView: false}));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  })
  
}