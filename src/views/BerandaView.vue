<template>
  <!-- <header class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
  <a href="#" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
    <span class="mr-2 text-4xl text-cyan-500">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
    </span>
    UMKM
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
    <span class="sr-only">Toggle Navigation</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
    <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
      <li class="font-bold md:mr-12"><a href="blog">Blog</a></li>
      <li class="md:mr-12"><a href="kontak">Kontak</a></li>
      <li class="md:mr-12"><a href="event">Event</a></li>
      <li class="md:mr-12"><a href="#">Tentang Kami</a></li>
      <li class="md:mr-12">
        <router-link to="/login">
        <button class="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Login</button>
      </router-link>
      </li>
    </ul>
  </nav>
</header> -->

<main>
  <article>   
    <header class="mx-auto max-w-screen-xl pt-28 text-center">
      <!-- <p class="text-gray-500">Published April 4, 2022</p> -->
      <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">INFORMASI SEPUTAR UMKM</h1>
      <p class="mt-6 text-lg text-gray-700">Mandiri dan Sejahtera</p>
      <!-- <div class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
        <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Marketing</button>
        <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Branding</button>
        <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Digital</button>
        <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Identity</button>
      </div> -->
      <img class="sm:h-[34rem] mt-10 w-full object-contain" src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/79/2023/08/03/BOKS-UMKM-566574252.jpg" alt="Featured Image" />
    </header>

    <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
      <strong class="text-2xl font-medium">Kami menyediakan akses informasi dan sarana penyampaian ilmu melalui program-program yang dapat meningkatkan potensi usaha di masa depan serta memperluas jaringan pemasaran produk pelaku UMKM Indonesia. </strong>
      <p>Melalui kegiatan-kegiatan online dan offline, Sahabat UMKM merupakan wadah yang tepat bagi UMKM Indonesia dalam mengembangkan potensi usahanya</p>
      <p>Dapatkan akses ke berbagai program pelatihan eksklusif dan fasilitasi dari partner strategis khusus untuk anggota komunitas Sahabat UMKM.</p>
    </div>
  </article>
</main>

<div class="w-fit mx-auto mt-10 flex space-x-2">
  <div class="h-0.5 w-2 bg-gray-600"></div>
  <div class="h-0.5 w-32 bg-gray-600"></div>
  <div class="h-0.5 w-2 bg-gray-600"></div>
</div>

<aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">
  <h2 class="mb-8 text-center text-5xl font-bold text-gray-900">GALERI SAHABAT UMKM</h2>

  <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
    <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
      <a href="#">
        <img src="https://sahabatumkm.id/wp-content/uploads/2024/02/laptop-1536x1024-1.jpeg" class="h-56 w-full object-cover" alt="" />
        <div class="flex-auto px-6 py-5">
          <span class="mb-2 flex items-center text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            Marketing</span>
          <!-- <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">How to perform NPS Surveys</h3> -->
          <p class="mb-4 text-base font-light">Meningkatkan Penjualan dengan Teknik Penulisan Deskripsi Produk yang Mengundang Cuan</p>
          <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span>
        </div>
      </a>
    </article>

    <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
      <a href="#">
        <img src="https://sahabatumkm.id/wp-content/uploads/2023/07/business-partners-handshake-global-corporate-with-technology-concept-696x464-1.jpeg" class="h-56 w-full object-cover" alt="" />
        <div class="flex-auto px-6 py-5">
          <span class="mb-2 flex items-center text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
             Public Relations</span>
          <!--<h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">Understanding Public Relations</h3> -->
          <p class="mb-4 text-base font-light">Cara Jitu Promosi Produk UMKM dan Bangun Jaringan Bisnis Profesional di LinkedIn</p>
          <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span>
        </div>
      </a>
    </article>

    <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
      <a href="#">
        <img src="https://sahabatumkm.id/wp-content/uploads/2023/07/bulb-with-speecch-bubbles.jpg" class="h-56 w-full object-cover" alt="" />
        <div class="flex-auto px-6 py-5">
          <span class="mb-2 flex items-center text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            Branding</span
          >
          <!-- <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">Marketing is looking for untapped opportunities</h3> -->
          <p class="mb-4 text-base font-light">Inovasi Produk UMKM dengan Metode SCAMPER, Berani Coba?</p>
          <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span>
        </div>
      </a>
    </article>
  </div>
</aside>
</template>

<style>
  /* CSS untuk gradasi warna navy */
  .article-navy {
    background: linear-gradient(180deg, rgba(18, 18, 61, 1) 0%, rgb(73, 73, 124) 100%);
  }
</style> 