// import React from 'react';

// const Login = () => {





//     const onSubmit = (data) => {
//         signInWithEmailAndPassword(data.email, data.password);
//       };
    
//       return (
//         <div className="flex justify-center h-screen items-center">
//           <div className="card w-96 bg-base-100 shadow-xl">
//             <div className="card-body">
//               <h2 className="text-xl font-bold text-center">Login </h2>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-control w-full max-w-xs">
//                   <label className="label">
//                     <span className="label-text">Email</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="input input-bordered w-full max-w-xs"
//                     {...register("email", {
//                       required: {
//                         value: true,
//                         message: "Email is Required",
//                       },
//                       pattern: {
//                         value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                         message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
//                       },
//                     })}
//                   />
//                   <label className="label">
//                     {errors.email?.type === "required" && (
//                       <span className="label-text-alt text-red-500">
//                         {errors.email.message}{" "}
//                       </span>
//                     )}
//                     {errors.email?.type === "pattern" && (
//                       <span className="label-text-alt text-red-500">
//                         {errors.email.message}{" "}
//                       </span>
//                     )}
//                   </label>
//                 </div>
    
//                 <div className="form-control w-full max-w-xs">
//                   <label className="label">
//                     <span className="label-text">Password</span>
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="Type here"
//                     className="input input-bordered w-full max-w-xs"
//                     {...register("password", {
//                       required: {
//                         value: true,
//                         message: "Password is Required",
//                       },
//                       minLength: {
//                         value: 6,
//                         message: "Must be 6 character or longer", // JS only: <p>error message</p> TS only support string
//                       },
//                     })}
//                   />
//                   <label className="label">
//                     {errors.password?.type === "required" && (
//                       <span className="label-text-alt text-red-500">
//                         {errors.password.message}{" "}
//                       </span>
//                     )}
//                     {errors.password?.type === "minLength" && (
//                       <span className="label-text-alt text-red-500">
//                         {errors.password.message}{" "}
//                       </span>
//                     )}
//                   </label>
//                 </div>
//                 {loginErrorMessage}
//                 <input
//                   className="btn w-full max-w-xs text-white"
//                   type="submit"
//                   value="LOGIN"
//                 />
//               </form>
//               <p>New to Doctors Portal <Link to='/signup' className='text-primary text-sm'>Create New Account</Link></p>
    
//               <div className="divider">OR</div>
//               <button
//                 onClick={() => signInWithGoogle()}
//                 className="btn btn-outline"
//               >
//                 Continue with Google
//               </button>
//             </div>
//           </div>
//         </div>
//       );
// };

// export default Login;