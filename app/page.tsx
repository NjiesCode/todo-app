"use client"
import AddTodo from "./components/addTodo" 
import Todo from "./components/todo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <Todo/>
   <AddTodo/>
      <h1>Welcome Home</h1>
     
      
    </main>
  )
}
