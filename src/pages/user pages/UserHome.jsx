import { useEffect } from "react";
import NavBar from "../../custom components/NavBar";
import { FetchUser } from "../../Services/FetchData";
import { useParams } from "react-router-dom";

function RoomCard() {
    return(
        <>
            <div className="bg-RedWoodLight p-5">
                <img className="h-64 w-64" src="https://cf.bstatic.com/xdata/images/hotel/square600/506535535.webp?k=bcb12700fb51e0c92b20f6522a4c18de6a37a41a2636bef24836d981fff310f6&o=" />
            </div>
        </>
    );
}

function HomeUser() {

    const usermail = useParams()["email"];

    useEffect(() => {
        FetchUser(usermail).then( () => {
            console.log(JSON.parse(localStorage.getItem("ActiveUser")))
        });
    }, [])


    return(
        <>
            <NavBar/>
            <div className="p-0 py-10 min-h-screen flex flex-col">
                <p className="text-xl font-bold pl-4 pb-4"> Recommended for you </p>
                <div className="w-screen p-5 bg-RedWoodLight">
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />


                </div>
            </div>
        </>
    );
}

export default HomeUser;