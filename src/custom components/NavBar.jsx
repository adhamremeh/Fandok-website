import { useParams } from "react-router-dom";
import LogoText from "/LogoText.png";
import styles from "../custom styles/styles";

function NavBar(props) {

    return(
        <>
        {
            props.isHotel ?
            
            // Hotel NavBar
            <div className={`text-white bg-RedWood sm:p-2 p-4 flex flex-row 
            justify-evenly items-center shadow-md shadow-RedWoodLight mb-2`}>
                <a className={`text-RedWood shadow-md shadow-CaribLight
                rounded-xl hover:text-Carib hover:-translate-y-1
                ease-in-out duration-500`+styles.CustomBorder} href={"/dash/" + useParams()["hotelmail"]}>
                    <button> DashBoard </button>
                </a>
                
                    <img className="h-16 sm:block hidden rounded-full px-3 bg-white" src={LogoText} />
                
                <a className={`text-RedWood shadow-md shadow-CaribLight
                rounded-xl hover:text-Carib hover:-translate-y-1
                ease-in-out duration-500`+ styles.CustomBorder} href={"/room-offers/" + useParams()["hotelmail"]}>
                    <button> Room Offers </button>
                </a>
            </div>
            :

            // User NavBar
                    <div className={`text-white bg-RedWood sm:p-2 p-4 flex flex-row 
            justify-evenly items-center shadow-md shadow-RedWoodLight mb-2`}>
                        <a className={`text-RedWood shadow-md shadow-CaribLight
                rounded-xl hover:text-Carib hover:-translate-y-1
                ease-in-out duration-500`+ styles.CustomBorder} href={"/dash/" + useParams()["hotelmail"]}>
                            <button> Home </button>
                        </a>

                        <img className="h-16 sm:block hidden rounded-full px-3 bg-white" src={LogoText} />

                        <a className={`text-RedWood shadow-md shadow-CaribLight
                rounded-xl hover:text-Carib hover:-translate-y-1
                ease-in-out duration-500`+ styles.CustomBorder} href={"/room-offers/" + useParams()["hotelmail"]}>
                            <button> Reserve a room </button>
                        </a>
                    </div>
        }
        </>
    ); 

}

export default NavBar;