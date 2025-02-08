import { useEffect, useState } from "react";
import Navbar from "../../Components/Admin/Navbar";

import deleteIcon from '../../images/Admin/delete.png';
import userAvatar from '../../images/Admin/user-avatar.png';

function ManageLessons() {
  return (
    <div>
      <Navbar />
      <center>
        <h1 className="text-2xl font-bold mt-16">Manage Lessons</h1>
      </center>

      <form class="max-w-md mx-auto mt-10">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-black-500"
            placeholder="Search Lesson"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-40 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/2">
                Lesson
              </th>
              <th scope="col" className="px-6 py-3">
                Action (Add)
              </th>
              <th scope="col" className="px-6 py-3">
                Action (Remove)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-1/2"
              >
                Lesson 1
              </td>
              <td className="px-6 py-4">
                <a href="#">
                  <img
                    src={userAvatar}
                    alt="Edit"
                    className="h-8 hover:bg-purple-200"
                  />
                </a>
              </td>
              <td className="px-6 py-4">
                <a href="#">
                  <img
                    src={deleteIcon}
                    alt="Remove"
                    className="h-6 hover:bg-red-300"
                  />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-1/2"
              >
                Lesson 2
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img
                    src={userAvatar}
                    alt=""
                    className="h-8 hover:bg-purple-200"
                  />
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img
                    src={deleteIcon}
                    alt=""
                    className="h-6 hover:bg-red-300"
                  />
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-1/2"
              >
                Lesson 3
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img
                    src={userAvatar}
                    alt=""
                    className="h-8 hover:bg-purple-200"
                  />
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <img
                    src={deleteIcon}
                    alt=""
                    className="h-6 hover:bg-red-300"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageLessons;
