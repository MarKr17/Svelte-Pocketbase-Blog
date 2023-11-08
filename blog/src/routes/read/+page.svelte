<script>
    export let data;
    import { page } from '$app/stores';
</script>
<div class="container px-5 pt-5 mx-auto">
    <h1 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">Read</h1>
</div>
<section class="text-gray-600 body-font overflow-hidden">
    <ol>
        <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray">
        {#each data?.records as record}
        <li>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <div class="container flex">
                        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{record.category}</span>
                    </div>
                    <span class="mt-1 text-gray-500 text-sm">{record.day} {record.month} {record.year}</span>
                    <div class="pt-10">
                        <form method="post" action="?/like">
                        <input id="id" name="id" type="hidden" value={record.id} />
                        <input id="liked" name="liked" type="hidden" value={record.liked} />
                        <button type="submit" on:click ={()=>record.clicked=!record.clicked}>
                            {#if $page.data.user.username != '' && record.liked}
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="h-4 w-4 fill-red-400 stroke-red-400" viewBox="0 0 530 570" stroke-width="50" stroke-linejoin="round">
                                <path
                                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                </svg>
                                <p class="px-1">{record.likes}</p>
                                </span>

                            {:else}
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="h-4 w-4 fill-none stroke-gray-500 hover:fill-red-400 hover:stroke-red-400" viewBox="0 0 530 570" stroke-width="50" stroke-linejoin="round">
                                <path
                                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                </svg>
                                <p class="px-1">{record.likes}</p>
                                </span>
                            {/if}
                        </button>
                        </form>
                    </div>
                </div>
                <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{record.title}</h2>
                    <p class="leading-relaxed">{record.content}</p>
                    <a class="text-indigo-500 inline-flex items-center mt-4" href="/post/{record.id}">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </li>
        {/each}
    </div>
    </div>
    </ol>
  </section>