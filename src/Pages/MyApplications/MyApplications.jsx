import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5001/job-application?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }
  }, [user?.email]);

  const handleDelete = (jobId) => {
    
    fetch(`http://localhost:5001/job-application/${jobId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
       
        setJobs(jobs.filter((job) => job._id !== jobId));
      })
      .catch((error) => console.error("Error deleting job:", error));
  };

  return (
    <div>
      <h2 className="text-3xl">My Applications: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Company Logo"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">{job.company}</span>
                </td>
                <td>{job.location}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(job._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
