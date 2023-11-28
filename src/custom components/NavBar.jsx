import { useParams } from "react-router-dom";
import Logo from "/Logo.png";
import LogoText from "/LogoText.png";

import styles from "../custom styles/styles";

function NavBar(props) {

    console.log(document.URL);
    
    return(
        <>
        {
            props.isHotel ?
            
            // Hotel NavBar
            <div className={`text-white bg-Carib sm:p-2 p-4 flex flex-row 
            justify-evenly items-center shadow-md`}>
                <a className={`text-RedWood shadow-md shadow-CaribLight
                rounded-xl hover:text-Carib hover:-translate-y-1
                ease-in-out duration-500`+styles.CustomBorder} href={"/dash/"+useParams()["hotelname"]+"/"+useParams()["password"]}>
                    <button> DashBoard </button>
                </a>
                
                    <img className="h-16 sm:block hidden rounded-full bg-white" src={LogoText} />
                
                <a className={`text-RedWood shadow-md shadow-CaribLight
                rounded-xl hover:text-Carib hover:-translate-y-1
                ease-in-out duration-500`+ styles.CustomBorder} href={"/room-offers/" + useParams()["hotelname"] + "/" + useParams()["password"]}>
                    <button> Room Offers </button>
                </a>
            </div>
            :

            // User NavBar
            <div className="text-white bg-Seashell p-5 flex flex-row 
            justify-evenly items-center">
                <a href="/"><button> Home </button></a>
                <img className="h-10" src={Logo} />
                <a><button> Reserve a Room </button></a>
            </div>
        }
        </>
    ); 

}

export default NavBar;