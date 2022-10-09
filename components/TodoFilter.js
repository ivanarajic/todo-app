import React from "react";

function TodoFilter({ filterStatus, setFilterStatus, clearCompleted, todos }) {
  const handleClick = (status) => {
    setFilterStatus(status);
  };
  return (
    <div>
      <div className="p-4 px-4 flex justify-between text-sm bg-[#fafafa] dark:bg-[#25273c] rounded-md rounded-t-none text-[#9293a4] dark:text-[#4d5066] shadow-xl ">
        <div>{`${todos.length} items left`}</div>
        <div className="hidden sm:flex justify-center gap-4 cursor-pointer font-bold">
          <button
            className={
              filterStatus === "all" ? "text-[#3a7bfc]" : "hover:text-[#484b6a]"
            }
            onClick={() => handleClick("all")}
          >
            All
          </button>
          <button
            className={
              filterStatus === "active"
                ? " text-[#3a7bfc] "
                : "hover:text-[#484b6a] dark:hover:text-[#e4e5f1]"
            }
            onClick={() => handleClick("active")}
          >
            Active
          </button>
          <button
            className={
              filterStatus === "completed"
                ? "text-[#3a7bfc]"
                : "hover:text-[#484b6a] dark:hover:text-[#e4e5f1]"
            }
            onClick={() => handleClick("completed")}
          >
            Completed
          </button>
        </div>

        <div className="cursor-pointer ">
          <button
            className="hover:text-[#484b6a] dark:hover:text-[#e4e5f1]"
            onClick={() => clearCompleted()}
          >
            Clear Completed
          </button>
        </div>
      </div>

      {/*Mobile*/}
      <div className="sm:hidden p-4 mt-6 px-4 flex justify-center gap-4 text-sm bg-[#fafafa] dark:bg-[#25273c] font-bold rounded-md text-[#9293a4] dark:text-[#4d5066] shadow-xl">
        <button
          className={
            filterStatus === "all" ? "text-[#3a7bfc] " : "hover:text-[#484b6a] "
          }
          onClick={() => handleClick("all")}
        >
          All
        </button>
        <button
          className={
            filterStatus === "active"
              ? " text-[#3a7bfc] "
              : "hover:text-[#484b6a] dark:hover:text-[#e4e5f1] "
          }
          onClick={() => handleClick("active")}
        >
          Active
        </button>
        <button
          className={
            filterStatus === "completed"
              ? "text-[#3a7bfc]"
              : "hover:text-[#484b6a] dark:hover:text-[#e4e5f1] "
          }
          onClick={() => handleClick("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoFilter;
