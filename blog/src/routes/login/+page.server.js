import { redirect } from '@sveltejs/kit';
export function load(){
    let username =""

    const user = {
        username
    }
    return{
        user
    }
}


export const actions = {
    login: async({cookies,request,locals})=>{

        const loginFormData = await request.formData();
        const email = loginFormData.get('email')?.toString()??'';
        const password = loginFormData.get('password')?.toString()??'';

        let loginResponse={
            email,
            error: true,
            message: '',
        }

        try {
            await locals.userPb.collection('users').authWithPassword(
                email,
                password
            );
            //console.log('auth store',locals.pb.authStore);
 
            
            if (locals.userPb.authStore.baseToken) throw redirect(303, '/')
            
        }

        finally{
            if(!locals.userPb.authStore.baseToken) return loginResponse
        }


        
    },

}