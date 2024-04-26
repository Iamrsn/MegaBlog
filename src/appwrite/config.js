import conf  from "../conf/conf";

import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createpost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwritedatabseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createpost :: error",error);
        }
    }

    async updatepost(slug,{title,content,featuredImage,status,userId}){
        //slug ko alag islie lie post ka id unique hoga wo hame sabse phele dega
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabseId,
                conf.appwritecollectionId,
                slug,     //slug document id hi hai..
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatepost :: error",error);
        }
    }

    async deletepost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwritedatabseId,
                conf.appwritecollectionId,
                slug,
            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: deletepost :: error",error);
            return false;
        }
    }

    async getpost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabseId,
                conf.appwritecollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getpost :: error",error);
            return false;
        }
    }

    async getposts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabseId,
                conf.appwritecollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getposts :: error",error);
            return false;
        }
    }

    //file upload service

    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritebucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadfile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwritebucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwritebucketId,
            fileId
        )
    }
}

const serive=new Service()

export default serive;