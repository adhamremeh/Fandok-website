import LogoText from "/LogoText.png";
import FormLabel from "../custom components/FormLabel";
import styles from "../custom styles/styles";

function SignUP () {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        window.location = "/user/" + formData.get("email");
    };


    return(
        <>
            <div className="fixed bg-RedWood p-1 w-[50vw]"></div>
            <div className="flex flex-col h-screen w-screen justify-center 
            items-center gap-10 sm:text-left text-center">
                <div className="sm:h-[30vh] md:w-[40vw] h-[15vh] w-[80vw] 
                absolute animate-signLogo">
                    <img src={LogoText} />
                </div>
                
                <div className="p-10"></div>
                <p className="tracking-[13px] text-3xl font-bold p-0 mt-5 animate-fastFadeIn">
                    Sign Up for a new account
                </p>
                <form className="flex flex-col justify-center items-center
                sm:w-[60vw] md:w-[40vw] lg:w-[25vw] w-[85vw] gap-7 font-semibold 
                animate-fastFadeIn" onSubmit={handleSubmit}>
                    <FormLabel title="Your Name:" name="name"/>
                    <FormLabel title="Email:" name="email" type="email"/>
                    <FormLabel title="Phone Number:" name="phoneNumber" type="number"/>
                    <FormLabel title="Password:" name="password" type="password" />

                    <input type="submit" value="Sign Up" className={`shadow-md
                    shadow-RedWoodLight p-3 px-6 mt-5 rounded-lg hover:-translate-y-1 duration-500 
                    hover:cursor-pointer` + styles.CustomBorder}/>
                    
                </form>
                <span className="text-lg font-bold tracking-[8px]">you already have an account ? <a className="tracking-[3px]" href="/SignIN">sign in</a></span>
            </div>
            <div className="fixed bottom-0 bg-RedWood p-1 w-screen"></div>
        </>
    );
}

export default SignUP;