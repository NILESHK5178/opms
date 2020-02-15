class Auth {
    constructor() {
        this.loggedIn = false;
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