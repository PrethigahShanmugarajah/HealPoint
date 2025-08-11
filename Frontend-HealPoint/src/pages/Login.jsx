import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create an account" : "Login"}
        </p>

        <p>
          Please {state === "Sign Up" ? "Create Account" : "Login"} to book an appontment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.name)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setEmail(e.target.name)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.name)}
            value={password}
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;











// import React, { useState } from "react";

// const Login = () => {
//   const [state, setState] = useState("Sign Up");

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [name, setName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const onSubmitHandler = (event) => {
//     event.preventDefault();

//     console.log("Full Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     if (state === "Sign Up") {
//       console.log("Confirm Password:", confirmPassword);
//     }

//     if (state === "Sign Up" && password !== confirmPassword) {
//       setErrorMessage("Passwords do not match!");
//       return;
//     }

//     setErrorMessage("");
//   };

//   return (
//     <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === "Sign Up" ? "Create an account" : "Login"}
//         </p>

//         <p>
//           Please {state === "Sign Up" ? "Create Account" : "Login"} to book an
//           appointment
//         </p>

//         {state === "Sign Up" && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="text"
//               onChange={(e) => {
//                 setName(e.target.value);
//                 console.log("Full Name:", e.target.value);
//               }}
//               value={name}
//               required
//             />
//           </div>
//         )}

//         <div className="w-full">
//           <p>Email</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="text"
//             onChange={(e) => {
//               setEmail(e.target.value);
//               console.log("Email:", e.target.value);
//             }}
//             value={email}
//             required
//           />
//         </div>

//         <div className="w-full relative">
//           <p>Password</p>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1 pr-10"
//             type={showPassword ? "text" : "password"}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               console.log("Password:", e.target.value);
//             }}
//             value={password}
//             required
//           />
//           <i
//             className={`bi ${
//               showPassword ? "bi-eye-fill" : "bi-eye-slash-fill"
//             } absolute right-3 top-[34px] cursor-pointer`}
//             onClick={() => setShowPassword(!showPassword)}
//           ></i>
//         </div>

//         {state === "Sign Up" && (
//           <div className="w-full relative">
//             <p>Confirm Password</p>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1 pr-10"
//               type={showConfirmPassword ? "text" : "password"}
//               onChange={(e) => {
//                 setConfirmPassword(e.target.value);
//                 console.log("Confirm Password:", e.target.value);
//               }}
//               value={confirmPassword}
//               required
//             />
//             <i
//               className={`bi ${
//                 showConfirmPassword ? "bi-eye-fill" : "bi-eye-slash-fill"
//               } absolute right-3 top-[34px] cursor-pointer`}
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             ></i>
//           </div>
//         )}

//         {errorMessage && (
//           <p className="text-red-500 text-sm">{errorMessage}</p>
//         )}

//         <button
//           type="submit"
//           className="bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer"
//         >
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </button>

//         {state === "Sign Up" ? (
//           <p>
//             Already have an account?{" "}
//             <span
//               onClick={() => {
//                 setState("Login");
//                 setErrorMessage("");
//               }}
//               className="text-primary underline cursor-pointer"
//             >
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Create a new account?{" "}
//             <span
//               onClick={() => {
//                 setState("Sign Up");
//                 setErrorMessage("");
//               }}
//               className="text-primary underline cursor-pointer"
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;

