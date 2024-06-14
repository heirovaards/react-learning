import { useState, useEffect } from "react";
import React from "react";
import Job from "./Job";

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  //   console.log(Jobs);
  // state condition
  //   const JobListing = isHome ? Jobs.slice(0, 3) : Jobs;
  return (
    <div>
      <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
          <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              <h2>Loading . . . </h2>
            ) : (
              <>
                {jobs.map((job) => (
                  <Job key={job.id} job={job}></Job>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListing;
