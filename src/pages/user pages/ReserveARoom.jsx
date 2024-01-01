import { useParams } from "react-router-dom";
import NavBar from "../../custom components/NavBar";
import { useEffect, useState } from "react";
import { FetchUserOffers } from "../../Services/FetchData";
import styles from "../../custom styles/styles";

function OfferCard({offer, id}) {

    const closePopUp = (e) => {
        if (e.target.id == (id+"popup")){
            document.getElementById(e.target.id).classList.add("hidden");
            document.getElementById(e.target.id).classList.remove("flex");
        }
    }

    const showPopUp = (id) => {
        document.getElementById(id+"popup").classList.add("flex");
        document.getElementById(id + "popup").classList.remove("hidden");
    }

    const makeReservation = (reservationOffer) => {
        
    }

    return(
        <>
            <div id={id} onClick={() => {showPopUp(id)}} className={window.innerWidth < 640 ? styles.CustomBorder +
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
                    <p className="text-3xl font-semibold">
                        {offer.Title}
                    </p>
                    <p className="text-xl font-semibold py-2">
                        Price: {offer.price} / night
                    </p>
                    <button className={'mt-6 text-black' + styles.CustomBorder}> See Full Details </button>
                </div>
            </div>

            <div id={id+"popup"} onClick={closePopUp} className="hidden fixed left-0 top-0 bg-opacity-75 bg-black w-screen h-screen
            flex-col items-center justify-center z-[99]">
                <div onClick={ () => {} } className={window.innerWidth < 640 ? styles.CustomBorder +
                `hover:-translate-y-1 hover:border-black hover:border-2
                duration-200 p-0 rounded-lg sm:w-[650px] lg:w-[780px] w-full absolute
                bg-RedWood text-white flex sm:flex-row flex-col items-center `
                : `hover:-translate-y-1 hover:border-black hover:border-2
                duration-200 p-0 rounded-lg sm:w-[650px] lg:w-[1000px] w-full absolute
                bg-RedWood text-white flex sm:flex-row flex-col items-center`}>
                    <img className="sm:rounded-l-lg rounded-t-lg w-[370px] h-[350px] object-cover" src={offer.OfferIMG} />
                    <div className="flex flex-col px-5 w-full py-2">
                        <p className="text-center pb-2 italic font-bold">
                            ➡️ Details ⬅️
                        </p>
                        <p className="text-center text-3xl pb-2 italic font-bold">
                            {offer.Hotel}
                        </p>
                        <p className="text-2xl">
                            {offer.Title}
                        </p>
                        <p className="text-xl py-1">
                            {offer.Description}
                        </p>
                        <p className="py-1">
                            Price: {offer.price} / night
                        </p>
                        <p className="py-1">
                            Room Number: {offer.RoomNum}
                        </p>
                        <p className="py-1">
                            Email: {offer.HotelEmail}
                        </p>
                        <button className={'mt-6 text-black hover:border-black' + styles.CustomBorder}> Reserve This Room ? </button>
                    </div>
                </div>
            </div>
        </>
    );
}

function ReserveARoom() {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        FetchUserOffers().then((res) => {setOffers(res)});
    }, [])

    return(
        <>
            <NavBar />
            <h1 className="text-center mt-8"> Reserve a room for your needs <span className="text-xl font-semibold italic"> <br /> with <span className="text-red">fandok</span> you will find your desired room </span> </h1>
            <div className="flex sm:flex-row flex-col  gap-4 p-4 justify-center items-center">
                <div className="leftNav bg-RedWood flex flex-row flex-wrap 
                    gap-7 p-5 rounded-xl shadow-md shadow-SeashellLight
                    items-center justify-center border-yellow border-4">
                    <form className="flex flex-col w-full justify-center items-center gap-7">
                        <img className="h-24 rounded-lg hover:cursor-pointer" src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" />
                        <input className="rounded-lg p-2 w-full" name="img" placeholder="Image Link" />
                        <input className="rounded-lg p-2 w-full" name="title" placeholder="offer title" />
                        <textarea className="p-2 rounded-lg w-full" name="description" placeholder="description" />
                        <input className="p-2 rounded-lg" type="number" name="price" placeholder="Price/night" />
                        <input className="p-2 rounded-lg" type="number" name="roomNum" placeholder="Room Number" />
                        <input type="Submit" value="Add Offer" className="shadow-md
                            shadow-RedWoodLight p-3 px-6 m-0 rounded-lg border-black border-r-4 
                            border-l-2 border-t-2 border-b-4 hover:-translate-y-1 duration-500 
                            hover:cursor-pointer bg-white font-semibold" />
                    </form>
                </div>
                <div className="showData overflow-scroll bg-white w-full p-4 rounded-xl
                    flex flex-col justify-start h-[83vh] items-center gap-10">
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

export default ReserveARoom;