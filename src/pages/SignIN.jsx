import LogoText from "/LogoText.png";
import FormLabel from "../custom components/FormLabel";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Services/firebase";

function SignIN() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        signInWithEmailAndPassword(auth, formData.get("email"), formData.get("password"))
            .then((userCredential) => {
                const user = userCredential.user;

                console.log(formData.get("email"));

                if (formData.get("email").split("@")[1] == "fandok.com") {
                    window.location = "/dash/" + formData.get("email");
                } else {
                    window.location = "/user-home/" + formData.get("email");
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorMessage);
            });

    };

    return (
        <>
            <div className="fixed bg-RedWood p-1 w-[75vw]"></div>
            <div className="flex flex-col h-screen w-screen justify-center 
            items-center gap-10 sm:text-left text-center">
                <div className="sm:h-[30vh] md:w-[40vw] h-[10vh] w-[80vw] 
                absolute animate-signLogo">
                    <img src={LogoText} />
                </div>

                <div className="p-10"></div>
                <p className="tracking-[13px] text-center text-3xl font-bold p-2 animate-fastFadeIn">
                    Sign in to your account
                </p>
                <form className="flex flex-col justify-center items-center
                sm:w-[60vw] md:w-[40vw] lg:w-[25vw] w-[85vw] gap-7 font-semibold 
                animate-fastFadeIn" onSubmit={handleSubmit}>
                    <FormLabel title="Email:" name="email" type="email" />
                    <FormLabel title="Password:" name="password" type="password" />

                    <input type="submit" value="Sign IN" className="shadow-md
                    shadow-RedWoodLight p-3 px-6 m-5 rounded-lg border-black border-r-4 
                    border-l-2 border-t-2 border-b-4 hover:-translate-y-1 duration-500 
                    hover:cursor-pointer"/>

                </form>
                <span className="text-lg font-bold tracking-[8px]">you don't have an account ? <a className="tracking-[3px]" href="/SignUP">create one</a></span>
            </div>
            <div className="fixed bottom-0 bg-RedWood p-1 w-screen"></div>
        </>
    );
}

export default SignIN;