import { GlobalStyle } from "./assets/styles/globalStyle"
import { ThemeProvider } from "styled-components"
import dark from "./assets/styles/themes/dark"

import Header from "./ui/Header"
import Modal from "./ui/Modal"
import NewTaskButton from "./ui/NewTaskButton"
import { store } from "./store/store"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export type State = ReturnType<typeof store.getState>


function App() {
  const { allTasks } = useSelector((state: State ) => state.tasks)

  useEffect(() => console.log(allTasks), [])
  return (
    <>
    <ThemeProvider theme={dark}> 
      <GlobalStyle />
      <Header />
      <ul>
        {allTasks.map(task => {
          return(
            <li>{task.title}</li>
          )
        })}
      </ul>
      <NewTaskButton />
      <Modal />
    </ThemeProvider>
    </>
  )
}

export default App
