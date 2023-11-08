import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD } from '$env/static/private';
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
    return {
        user
    }
}

export const actions={
    create: async ({request, locals})=>{
        const pb = new PocketBase("http://127.0.0.1:8090");
        //sign in
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
        
        const form = await request.formData();

        const title = form.get('title')?? '';
        const content = form.get('content') ?? '';
        let category = form.get('category') ?? '';
        category = category;
        const author= locals.userPb.authStore.baseModel.id;
        const data = {
            title,
            content,
            author,
            category,
        };
        console.log(data)
        await locals.userPb.collection('posts').create(data);
        //await pb.collection('posts').create(data);


    }
}