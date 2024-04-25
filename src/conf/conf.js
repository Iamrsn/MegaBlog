//environment variable sara string me hona chayey..
//waha baar baar import env karwane me load ni hota tha to yaha ek jagah ek baar kar lege 
const conf={
    appwriteUrl:String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteprojectId:String(import.meta.env.VITE_PROJECT_ID),
    appwritedatabseId:String(import.meta.env.VITE_DATABASE_ID),
    appwritecollectionId:String(import.meta.env.VITE_COLLECTION_ID),
    appwritebucketId:String(import.meta.env.VITE_BUCKET_ID),
    
    //yaha sab value sath me aayega or hardam string me aayega..
}

export default conf