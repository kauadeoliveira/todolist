import { GlobalStyle } from "./assets/styles/globalStyle"
import { ThemeProvider } from "styled-components"
import dark from "./assets/styles/themes/dark"

import Header from "./ui/Header"
import Modal from "./ui/Modal"
import NewTaskButton from "./ui/NewTaskButton"
import { store } from "./store/store"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import Task from "./ui/Task"
import { ToDoList } from "./style"

export type State = ReturnType<typeof store.getState>


function App() {
  const { allTasks } = useSelector((state: State ) => state.tasks)

  useEffect(() => console.log(allTasks), [])
  return (
    <>
    <ThemeProvider theme={dark}> 
      <GlobalStyle />
      <Header />
      <ToDoList>
        {allTasks.map(task => {
          return(
            <Task title={task.title} priority={task.priority} completed={task.completed} date={task.date} key={task.id} id={task.id}/>
          )
        })}
      </ToDoList>
      <NewTaskButton />
      <Modal />
    </ThemeProvider>
    </>
  )
}

export default App
