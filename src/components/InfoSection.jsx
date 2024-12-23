import React from 'react'

function InfoSection() {
  return (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-3">
        <img
          src="https://carpassion.vn/wp-content/uploads/2024/08/Manhart-Supra-4.jpg"
          className="rounded w-[850px] h-auto"
          alt=""
        />
      </div>

      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Unleash the Thrill of Driving
          </h2>

          <p className="mt-4 text-gray-700">
          Discover the perfect fusion of style, performance, and innovation with our curated selection of premium vehicles. Whether you're drawn to the sleek aerodynamics of sports cars, the efficiency of hybrid models, or the luxury of high-end sedans, we have something to ignite your passion for driving. Explore the latest features, cutting-edge technology, and impeccable craftsmanship that set these vehicles apart. Find your dream car today and experience a ride like never before
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection