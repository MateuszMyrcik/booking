import { FormEvent, useState } from "react";
interface IFiltersPanelComponent {
  handleFiltering: (event: FormEvent<HTMLFormElement>) => void;
  handleResetFiltering: () => void;
}

export const FiltersPanelComponent: React.FC<IFiltersPanelComponent> = ({
  handleFiltering,
  handleResetFiltering,
}) => {
  return (
    <div className="overflow-hidden border border-gray-200 rounded">
      <form
        action=""
        className="border-t border-gray-200 lg:border-t-0"
        onSubmit={(event) => {
          event.preventDefault();
          handleFiltering(event);
        }}
      >
        <fieldset>
          <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            Room adjustment
          </legend>

          <div className="px-5 py-6 space-y-2">
            <div className="flex items-center">
              <input
                id="balcony"
                type="checkbox"
                name="isBalcony"
                className="w-5 h-5 border-gray-300 rounded"
              />

              <label htmlFor="balcony" className="ml-3 text-sm font-medium">
                Balcony
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="tv"
                type="checkbox"
                name="isTv"
                className="w-5 h-5 border-gray-300 rounded"
              />

              <label htmlFor="tv" className="ml-3 text-sm font-medium">
                Tv
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="coffeeMachine"
                type="checkbox"
                name="isCoffeeMachine"
                className="w-5 h-5 border-gray-300 rounded"
              />

              <label
                htmlFor="coffeeMachine"
                className="ml-3 text-sm font-medium"
              >
                Coffee Machine
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="restArea"
                type="checkbox"
                name="isRestArea"
                className="w-5 h-5 border-gray-300 rounded"
              />

              <label htmlFor="restArea" className="ml-3 text-sm font-medium">
                Rest Area
              </label>
            </div>

            {/* <div className="pt-2">
              <button type="button" className="text-xs text-gray-500 underline">
                Reset Type
              </button>
            </div> */}
          </div>
        </fieldset>

        <div>
          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Bathroom Type
            </legend>

            <div className="px-5 py-6 space-y-2">
              <div className="flex items-center">
                <input
                  id="bath"
                  type="radio"
                  name="bathroomType"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label htmlFor="bath" className="ml-3 text-sm font-medium">
                  Bath
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="shower"
                  type="radio"
                  name="bathroomType"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label htmlFor="shower" className="ml-3 text-sm font-medium">
                  Shower
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              People Number
            </legend>

            <div className="px-5 py-6 space-y-2">
              <div className="flex items-center">
                <label htmlFor="peopleNumber" className=" text-sm font-medium">
                  People
                </label>
                <input
                  id="peopleNumber"
                  type="number"
                  name="noPeople"
                  className="ml-3 w-10 h-5 border-gray-300 border-2 border-solid rounded text-center"
                />
              </div>
            </div>
          </fieldset>
        </div>

        <div className="flex justify-between px-5 py-3 border-t border-gray-200">
          <button
            name="reset"
            type="reset"
            onClick={() => {
              handleResetFiltering();
            }}
            className="text-xs font-medium text-gray-600 underline rounded"
          >
            Reset All
          </button>

          <button
            name="commit"
            type="submit"
            className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};
