
import { AppBar, Toolbar, Typography, makeStyles } from "@mui/material";
import React from "react";

export default function Header() {
  // header: {
  //   backgroundColor: "#400CCC",
  // },
  // logo: {
  //   fontFamily: "Work Sans, sans-serif",
  //   fontWeight: 600,
  //   color: "#FFFEFE",
  //   textAlign: "left",
  // }

  const displayDesktop = () => {
    return <Toolbar>Hi From Desktop Header</Toolbar>
  };

  const femmecubatorLogo = (
    <Typography variant='h6' component='h1'>
      Femmecubator
    </Typography>
  )

  return (
    <header>
      <AppBar>
        {displayDesktop()}
      </AppBar>
    </header>
  );
}