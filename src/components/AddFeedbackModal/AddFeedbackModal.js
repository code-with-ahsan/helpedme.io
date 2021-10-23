import React, { useEffect, useState } from "react";
import "./AddFeedbackModal.css";

const AddFeedbackModal = ({ closeHandler }) => {
  const [nameSearchTerm, setNameSearchTerm] = useState("");

  useEffect(() => {
    console.log("name search term changed", nameSearchTerm);
  }, [nameSearchTerm]);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto border w-96 shadow-lg rounded-md bg-white">
        <div
          onClick={() => {
            closeHandler();
          }}
          className="closeBtn hover:opacity-50	 absolute top-2.5 right-2.5 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="mt-5 p-5 md:mt-0">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Review
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {/* Use a permanent address where you can receive mail. */}
            </p>
          </div>
          <form action="#" method="POST">
            <div className="sm:rounded-md">
              <div className="py-5 bg-white">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 search-input-container">
                    <label
                      htmlFor="helper-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Helper Name
                    </label>
                    <input
                      onChange={(e) => {
                        setNameSearchTerm(e.currentTarget.value);
                      }}
                      type="text"
                      name="helper-name"
                      id="helper-name"
                      className="mt-1 focus:light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <div className="name-search-list shadow-lg rounded-md bg-white w-72 my-2 absolute pin-t pin-l">
                      <ul className="list-reset">
                        <li>
                          <p className="p-2 block text-black hover:bg-grey-light cursor-pointer">
                            USA
                            <svg
                              className="float-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                            >
                              <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" />
                            </svg>
                          </p>
                        </li>
                        <li>
                          <p className="p-2 block text-black hover:bg-grey-light cursor-pointer">
                            Montenegro
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Feedback
                    </label>
                    <textarea className="mt-1 focus:light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                  </div>
                </div>
              </div>
              <div className="py-3 text-right">
                <button
                  onClick={() => {
                    closeHandler();
                  }}
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:light-blue-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFeedbackModal;
