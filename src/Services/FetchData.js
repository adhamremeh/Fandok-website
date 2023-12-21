import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import Hotel from "../models/Hotel";
import User from "../models/User";
import { ActiveHotel } from "../active models/ActiveHotel";
import { ActiveUser } from "../active models/ActiveUser";
import RoomOffer from "../models/RoomOffer";

async function FetchOffers(Email) {
    const OffersQuery = query(collection(db, "RoomOffers"), where("HotelEmail", "==", Email));

    const querySnapshot = await getDocs(OffersQuery);

    Offers = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        Offers.push(
            RoomOffer(
                data.Price,
                data.Description,
                data.Title,
                data.RoomNum,
                data.Hotel,
                data.HotelEmail,
            )
        )
    });

    return Offers;
}

async function FetchSearch(Param) {

}

async function FetchUser(Email) {
    const UserDoc = await getDoc(doc(db, "Users", Email));
    const data = UserDoc.data();

    const fetchedUser = new User(
        data.Name,
        data.Email,
        data.PhoneNumber,
        data.Password,
    );

    ActiveUser = fetchedUser;
}

async function FetchHotel(Email) {
    const HotelDoc = await getDoc(doc(db, "Hotels", Email));
    const data = HotelDoc.data();

    const fetchedHotel = new Hotel(
        data.HotelName,
        data.Address,
        data.Contacts,
        data.Reservations,
    );

    ActiveHotel = fetchedHotel;
}

export { FetchOffers, FetchReservations, FetchSearch, FetchUser, FetchHotel };