import React from 'react'

export default function RentCard() {
  return (
     <section className="text-gray-600 body-font p-4 w-auto h-auto">
        <div className="container flex flex-wrap">
          <div className="flex flex-wrap ">
            <div className="grid grid-cols-3">
              <div className="col-start-1 col-end-4">
                <img
                  alt="gallery"
                  className="w-[492px] h-[360px] object-cover object-center block"
                  src="/blue-board.png"
                />
              </div>
              <div className="ml-0 mb-0 m-4">
                <img
                  alt="gallery"
                  className="w-[132px] h-[108px] object-cover object-center block"
                  src="/small1.png"
                />
              </div>
              <div className="mb-0 m-4">
                <img
                  alt="gallery"
                  className="w-[132px] h-[108px] object-cover object-center block"
                  src="small2.png"
                />
              </div>
              <div className="mr-0 mb-0 m-4">
                <img
                  alt="gallery"
                  className="w-[132px] h-[108px] object-coverobject-center block"
                  src="/small3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}


