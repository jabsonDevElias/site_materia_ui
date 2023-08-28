import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";
import React from "react";


function App() {
  const [mode,setMode] = React.useState("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between" mt={7}>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
      </Box> 
      <Add/>
      </ThemeProvider>
  );
}

export default App;
