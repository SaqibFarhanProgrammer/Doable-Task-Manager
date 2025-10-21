import { AiOutlinePlus } from "react-icons/ai";

function Board() {
  return (
    <div className="px-12 py-8 flex flex-col gap-6 text-white h-[87%]">
      <h1 className="text-3xl normal tracking-tight">Board</h1>
      <h1 className="text-2xlpara">Todo App</h1>

      <div className="board flex gap-4 justify-between h-[66vh] w-full">
        <div className="board-child bg-[#121212] w-[24%] h-[20vh] rounded-lg border border-zinc-800 p-3 flex flex-col">
            <div className="flex justify-between items-start text-2xl">
 
          <h2 className="text-lg font-medium capitalize mb-2 px-1">Todo</h2>
          <div className="h-7 w-7 bg-zinc-800 flex justify-center items-center rounded-full cursor-pointer hover:bg-zinc-600 transition-all duration-200">

          <AiOutlinePlus className=" mx-auto" />
          </div>
            </div>

          <div className="flex-1 bg-[#1a1a1a] rounded-md border border-zinc-800"></div>
        </div>

        <div className="board-child bg-[#121212] w-[24%] h-[20vh] rounded-lg border border-zinc-800 p-3 flex flex-col">
          <h2 className="text-lg font-medium capitalize mb-2 px-1">Pending</h2>
          <div className="flex-1 bg-[#1a1a1a] rounded-md border border-zinc-800"></div>
        </div>

        <div className="board-child bg-[#121212] w-[24%] h-[20vh] rounded-lg border border-zinc-800 p-3 flex flex-col">
          <h2 className="text-lg font-medium capitalize mb-2 px-1">Testing</h2>
          <div className="flex-1 bg-[#1a1a1a] rounded-md border border-zinc-800"></div>
        </div>

        <div className="board-child bg-[#121212] w-[24%] h-[20vh] rounded-lg border border-zinc-800 p-3 flex flex-col">
          <h2 className="text-lg font-medium capitalize mb-2 px-1">
            Completed
          </h2>
          <div className="flex-1 bg-[#1a1a1a] rounded-md border border-zinc-800"></div>
        </div>
      </div>
    </div>
  );
}

export default Board;
