import type { NextPage } from "next";

import { MasterLayoutComponent } from "../../ui/master-layout";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { fetchData } from "../../api/booking-service";
import { ErrorMessageComponent } from "../../ui/error-message";
import { useState } from "react";
import { SiteRoutes } from "../../utils/goto";
import { useRouter } from "next/router";

type FormValues = {
  username: string;
  password: string;
  password_2: string;
  email: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  phoneNumber: number;
};

const Registration: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSetReCAPTCHA, setIsSetReCAPTCHA] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (props: FormValues) => {
    if (!isSetReCAPTCHA) {
      return setError(
        "First of all prove, that you are not a robot by signing ReCAPTCHA"
      );
    }

    if (props.password === props.password_2) {
      const registerCall = await fetchData(
        `/register`,
        { ...props },
        "",
        "POST"
      );

      if (registerCall.status === 201) {
        setError("");
        router.push(SiteRoutes.LOGIN);
      } else {
        setError(
          `${registerCall.data.message}: ${
            registerCall.data.details ? registerCall.data.details : ""
          }`
        );
      }
    } else {
      setError("Passwords are not the same");
    }
  };

  return (
    <MasterLayoutComponent>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-blue-600 sm:text-3xl">
            Create an account
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p className="text-lg font-medium">Fill out bellow details</p>

            <div>
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>

              <div className="relative mt-1">
                <input
                  type="username"
                  id="username"
                  required
                  {...register("username")}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>

              <div className="relative mt-1">
                <input
                  type="email"
                  required
                  {...register("email")}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Name</label>

              <div className="relative mt-1">
                <input
                  type="name"
                  required
                  {...register("name")}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Surname</label>

              <div className="relative mt-1">
                <input
                  type="surname"
                  required
                  {...register("surname")}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter surname"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Date of Birth</label>

              <div className="relative mt-1">
                <input
                  type="date"
                  required
                  {...register("dateOfBirth")}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter date of birth"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>

              <div className="relative mt-1">
                <input
                  type="number"
                  required
                  minLength={9}
                  maxLength={9}
                  {...register("phoneNumber")}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  required
                  {...register("password")}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Confirm password
              </label>

              <div className="relative mt-1">
                <input
                  type="password"
                  id="password_2"
                  required
                  {...register("password_2")}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={() => setIsSetReCAPTCHA(true)}
              />
            </div>
            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg"
            >
              Register
            </button>
            {error && <ErrorMessageComponent label={error} />}
          </form>
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default Registration;
