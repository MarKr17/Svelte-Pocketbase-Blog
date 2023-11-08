import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    console.log('base token',locals.userPb.authStore.token);
    console.log('valid',locals.userPb.authStore.isValid);
    if(!locals.userPb.authStore.token) throw redirect(303,'/login');
    console.log(locals.userPb.authStore.baseModel.id)
    let username;
    if (locals.userPb.authStore.token) {
        username = locals.userPb.authStore.baseModel.username;
    }
    else username =""

    const user = {
        username
    }
    
    const records = await locals.userPb.collection('posts').getFullList(200 /* batch size */, {
    
    });

    const results = records.map((record) => {
        return {
            title: record.title,
            content: record.content,
            category: record.category,
            likes: record.liked_by.length,
            id: record.id,
            author: record.author,
            month: new Date(record.created).toLocaleString('default', { month: 'long' }),
            day: new Date(record.created).getDate(),
            year: new Date(record.created).getFullYear(),
        }
    })
    return{
        records: results,
        user
    }
}


export const actions={
    update: async({request})=>{
        const pb = new PocketBase("http://127.0.0.1:8090");
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

        const form = await request.formData();

        const title = form.get('title')?? '';
        const content = form.get('content')??'';
        const id = form.get('id')??'';

        const data={
            title,
            content
        }
        await pb.collection('posts').update(id, data);

    },
    delete: async({request})=>{
        const pb = new PocketBase("http://127.0.0.1:8090");
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

        const form = await request.formData();
        const id = form.get('id')??'';

        await pb.collection('posts').delete(id);

    }
}