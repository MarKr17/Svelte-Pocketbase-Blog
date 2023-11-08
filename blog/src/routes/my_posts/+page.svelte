<script>
    export let data;

    let selectedItem;
    let _edit = false;
    let _delete = false;


</script>
<div class="container px-5 pt-5 mx-auto">
<h1 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">My posts</h1>
</div>
<section class="text-gray-600 body-font">
<div class="container grid grid-cols-2 px-5 py-12 mx-auto">
    <ol>
        <div class="container px-5 py-24 pr-20 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray">
                {#each data?.records as record,index}
                <li>
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <div class="container flex">
                                <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{record.category}</span>
                            </div>
                            
                            <span class="mt-1 text-gray-500 text-sm">{record.day} {record.month} {record.year}</span>
                            <div class="pt-10">
                                <input id="id" name="id" type="hidden" value={record.id} />
                                <input id="liked" name="liked" type="hidden" value={record.liked} />
                                <div>
                                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="h-4 w-4 fill-none stroke-gray-500 hover:fill-red-400 hover:stroke-red-400" viewBox="0 0 530 570" stroke-width="50" stroke-linejoin="round">
                                    <path
                                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                    </svg>
                                    <p class="px-1">{record.likes}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{record.title}</h2>
                            <p class="leading-relaxed">{record.content}</p>
                            <a class="text-indigo-500 inline-flex items-center mt-4" href="/post">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            
                        </div>
                        <input id={`post-checkbox${index}`} checked={selectedItem?.title === record.title} type="checkbox" value={JSON.stringify(record)} on:click={()=> selectedItem = (selectedItem?.title !== record.title)? record  : undefined}/>
                    </div>
                </li>
                {/each}
            </div>
        </div>  
    </ol>
    <div class="container">
    {#if selectedItem}
    <div class="container pt-0 pb-6">
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" on:click={() => (_edit = !_edit)}>Update</button>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" on:click={() => (_delete = !_delete)}>Delete</button>
    </div>
        {#if _edit}
        <form method="post" action="?/update">
            <div class="container pb-6">
                <label for="title" class="py-20">New Title</label>
                <input id="title" name="title" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={selectedItem.title}/>
            </div>
            <div class="container pb-6">
                <label for="content">New Content</label>
                <textarea id="content" name="content" type="text" rows="4"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={selectedItem.content}/>
            </div>
        
        <input id="id" name="id" type="hidden" value={selectedItem.id} />
        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
        </form>
        {/if}
        {#if _delete}
            <form method="post" action="?/delete">
            <input id="id" name="id" type="hidden" value={selectedItem.id} />
            {#if confirm}
                <label for="delete">Are you sure?</label>
                <button id="delete" name="delete" type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Delete</button>
            {:else}
            <button id="confirm" name="confirm" on:click={()=> confirm = true}>Delete</button>
            {/if}
            </form>
        {/if}
    {/if}
    </div>
</div>
</section>