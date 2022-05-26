import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="flex justify-center pb-10">
      <div>
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold">MOHAMMED SAYED</h2>
          <p>Phone: +880 1860887758</p>
          <p>mdsayedgv@gmail.com</p>
        </div>
        <div className="md:w-6/12 mx-auto">
          <p>
            Skilled front-end developer focusing on JavaScript mobile-first
            development. Looking forward to continuing my career through success
            in React Font-End Development. Ability to adapt to a collaborative
            environment and focus on achieving high quality results under strict
            deadlines.
          </p>

          <h2 className="text-2xl mt-7 mb-5 font-bold">Technology And Skill</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <ul className="list-disc ml-4">
                <li>
                  {" "}
                  <p>HTML</p>
                </li>
                <li>
                  <p>CSS</p>
                </li>
                <li>
                  <p>Bootstrap</p>
                </li>
                <li>
                  <p>React Bootstrap</p>
                </li>
                <li>
                  <p>Tailwind.css</p>
                </li>
                <li>
                  <p>DaisyUi</p>
                </li>
                <li>
                  <p>GIT</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>
                  {" "}
                  <p>Java Script</p>
                </li>
                <li>
                  <p>React.js</p>
                </li>
                <li>
                  <p>Node.js</p>
                </li>
                <li>
                  <p>Express.js</p>
                </li>
                <li>
                  <p>MongoDB</p>
                </li>
                <li>
                  <p>Google Firebase</p>
                </li>
                <li>
                  <p>Heroku</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mt-7 mb-5 font-bold">
              PROFESSIONAL TRAINING
            </h2>
            <p className="font-bold">CERTIFIED 2022</p>
            <p className="font-semibold">WEB DEVELOPMENT, PROGRAMMING HERO </p>
            <p>Complete Web Development With Programming Hero Batch 5</p>
          </div>

          <div>
            <h2 className="text-2xl mt-7 mb-5 font-bold">PROJECT</h2>
            <h3 className="text-1xl font-semibold">PROJECT- 1</h3>
            <p>
              <span className="font-semibold">DREAMS ELECTRONICS,</span> PROJECT{" "}
            </p>
            <p>
              <Link className="link" to='https://dreams-electronics.web.app/'>Click here to see live project</Link>
            </p>
            <p>
              <span className="font-semibold">Technology Used</span>: HTML, CSS,
              React Bootstrap, React.js, Node.js, Express.js, MongoDB, Heroku
              Google Firebase
            </p>
            <h3 className="text-1xl font-semibold mt-4">PROJECT- 2</h3>
            <p>
              <span className="font-semibold">MAGIC PHOTOGRAPHER,</span> PROJECT{" "}
            </p>
            <p>
              <Link className="link" to='https://magic-photographer.firebaseapp.com/'>Click here to see live project</Link>
            </p>
            <p>
              <span className="font-semibold">Technology Used</span>:HTML, CSS,
              Bootstrap, React.js, Google Firebase
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
