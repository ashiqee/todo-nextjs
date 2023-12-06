import AddTask from "./components/AddTask";
import { Fa500Px, FaBeer } from "react-icons/fa";
import TodoList from "./components/TodoList";
import { getAllTodos } from "../../api/api";

export default function Home() {
  return (
    <main>
      <div className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">TODO APP</h1>
          <AddTask />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
