import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth(); // Get the user context
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to apply!");
      navigate('/signIn');
      return;
    }

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5001/job-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myApplications');
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto justify-center">
      <form onSubmit={submitJobApplication} className="card-body">
        <h2 className="text-center text-xl font-bold"> Apply Job And Good Luck! </h2>
        <div className="form-control">
          <label className="label"> 
            <span className="label-text">LinkedIn URL</span> 
          </label>
          <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"> 
            <span className="label-text">Github URL</span> 
          </label>
          <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"> 
            <span className="label-text">Resume URL</span> 
          </label>
          <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
