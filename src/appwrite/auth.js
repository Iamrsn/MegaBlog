import conf  from "../conf/conf";

import { Client,ID,Account } from "appwrite";

export class AuthService{
    Client=new Client();
    Account;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.Client)
    }
    async createAccount({email,password,name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email,password,name);

        if(userAccount) {
            //call another method .. user shai hai to usko login karwa do sidhe.. 
            return this.login({email,password});
        } else {
            return userAccount;
        }

        } catch (error) {
            throw error; 
        }
    }
     async login({email,password}){
        try{
           return await this.account.createEmailSession(email,password)
        }catch(error){
            throw error;
        }
     }

     async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

}

const authservice=new AuthService()

export default authservice;