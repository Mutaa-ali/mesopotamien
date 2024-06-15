import { database, ID } from "@/libs/AppWriteClient";
import { Client, Functions } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('6651c8be0032a2e015c0'); // Your project ID

const functions = new Functions(client);

const useCreateLike = async (userId: string, postId: string) => {
    try {
        await database.createDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_LIKE), 
            ID.unique(), 
        {
            user_id: userId,
            post_id: postId,
        });
    
            await functions.createExecution(
                '6651d4600035e433ab8a', // functionId
                JSON.stringify({
                    post_id: postId,
                    user_id: userId,
                }),
                true
              
        );
    } catch (error) {
        throw error
    }
}

export default useCreateLike