import { object } from "motion/react-client";

const AddJob = () => {

   const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const { salaryMin, salaryMax, salaryCurrency, ...newJob } = initialData;

    const salaryRange = { salaryMin, salaryMax, salaryCurrency };

    const finalJobData = { ...newJob, salaryRange };

    console.log(finalJobData);
  };

  return (
    <div className="mx-auto px-10">
      <div className="p-5">
        <form onSubmit={handleAddJob} className="card-body">
          {/* Job Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Title</span>
            </label>
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              className="input input-bordered"
              required
            />
          </div>

          {/* Job Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Location</span>
            </label>
            <input
              type="text"
              placeholder="Job Location"
              name="location"
              className="input input-bordered"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Type</span>
            </label>
            <select
              className="select select-ghost w-full max-w-xs"
              name="jobType"
            >
              <option value="" disabled>
                Pick a Job type
              </option>
              <option value="Full-time">Full-time</option>
              <option value="Intern">Intern</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>

          {/* Job Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Field</span>
            </label>
            <select
              className="select select-ghost w-full max-w-xs"
              name="category"
            >
              <option value="" disabled>
                Pick a Job Field
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Teaching">Teaching</option>
            </select>
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Application Deadline
              </span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </div>

          {/* Salary Range */}
          <p className="label-text font-semibold">Salary Range</p>
          <div className="form-control">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Min Salary"
                name="salaryMin"
                className="input input-bordered"
                required
              />
              <input
                type="number"
                placeholder="Max Salary"
                name="salaryMax"
                className="input input-bordered"
                required
              />
              <select
                className="select select-ghost w-full max-w-xs"
                name="salaryCurrency"
              >
                <option value="" disabled>
                  Currency
                </option>
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Job Description"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>

          {/* Company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Company Name</span>
            </label>
            <input
              type="text"
              placeholder="Company Name"
              name="company"
              className="input input-bordered"
              required
            />
          </div>

          {/* Requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Requirements</span>
            </label>
            <textarea
              name="requirements"
              placeholder="Put each requirement in a new line"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Job Responsibilities
              </span>
            </label>
            <textarea
              name="responsibilities"
              placeholder="Write responsibilities in a new line"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">HR Email</span>
            </label>
            <input
              type="email"
              placeholder="HR Email"
              name="hr_email"
              className="input input-bordered"
              required
            />
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">HR Name</span>
            </label>
            <input
              type="text"
              placeholder="HR Name"
              name="hr_name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Company Logo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Company Logo URL</span>
            </label>
            <input
              type="text"
              placeholder="Company Logo URL"
              name="company_logo"
              className="input input-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary font-bold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
