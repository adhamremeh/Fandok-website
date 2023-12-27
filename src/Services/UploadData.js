import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

async function UploadUser(User) {
    await setDoc(doc(db, "Users", User.Email), {
        Name: User.Name,
        Email: User.Email,
        PhoneNumber: User.PhoneNumber,
        Password: User.Password,
    });
}

async function UploadOffer(Offer) {
    await setDoc(doc(db, "RoomOffers", Offer.title), {
        Price: Offer.Price,
        Desciption: Offer.Desciption,
        Title: Offer.Title,
        RoomNum: Offer.RoomNum,
        Hotel: Offer.Hotel,
        HotelEmail: Offer.HotelEmail,
        OfferIMG: Offer.OfferIMG,
    });
}

async function UploadReservation(Reservation, HotelEmail) {
    await updateDoc(doc(db, "Hotels", HotelEmail), {
        Reservations: arrayUnion({
            Name: Reservation.Name,
            PhoneNumber: Reservation.PhoneNumber,
            NumberOfNights: Reservation.NumberOfNights,
            Date: Reservation.Date,
            RoomNum: Reservation.RoomNum,
            Status: Reservation.Status,
        })
    })
}

export { UploadUser, UploadOffer, UploadReservation };