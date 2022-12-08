import { GlobalStyle } from "./assets/styles/globalStyle"
import { ThemeProvider } from "styled-components"
import dark from "./assets/styles/themes/dark"

import Header from "./ui/Header"
import Modal from "./ui/Modal"
import NewTaskButton from "./ui/NewTaskButton"

function App() {

  return (
    <>
    <ThemeProvider theme={dark}> 
      <GlobalStyle />
      <Header />
      <NewTaskButton />
      <Modal />
    </ThemeProvider>
    </>
  )
}

export default App
