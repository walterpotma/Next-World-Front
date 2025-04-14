"use client"

export default function Page(){
    return(
        <div className="w-full px-4 py-2 flex justify-between">
            <div className="flex justify-start items-center min-w-40">
                <img src="/logo_nw.png" alt="" className="w-12 "/>
                <h1 className="text-2xl italic font-bold text-[#61bc84] translate-y-1">NW-Comics</h1>
            </div>
            <div>
                <input type="text" placeholder="Pesquisar"/>
            </div>
            <button>

            </button>
            <nav className="bg-slate-700 w-76 h-screen fixed top-0 right-0">
                <button className="w-full px-6 py-3 hover:bg-[#2E8B57] font-bold flex justify-start transition duration-200 cursor-pointer">1</button>
                <button className="w-full px-6 py-3 hover:bg-[#2E8B57] font-bold flex justify-start transition duration-200 cursor-pointer">2</button>
                <button className="w-full px-6 py-3 hover:bg-[#2E8B57] font-bold flex justify-start transition duration-200 cursor-pointer">3</button>
                <button className="w-full px-6 py-3 hover:bg-[#2E8B57] font-bold flex justify-start transition duration-200 cursor-pointer">4</button>
                <button className="w-full px-6 py-3 hover:bg-[#2E8B57] font-bold flex justify-start transition duration-200 cursor-pointer">5</button>
            </nav>
        </div>
    )
}