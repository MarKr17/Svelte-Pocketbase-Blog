<script>
   export let data;
</script>
<section class="text-gray-600 body-font overflow-hidden">
    <div class="container py-24 columns-3 mx-auto">
    <ol class="items-center justify-center px-10">
        {#each data?.records as record}
        <li>
            <div class="container">
                <div class="">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{record.category}</span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{record.title}</h2>
                    <p class="leading-relaxed mb-8">{record.content}</p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <a class=" p-3 text-indigo-500 inline-flex items-center" href="/post">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="h-4 w-4 fill-none stroke-gray-500 hover:fill-red-400 hover:stroke-red-400" viewBox="0 0 530 570" stroke-width="50" stroke-linejoin="round">
                        <path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                        <p class="px-1">{record.likes}</p>
                        </span>
                    </div>
                    <a class="inline-flex items-center" href="">
                    <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                    <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">{record.author}</span>
                    </span>
                    </a>
                </div>
            </div>
        </li>
      {/each}
    </ol>
    </div>
  </section>

