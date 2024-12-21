import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(error => {
        console.error('Error', error);
        alert('Failed to load jobs.');
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 py-5 mx-auto">
      {jobs.map((job) => <HotJobCard key={job._id} job={job} />)}
    </div>
  );
};

export default HotJobs;
