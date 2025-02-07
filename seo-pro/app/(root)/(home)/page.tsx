import SearchForm from '@/components/SearchForm'
import React from 'react'

const page = () => {
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-height-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center md:h-60'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>JavaScript Mastery Resources</h1>
        </div>
        <SearchForm />
      </section>
      Filters
    </main>
  )
}

export default page