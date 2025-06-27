import React from "react";

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
                Fuel Your Driving Passion{" "}
              </h2>

              <p className="mt-4 text-gray-700">
                Browse our premium collection where raw performance meets
                refined elegance. From track-ready sports cars that hug every
                curve to whisper-quiet hybrids and opulent sedans that redefine
                comfort—discover vehicles engineered to thrill. Each model
                features advanced technology, stunning design, and flawless
                execution that sets them apart. Whether you're seeking
                heart-pounding performance, eco-conscious efficiency, or
                luxurious comfort, your perfect drive awaits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
