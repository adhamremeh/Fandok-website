function setActiveUser(User) {
    localStorage.setItem("ActiveUser", JSON.stringify(User));
}

export { setActiveUser }; 