<script>
    export let form;
    
    let thisForm;
    let showPassword = false;
    let password = '';
    let confirm = '';

    let email;
    
    export let data;

    $:{if(email && form?.error) email.focus()}
    $:passError = (password?.length && confirm?.length)? (password !== confirm)? true: false : false;
</script>
<section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
            Blog    
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign up
                </h1>
                <form bind:this={thisForm} method="post" action="?/register" class="space-y-4 md:space-y-6">
                    <div class="form-item">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input input bind:this={email} on:keydown={()=> {form.error = false; form.message = '';}}  class:fieldError={form?.error} value={form?.email?? ''} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                    </div>
                    <div class="form-item">
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username<small class="nospace"> (no spaces, min length 3) </small></label>
                        <input minlength="3"  value={form?.username?? ''} type="text" id="username" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="">
                    </div>
                    <div class="form-item">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password <small> minimum 8 characters</small></label>
                        <input bind:value={password} class:fieldError={form?.weakPassword || passError} type='password' name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <div class="form-item">
                        <label for="confirm" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input bind:value={confirm} class:fieldError={form?.weakPassword || passError} type='password' name="confirmPassword" id="confirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <div class="form-item">
                        {#if passError}
                        <small>Passwords do not match!</small>
                        {/if}
                    
                        {#if form?.error}
                        <small>{form?.message}</small>
                        {/if}
                    </div>
                    <div class="form-item">
                        <button disabled={passError} type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  </section> 
