<script>
    let data;
    let selected;
    let categories =[
        'Cooking',
        'Travel', 
        'Finance', 
        'Gaming', 
        'Fashion', 
        'Make-up'
    ]
</script>
<div class="container px-5 pt-5 mx-auto">
    <h1 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">Create</h1>
</div>
<form method="post" action="?/create">
<div class="container px-5 py-24 mx-auto">
    <div class="container pb-6 columns-2">
        <div class="">
            <label for="title" class="py-20">Title</label>
            <input id="title" name="title" type="text" required class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="form-item">
            <label for="title" class="py-20">Category</label>
            <select name ="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={selected}>
                {#each categories as value}<option {value}>{value}</option>{/each}
            </select>
        </div>
    </div>
    <div class="container pb-6">
        <label for="content">Content</label>
        <textarea id="content" name="content" required type="text" rows="4"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div class="container mx-auto">
        <button type="submit" class="inline-flex items-center bg-primary-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-white mt-4 md:mt-0">Submit</button>
    </div>
    
</div>
</form>