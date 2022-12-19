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
import TaskCompleted from "./ui/TaskCompleted"

export type State = ReturnType<typeof store.getState>


function App() {
  const { incompleteTasks } = useSelector((state: State) => state.tasks)
  const { completeTasks } = useSelector((state: State) => state.tasks)
  useEffect(() => console.log(incompleteTasks), [])
  return (
    <>
    <ThemeProvider theme={dark}> 
      <GlobalStyle />
      <Header />
      <ToDoList>
        {incompleteTasks.map(task => {
          return(
            <Task title={task.title} priority={task.priority} completed={task.completed} date={task.date} key={task.id} id={task.id}/>
          )
        })}
      </ToDoList>
      <ToDoList>
        {completeTasks.map(task => {
          return(
            <TaskCompleted title={task.title} priority={task.priority} completed={task.completed} date={task.date} key={task.id} id={task.id}/>
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
