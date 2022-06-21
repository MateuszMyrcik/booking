import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { ButtonComponent } from "../ui/button";
import { MasterLayoutComponent } from "../ui/master-layout";
import { GoTo, SiteRoutes } from "../utils/goto";
import { AppContext } from "./_app";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Home: NextPage = () => {
  const { appDispatch, appState } = useContext(AppContext);
  let [movies, setMovies] = useState([]);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.movies);
      });
  }, []);

  console.log(movies);

  return (
    <MasterLayoutComponent>
      <section className="overflow-hidden text-white lg:grid bg-gradient-to-r from-blue-600 to-purple-700 lg:grid-cols-2 lg:items-center">
        <div className="p-12 text-center sm:p-16 lg:p-24 lg:text-left">
          <div className="max-w-lg mx-auto lg:ml-0 lg:pt-12">
            <p className="text-3xl font-bold sm:text-4xl">
              Lorem ipsum, dolor sit amet consectetur.
            </p>

            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus iusto odit, magni repellat aliquam!
            </p>

            <div className="mt-4 mx-auto">
              <ButtonComponent label="Show more" secondType={true} />
            </div>
          </div>
        </div>

        <div className="lg:pt-24">
          <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
            <img
              className="absolute inset-0 object-cover w-full h-full lg:rounded-tl-3xl"
              src="/img/landing-bg.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="pt-12 ">
        {/* <form className="flex w-full justify-center flex-wrap">
          <div>
            <input
              className="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
              type="date"
              name="date-from"
            ></input>
            <label htmlFor="date"></label>
          </div>
          <div>
            <input
              className="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
              type="date"
              name="date-to"
            ></input>
            <label htmlFor="date"></label>
          </div>
          <div>
            <input
              className="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
              type="number"
              name="people_number"
              placeholder="0"
            ></input>
            <label htmlFor="people_number"></label>
          </div>
        </form> */}
        <div className="flex w-full justify-center flex-wrap">
          <ButtonComponent
            label="Find your room"
            btnClickEvent={GoTo(SiteRoutes.SEARCH_RESULTS)}
          />
        </div>
      </section>
    </MasterLayoutComponent>
  );
};

export default Home;
