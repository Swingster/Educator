import { ID } from 'appwrite';

import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";

export async function createUserAccount(user: INewUser){
    try{
        const newAccount = await account.create(
            ID.unique(),
            user.name,
            user.email,
            user.password,
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            email: newAccount.email,
            name: newAccount.name,
            imageUrl: avatarUrl,
            username: user.username,
        })

        return newUser;
        } catch(error){
        console.log(error);
        return error;
    }
}

export async function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )

        return newUser;
    } catch (error) {
        console.log(error);
    }
}

