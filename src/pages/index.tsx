import type { NextPage } from "next";

import { MasterLayoutComponent } from "../ui/master-layout";
import { GoTo, SiteRoutes } from "../utils/goto";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Home: NextPage = () => {
  return (
    <MasterLayoutComponent>
      <section className="bg-gray-100">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div className="relative">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Indoors house"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Find a place for your next stay
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

                <button
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
                  onClick={GoTo(SiteRoutes.RESERVE_ROOMS)}
                >
                  Start now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MasterLayoutComponent>
  );
};

export default Home;
