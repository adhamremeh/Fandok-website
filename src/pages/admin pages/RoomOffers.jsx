import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../custom components/NavBar";
import styles from "../../custom styles/styles";
import { FetchOffers } from "../../Services/FetchData";
import { UploadOffer } from "../../Services/UploadData";
import RoomOffer from "../../models/RoomOffer";

function OfferCard({offer}) {
    return (
        <>
            <div className={window.innerWidth < 640 ? styles.CustomBorder +
                `hover:-translate-y-1 hover:border-black hover:border-2 
            duration-200 p-0 rounded-lg sm:w-[650px] lg:w-[780px] w-[full] 
            bg-RedWood text-white flex sm:flex-row flex-col items-center`
                : `hover:-translate-y-1 hover:border-black hover:border-2 
            duration-200 p-0 rounded-lg sm:w-[650px] lg:w-[1000px] w-[full] 
            bg-RedWood text-white flex sm:flex-row flex-col items-center`}>
                <img className="sm:rounded-l-lg rounded-t-lg w-[370px] h-[270px] object-cover" src={offer.OfferIMG} />
                <div className="flex flex-col px-5 w-full py-2">
                    <p className="text-center pb-2 italic font-bold">
                        ➡️ Details ⬅️
                    </p>
                    <p className="text-center pb-2 italic font-bold">
                        {offer.Hotel}
                    </p>
                    <p>
                        {offer.Title}
                    </p>
                    <p>
                        {offer.Description}
                    </p>
                    <p>
                        Price: {offer.price} / night
                    </p>
                    <p>
                        Room Number: {offer.RoomNum}
                    </p>
                    <p>
                        Email: {offer.HotelEmail}
                    </p>
                    <button className={'mt-6 text-black hover:border-red' + styles.CustomBorder}> Delete this offer ? </button>
                </div>
            </div>
        </>
    );
}

function RoomOffers() {

    const hotelmail = useParams()["hotelmail"];
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        FetchOffers(hotelmail).then((res) => {
            setOffers(res);
        });
    }, []);

    const AddOffer = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const offer = new RoomOffer(
            formData.get("price"),
            formData.get("description"),
            formData.get("title"),
            formData.get("roomNum"),
            JSON.parse(localStorage.getItem("ActiveHotel")).HotelName,
            hotelmail,
            formData.get("img"),
        );

        await UploadOffer(offer);
        offers.push(offer);
        setOffers(Array.from(offers));
    }; 

    return(
        <>
            <NavBar isHotel={true}/>
            <div className="flex sm:flex-row flex-col  gap-4 p-4 justify-center items-center">
                <div className="leftNav bg-RedWood flex flex-row flex-wrap 
                gap-7 p-5 rounded-xl shadow-md shadow-SeashellLight
                items-center justify-center border-yellow border-4">
                    <form onSubmit={AddOffer} className="flex flex-col w-full justify-center items-center gap-7">
                        <img className="h-24 rounded-lg hover:cursor-pointer" src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"/>
                        <input className="rounded-lg p-2 w-full" name="img" placeholder="Image Link" />
                        <input className="rounded-lg p-2 w-full" name="title" placeholder="offer title" />
                        <textarea className="p-2 rounded-lg w-full" name="description" placeholder="description"/>
                        <input className="p-2 rounded-lg" type="number" name="price" placeholder="Price/night"/>
                        <input className="p-2 rounded-lg" type="number" name="roomNum" placeholder="Room Number" />
                        <input type="Submit" value="Add Offer" className="shadow-md
                        shadow-RedWoodLight p-3 px-6 m-0 rounded-lg border-black border-r-4 
                        border-l-2 border-t-2 border-b-4 hover:-translate-y-1 duration-500 
                        hover:cursor-pointer bg-white font-semibold" />
                    </form>
                </div>
                <div className="showData overflow-scroll bg-white w-full p-4 rounded-xl
                flex flex-col justify-start h-[83vh] items-center gap-10">
                    <h1> Rooms availabel to users </h1>
                    {
                        offers.map((item, index) => {
                            return (<OfferCard offer={item} />);
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default RoomOffers;