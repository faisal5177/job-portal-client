import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";import React from "react";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;

  return (
    <div className="flex card bg-base-100 p-4 shadow-xl text-left h-[380px] hover:shadow-2xl">
      <div>
        <div className="flex mb-5 gap-2">
          <div>
            <img className="w-[48px]" src={company_logo} alt={`${company} logo`} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{company}</h2>
            <small className="flex text-gray-400">
              <strong><FaMapMarkerAlt className="mt-1 mr-1"/></strong> {location}
            </small>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="font-semibold">
            {title}
          </h2>
        </div>
        <div className="mb-5">
          <small className="text-gray-400">{description}</small>
        </div>
        <div className="mb-5">
          {requirements.slice(0, 3).map((req, index) => (
            <button key={index} className="btn btn-xs ml-2">{req}</button>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="">
           <p className=" items-center">Salary: <span className="flex text-xs"><FaDollarSign className="mt-[2px] mr-[3px]"></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</span></p>
          </div>
          <Link to={`/jobs/${_id}`}>
          <button className="btn btn-md mt-5 text-sky-400">Apply Now</button>
          </Link>
        </div>      
      </div>
    </div>
  );
};

export default HotJobCard;
