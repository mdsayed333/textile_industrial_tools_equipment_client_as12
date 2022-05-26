import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="blogContainer">
      <div className="md:w-8/12 mx-4">
        <div className=" blogs py-3 px-4 my-element-right">
          <h4 className="text-xl font-bold mb-4">
            <span className="text-red-500">Ques: </span>
            How will you improve the performance of a React Application?
          </h4>
          
            <span className=" text-blue-500 font-bold">Ans: </span>
            <span className="font-bold">
              important ways to improve the performance of a React application-
            </span>
            <br />
            <ul className="list-disc pl-9">
              <li>
                <span> Keeping component state local where necessary</span>
                Keeping component state local where necessary We can used that a
                state update in a parent component re-renders the parent and its
                child components.
              </li>
              <li>
                <span>
                  {" "}
                  Memoizing React components to prevent unnecessary re-renders
                </span>
                Memoization is an optimization strategy that caches a
                component-rendered operation, saves the result in memory, and
                returns the cached result for the same input.
              </li>
              <li>
                <span> Code-splitting in React using dynamic import()</span>
                Code-splitting is another important optimization technique for a
                React application.
              </li>
            </ul>
          
        </div>

        <div className=" blogs py-3 px-4 my-element-right">
          <h4 className="text-xl font-bold mb-4">
            <span className="text-red-500">Ques: </span>
            How does prototypical inheritance work?
          </h4>
          <p>
            <span className=" text-blue-500 font-bold">Ans: </span>
            <span className="">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
            </span>
            <br />

            <span className="my-2 d-block">
              Simply put, prototypical inheritance refers to the ability to
              access object properties from another object. We use a JavaScript
              prototype to add new properties and methods to an existing object
              constructor. We can then essentially tell our JS code to inherit
              properties from a prototype. Prototypical inheritance allows us to
              reuse the properties or methods from one JavaScript object to
              another through a reference pointer function.
            </span>
          </p>
        </div>

        <div className=" blogs py-3 px-4 my-element-right">
          <h4 className="text-xl font-bold mb-4">
            <span className="text-red-500">Ques: </span>
            Why you do not set the state directly in React.
          </h4>
          <p>
            <span className=" text-blue-500 font-bold">Ans: </span>
            <span className="">
              When we directly update the state, it does not change this state
              immediately. Instead, it creates a pending state transition, and
              accessing it after calling this method will only return the
              present value.
            </span>
            <br />
          </p>
          <p className="mt-3">
            If we update it directly, calling the setState() afterward may just
            replace the update you made.
          </p>
        </div>

        <div className=" blogs py-3 px-4 my-element-right">
          <h4 className="text-xl font-bold mb-4">
            <span className="text-red-500">Ques: </span>
            You have an array of products. Each product has a name, price,
            description, etc. How do you perform a search to find products by
            name?
          </h4>
          <p>
            <span className=" text-blue-500 font-bold">Ans: </span>
            <span className="">
              Before ECMAScript 6, we probably used a loop to repeat through all
              the items in the array and perform activities on each item. There
              are now a number of built-in utility methods that solve some
              common tasks for searching for values in an array. Such as:
              Array.includes (), Array.indexOf, Array.find (), and Array.filter
            </span>
          </p>
        </div>

        <div className=" blogs py-3 px-4 my-element-right">
          <h4 className="text-xl font-bold mb-4">
            <span className="text-red-500">Ques: </span>
            What is a unit test? Why should write unit tests?
          </h4>
          <p>
            <span className=" text-blue-500 font-bold">Ans: </span>
            <span className="">
              Unit testing a type of testing which is done by programmer in
              which the smallest testable module of an application - like
              functions, procedures or interfaces - are tested to ascertain if
              they are fit to use
            </span>
            <br />
          </p>
          <p className="mt-3">
            Unit testing ensures that all codes meet quality standards before
            deployment. This ensures a reliable engineering environment where
            quality is paramount. Helps developers write better code more
            efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
