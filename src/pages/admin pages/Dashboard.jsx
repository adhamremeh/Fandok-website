import { useParams } from "react-router-dom";
import NavBar from "../../custom components/NavBar";
import styles from "../../custom styles/styles";
import { useEffect } from "react";
import { FetchHotel } from "../../Services/FetchData";

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
                        ➡️ Information ⬅️
                    </p>
                    <p>
                        Name: adham remeh
                    </p>
                    <p>
                        Phone number: 01090408424
                    </p>
                    <p>
                        Email: adhamremeh@gmail.com
                    </p>
                    <p>
                        Room Number: 26
                    </p>
                    <button className={'my-2 mt-4 text-black hover:border-Pistachio' + styles.CustomBorder}> Confirm </button>
                    <button className={'my-0 text-black hover:border-red' + styles.CustomBorder}> Cancel </button>
                </div>
            </div>
        </>
    );   
}

function ConfirmedReservationCard() {
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
                        ✅ Confirmed ✅
                    </p>
                    <p className="text-center pb-2 italic font-bold">
                        ➡️ Information ⬅️
                    </p>
                    <p>
                        Name: adham remeh
                    </p>
                    <p>
                        Phone number: 01090408424
                    </p>
                    <p>
                        Email: adhamremeh@gmail.com
                    </p>
                    <p>
                        Room Number: 26
                    </p>
                    {/* <button className={'my-2 mt-4 text-black hover:border-Pistachio' + styles.CustomBorder}> Confirm </button> */}
                    <button className={'my-0 mt-4 text-black hover:border-red' + styles.CustomBorder}> Cancel </button>
                </div>
            </div>
        </>
    );
}

function CanceledReservationCard() {
    return (
        <>
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
                            ➡️ Information ⬅️
                        </p>
                        <p>
                            Name: adham remeh
                        </p>
                        <p>
                            Phone number: 01090408424
                        </p>
                        <p>
                            Email: adhamremeh@gmail.com
                        </p>
                        <p>
                            Room Number: 26
                        </p>
                        <p className="text-center mt-4 text-3xl italic font-bold">
                            ❌ Canceled ❌
                        </p>
                    </div>
                </div>
            </>
        </>
    );
}

function Dashboard() {

    const hotelmail = useParams()["hotelmail"];

    useEffect(() => {
        FetchHotel(hotelmail).then(() => {
            console.log(localStorage.getItem("ActiveHotel"));
        });
    }, [])

    const handleClick = (tabName) => {
        console.log(tabName);
    };

    return(
        <>
            <NavBar isHotel={true} />
            <div className="flex flex-col gap-10 p-5 justify-center items-center">
                <div className="leftNav bg-RedWood flex flex-row flex-wrap 
                gap-7 p-5 rounded-xl shadow-md shadow-SeashellLight
                items-center justify-around border-yellow border-4">
                    <button onClick={() => handleClick("Reservations")}
                    className={`hover:border-yellow focus:border-yellow focus:outline-none` + styles.CustomBorder}> Reservations </button>
                    <button onClick={() => handleClick("Confirmed")} 
                        className={`hover:border-yellow focus:border-yellow focus:outline-none` + styles.CustomBorder}> Confirmed Reservations </button>
                    <button onClick={() => handleClick("Canceled")} 
                        className={`hover:border-yellow focus:border-yellow focus:outline-none` + styles.CustomBorder}> Canceled Reservations </button>
                </div>
                <div className="showData bg-white w-full p-4 rounded-xl
                flex flex-col justify-center items-center gap-10">
                    <ReservationCard />
                    <CanceledReservationCard />
                    <CanceledReservationCard />
                    <CanceledReservationCard />
                </div>
            </div>
        </>
    );
}

export default Dashboard;