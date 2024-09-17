import Header from "@components/header/Header";
import TodoList from "@components/todoList/TodoList";
const App = () => {
  return (
    <div className="bg-white dark:bg-[#181824] min-h-screen">
      <Header />
      <div className="container px-5 md:px-0 mx-auto relative top-[-30px]">
        <div className="md:w-1/2 mx-auto shadow-gray-600">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
