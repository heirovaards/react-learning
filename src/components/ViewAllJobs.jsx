import { Link } from "react-router-dom";
import React from "react";

const ViewAllJobs = () => {
  return (
    <div>
      <section class="m-auto max-w-lg my-10 px-6">
        <Link
          to="/jobs"
          class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </Link>
      </section>
    </div>
  );
};

export default ViewAllJobs;
