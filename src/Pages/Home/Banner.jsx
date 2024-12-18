import { easeOut } from "motion";
import { motion } from "motion/react"

const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-96 border border-red-800">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="flex-1 flex-col-reverse">
          <motion.img
          animate={{ y: [50, 100, 50] }}
          transition={{duration: 10, repeat: Infinity}}
              src="https://i.ibb.co.com/LPn0607/corporate-workers-brainstorming-together.jpg"
              className="max-w-64 rounded-T-[40px] rounded-br[40px] border-l-8 border-b-8 border-sky-500 mb-5 rounded-3xl rounded-bl-none shadow-2xl"
              alt="Box Office"
            />
          <motion.img
          animate={{ x: [-100, -150, -100] }}
          transition={{duration: 10, delay: 5, repeat: Infinity}}
              src="https://i.ibb.co.com/DKDDJNr/businesspeople-having-informal-meeting.jpg"
              className="max-w-60 rounded-T-[40px] rounded-br[40px] border-l-8 border-b-8 border-sky-500 rounded-3xl ml-[250px] right-24 rounded-bl-none shadow-2xl"
              alt="Box Office"
            />
          </div>

          <div className="flex-1">
            <motion.h1
            animate={{ x: 50 }}
            transition={{duration: 2, delay: 1, ease: easeOut, repeat: Infinity}} 
            className="text-5xl font-bold">Latest <motion.span
            animate={{ color: ['#ecf94a', '#34f0bd', '#f05834'] }}
            transition={{duration: 1.5, repeat: Infinity}}
            >Jobs</motion.span> For You!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  