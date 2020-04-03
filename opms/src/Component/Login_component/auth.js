class Auth {
    constructor() {
        this.loggedIn = true;
    }

    login(cd) {
        this.loggedIn = true;
        cd();
    }

    logout(cd) {
        this.loggedIn = false;
        cd();
    }

    islogin() {
        return this.loggedIn;
    }
}
export default new Auth();