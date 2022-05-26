import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="blogContainer">
      
      <div className="md:w-8/12 mx-4">
        <div className=" blogs py-3 my-element-right">
          <h4>
            <span className="text-red-500">Ques:</span>
            When should you use nodejs and when should you use mongodb?
          </h4>
          <p>
            <span className="text-accent fw-bold">Ans:</span>
            We use node js to build server that can respond to web requests.
            Node.js is a single-threaded, open-source, c ross-platform runtime
            environment for building fast and scalable server-side and
            networking applications. It runs on the V8 JavaScript runtime
            engine, and it uses event-driven, non-blocking I/O architecture,
            which makes it efficient and suitable for real-time applications.
            <br />
            <span className="my-2 d-block">
              NoSQL databases like MongoDB are a good choice when our data is
              document-centric and doesn't fit well into the schema of a
              relational database, when we need to accommodate massive scale,
              when we are rapidly prototyping, and a few other use.
            </span>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Blogs;