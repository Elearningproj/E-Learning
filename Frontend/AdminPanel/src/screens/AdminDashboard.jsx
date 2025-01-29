import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 mt-56 ml-80">
        <div>
          <a
            href="/ManageUsers"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Users
            </h5>
          </a>
        </div>
        <div>
          <a
            href="/ManageCourses"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Courses
            </h5>
          </a>
        </div>
        <div>
          <a
            href="/ManageLessons"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Lessons
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
