import User from "../models/User";

var ActiveUser;

function setActiveUser(User) {
    ActiveUser = User;
}

export { ActiveUser, setActiveUser }; 