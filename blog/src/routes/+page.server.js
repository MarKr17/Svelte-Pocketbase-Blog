import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';


export async function load({locals}){
    const pb = new PocketBase("http://127.0.0.1:8090");
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    const records = await pb.collection('posts').getFullList(200/* batch size */, {
        sort: '-created',
        expand: 'author',
    });
    let username;
    if (locals.userPb.authStore.token) {
        username = locals.userPb.authStore.baseModel.username;
    }
    else username =""

    const results = records.map((record) => {
        return {
            title: record.title,
            content: record.content,
            author: record.expand.author.username,
            category: record.category,
            likes: record.liked_by.length,
            month: new Date(record.created).toLocaleString('default', { month: 'long' }),
            day: new Date(record.created).getDate()

        }
    }) 
    return{
        records: results.slice(0,3),
        user:{username } 
    }
}