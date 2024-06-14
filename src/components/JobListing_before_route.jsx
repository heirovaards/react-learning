import React from 'react'
import Jobs from '../jobs.json'
import Job from './Job';

const JobListing = ({isHome = fals}) => {
    console.log(Jobs);
    
    const JobListing = isHome ? Jobs.slice(0,3) : jobs;
    return (

        <div>
            <section class="bg-blue-50 px-4 py-10">
                <div class="container-xl lg:container m-auto">
                    <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        Browse Jobs
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {JobListing.map((job) => (
                            <Job key={job.id} job={job}></Job>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JobListing
