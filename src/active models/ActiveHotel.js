function setActiveHotel(Hotel) {
    localStorage.setItem("ActiveHotel", JSON.stringify(Hotel));
}

export { setActiveHotel }; 