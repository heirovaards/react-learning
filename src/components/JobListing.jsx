import { useState, useEffect } from "react";
import React from "react";
import Job from "./Job";
import Spinner from "./Spinner";

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  //   const fetchJobs = async () => {
  //     const apiUrl = isHome
  //       ? 'http://localhost:8000/jobs?_limit=3'
  //       : 'http://localhost:8000/jobs';
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setJobs(data);
  //     } catch (error) {
  //       console.log("error fetching data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchJobs();
  // }, []);

      const fetchJobs = async () => {
      const apiUrl = isHome
        ? '/api/jobs?_limit=3'
        : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
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
              <Spinner loading={loading}></Spinner>
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
