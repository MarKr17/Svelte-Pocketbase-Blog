import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';


export async function load({locals}){
    const pb = new PocketBase("http://127.0.0.1:8090");
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    let user_id = locals.userPb.authStore.baseModel.id;
    const records = await pb.collection('posts').getFullList(200 /* batch size */, {
        sort: '-created',
        expand: 'author',
        filter: `liked_by ~ "${user_id}"`.toString(),
    });
    let username;
    if (locals.userPb.authStore.token) {
        username = locals.userPb.authStore.baseModel.username;
    }
    else username =""
    const results = records.map((record) => {
        return {
            id: record.id,
            title: record.title,
            content: record.content,
            author: record.expand.author.username,
            category: record.category,
            month: new Date(record.created).toLocaleString('default', { month: 'long' }),
            day: new Date(record.created).getDate(),
            year: new Date(record.created).getFullYear(),
            likes: record.liked_by.length,
            clicked: false,
            liked: record.liked_by.includes(user_id),
            

        }
    }) 
    return{
        records: results,
        user:{username } 
    }
}
export const actions={
    like: async ({ request, locals }) => {
        const pb = new PocketBase("http://127.0.0.1:8090");
        //sign in
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
        
        const form = await request.formData();
        const id = form.get('id')??'';
        const liked = form.get('liked') ?? '';
        if (locals.userPb.authStore.token) {
            if (liked=="true") {
                await pb.collection('posts').update(id, { 'liked_by-': locals.userPb.authStore.baseModel.id });
            }
            else {
                await pb.collection('posts').update(id, { 'liked_by+': locals.userPb.authStore.baseModel.id });
            }
            
        }
    }
}