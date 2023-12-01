import LogoText from "/LogoText.png";

function Home() {
    return(
        <>
            <div className="fixed bg-RedWood p-1 w-[25vw]"></div>
            <div className="w-screen h-screen flex flex-col justify-center items-center bg-white">
                <div className="sm:h-[30vh] md:w-[40vw] h-[10vh] w-[80vw] 
                absolute animate-intro">
                    <img src={LogoText} />
                </div>
                <div className="w-screen flex flex-row gap-5 items-center 
                justify-center text-white text-xl animate-fadeIn">
                    <a className="text-white hover:text-white
                    hover:-translate-y-2 duration-700" href="/SignIN">
                        <button className="shadow-md shadow-Seashell bg-RedWood
                        sm:text-xl text-base">Sign in</button>
                    </a>
                    <span className="text-black text-xl font-semibold">/</span>
                    <a className="text-white hover:text-white
                    hover:-translate-y-2 duration-700" href="/SignUP">
                        <button className="shadow-md shadow-Seashell bg-RedWood
                        sm:text-xl text-base">Sign up</button>
                    </a>
                </div>  
            </div>
            <div className="fixed bottom-0 bg-RedWood p-1 w-screen"></div>
        </>
    );
}

export default Home;