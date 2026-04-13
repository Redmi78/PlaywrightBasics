class loginpage{

    constructor(page){
        this.page=page;
        this.userName=page.locator("[name='username']");
        this.passWord=page.locator("[name='password']");
        this.loginButton=page.locator("[type='submit']");
    }
}