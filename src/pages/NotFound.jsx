function NotFound() {
    return(
        <>
            <div className="w-screen h-screen text-3xl font-extrabold flex flex-col 
            justify-center items-center gap-16">
                <p className="sm:text-3xl text-2xl px-7 text-left">
                    There is no page like this ? are you sure you are in the right place ???
                </p>
                <div className="flex sm:flex-row flex-col-reverse items-center 
                sm:gap-10 gap-10 sm:px-[30px] md:px-[17vw] lg:px-[20vw] px-16 justify-center w-full
                sm:text-3xl text-xl">
                    <a className="h-full w-full" href="/">
                        <button className="bg-RedWood text-white shadow-lg 
                        shadow-CaribLight border-black border-r-4 border-l-2 border-t-2 
                        border-b-4 hover:border-black hover:-translate-y-1 ease-in-out
                        duration-500 transition-all h-full w-full"> no, guide me 🙄 </button>
                    </a>
                    <button onClick={() => { alert("Liaaaar 😡")}} className="bg-RedWood text-white shadow-lg 
                    shadow-CaribLight border-black border-r-4 border-l-2 border-t-2 
                    border-b-4 hover:border-black hover:-translate-y-1 ease-in-out
                    duration-500 transition-all h-full w-full"> yes 🤥 </button>
                </div>
            </div>
        </>
    );
}

export default NotFound;