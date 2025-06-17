"use client"
import { useState, useEffect } from "react";

export default function Page() {
    return (
        <div className="w-full h-full md:w-72 m-2">
            <div className="w-full h-full p-3 pb-0 bg-neutral-900 border-b-5 border-emerald-600 rounded-lg flex flex-col items-center z-30">
                <div className="-mt-15">
                    <img src="logo.png" className="scale-70" />
                    <h1 className="text-4xl text-center transform -translate-y-27 z-20">Next World Comics</h1>
                </div>
                <div className="w-full flex flex-col">
                    <button className="w-full p-3 rounded-2xl text-emerald-400 text-lg font-bold flex justify-center items-center hover:bg-emerald-600 hover:text-neutral-900 cursor-pointer transition ease-in-out duration-200">
                        <p>Icon</p>
                        <p>Pagina Inicial</p>
                    </button>
                    <button className="w-full p-3 rounded-2xl text-emerald-400 text-lg font-bold flex justify-center items-center hover:bg-emerald-600 hover:text-neutral-900 cursor-pointer transition ease-in-out duration-200">
                        <p>Icon</p>
                        <p>Mais Hqs</p>
                    </button>
                    <button className="w-full p-3 rounded-2xl text-emerald-400 text-lg font-bold flex justify-center items-center hover:bg-emerald-600 hover:text-neutral-900 cursor-pointer transition ease-in-out duration-200">
                        <p>Icon</p>
                        <p>Minhas hqs</p>
                    </button>
                    <button className="w-full p-3 rounded-2xl text-emerald-400 text-lg font-bold flex justify-center items-center hover:bg-emerald-600 hover:text-neutral-900 cursor-pointer transition ease-in-out duration-200">
                        <p>Icon</p>
                        <p>Sobre Nós</p>
                    </button>
                </div>
                <div className="w-4/5 bg-emerald-600 rounded-t-xl flex justify-between items-center relative">
                    <p className="w-5 h-5 bg-emerald-600 absolute -left-5 bottom-0 rounded-t-full rounded-l-full"><p className="w-5 h-6 bg-neutral-900 rounded-full"></p></p>
                    <button className="flex">
                        <p>Icon</p>
                        pessoa Logada
                    </button>
                    <button className="flex">
                        <p>Icon</p>
                        <p>Sair</p>
                    </button>
                    <p></p>
                </div>
            </div>
        </div>
    )
}