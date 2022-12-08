import { GlobalStyle } from "./assets/globalStyle/globalStyle"
import Header from "./ui/Header"
import Modal from "./ui/Modal"
import NewTaskButton from "./ui/NewTaskButton"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <NewTaskButton />
      <Modal />
    </>
  )
}

export default App
