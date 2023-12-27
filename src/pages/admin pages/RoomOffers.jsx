import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../custom components/NavBar";
import styles from "../../custom styles/styles";
import { FetchOffers } from "../../Services/FetchData";
import { UploadOffer } from "../../Services/UploadData";
import RoomOffer from "../../models/RoomOffer";

function ReservationCard() {
    return (
        <>
            <div className={window.innerWidth < 640 ? styles.CustomBorder +
                `hover:-translate-y-1 hover:border-black hover:border-2 
            duration-200 p-0 rounded-lg sm:w-[650px] lg:w-[780px] w-[full] 
            bg-RedWood text-white flex sm:flex-row flex-col items-center`
                : `hover:-translate-y-1 hover:border-black hover:border-2 
            duration-200 p-0 rounded-lg sm:w-[650px] lg:w-[1000px] w-[full] 
            bg-RedWood text-white flex sm:flex-row flex-col items-center`}>
                <img className="sm:rounded-l-lg rounded-t-lg w-[370px] h-[270px] object-cover" src="https://q-xx.bstatic.com/xdata/images/hotel/max500/453885496.jpg?k=442b4e01e2c5472490b022d65edc264e5b7b52c83edaffc1636716c399f1025b&o=" />
                <div className="flex flex-col px-5 w-full py-2">
                    <p className="text-center pb-2 italic font-bold">
                        ➡️ Details ⬅️
                    </p>
                    <p>
                        Room with sea view
                    </p>
                    <p>
                        Phone number: 01090408424
                    </p>
                    <p>
                        Email: adhamremeh@gmail.com
                    </p>
                    <p>
                        Price: 260 / night
                    </p>
                    <button className={'mt-6 text-black hover:border-red' + styles.CustomBorder}> Delete this offer ? </button>
                </div>
            </div>
        </>
    );
}

function RoomOffers() {

    const hotelmail = useParams()["hotelmail"];

    useEffect(() => {
        // FetchOffers(hotelmail).then((res) => {
        //     console.log(res);
        // });
        console.log(JSON.parse(localStorage.getItem("ActiveHotel")));
    }, []);

    const AddOffer = () => {
        e.preventDefault();
        const formData = new FormData(e.target);

        UploadOffer(
            RoomOffer(
                formData.get("price"),
                formData.get("description"),
                formData.get("title"),
                formData.get("roomNum"),
                fo
            )
        )

    }; 

    return(
        <>
            <NavBar isHotel={true}/>
            <div className="flex sm:flex-row flex-col  gap-4 p-4 justify-center items-center">
                <div className="leftNav bg-RedWood flex flex-row flex-wrap 
                gap-7 p-5 rounded-xl shadow-md shadow-SeashellLight
                items-center justify-center border-yellow border-4">
                    <form className="flex flex-col w-full justify-center items-center gap-7">
                        <img className="h-24 rounded-lg hover:cursor-pointer" src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"/>
                        <input className="rounded-lg p-2 w-full" name="img" placeholder="Image Link" />
                        <input className="rounded-lg p-2 w-full" name="title" placeholder="offer title" />
                        <textarea className="p-2 rounded-lg w-full" name="description" placeholder="description"/>
                        <input className="p-2 rounded-lg" type="number" name="price" placeholder="Price/night"/>
                        <input type="Submit" value="Add Offer" className="shadow-md
                        shadow-RedWoodLight p-3 px-6 m-5 rounded-lg border-black border-r-4 
                        border-l-2 border-t-2 border-b-4 hover:-translate-y-1 duration-500 
                        hover:cursor-pointer bg-white font-semibold" />
                    </form>
                </div>
                <div className="showData overflow-scroll bg-white w-full p-4 rounded-xl
                flex flex-col justify-start h-[83vh] items-center gap-10">
                    <h1> Rooms availabel to users </h1>
                    <ReservationCard />
                    <ReservationCard />
                    <ReservationCard />
                    <ReservationCard />
                    <ReservationCard /> 
                </div>
            </div>
        </>
    );
}

export default RoomOffers;