import { Link } from "react-router-dom";
import VideoDescription from "../Components/Description/VideoDescription";
import VideoPlayer from "../Components/Description/VideoPlayer";
import Navbar from "../Components/Navbar/Navbar";

export default function Video() {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer />

              {/* <!-- video description --> */}
              <VideoDescription />
            </div>

            {/* <!-- related videos --> */}
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
              {/* <!-- single related video --> */}
              <div className="w-full flex flex-row gap-2 mb-4">
                <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                  <Link href="/video/1">
                    <img
                      src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                      className="object-cover"
                      alt="Some video title"
                    />
                  </Link>
                  <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    12:10
                  </p>
                </div>

                <div className="flex flex-col w-full">
                  <Link to="/video/1">
                    <p className="text-slate-900 text-sm font-semibold">
                      Some video title
                    </p>
                  </Link>
                  <Link
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    to="/video/1"
                  >
                    Learn with Sumit
                  </Link>
                  <p className="text-gray-400 text-xs mt-1">
                    100K views . 23 Oct 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
