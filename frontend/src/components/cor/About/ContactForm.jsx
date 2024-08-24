import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const  onSubmit = (data) => {
    console.log("data is ", data);
    // Add logic to handle form submission, e.g., send data to an API
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center mt-[10vh]">
      <div className="w-[40vw] p-4 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Get in Touch</h1>
          <p className="text-lg mt-2 text-gray-700">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-gray-700 font-medium">
                  First Name:
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="bg-[#161D29] text-white p-2 rounded mt-1 w-full"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  autoComplete="given-name"
                />
                {errors.firstName && <div className="text-[red]">{errors.firstName.message}</div>}
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-gray-700 font-medium">
                  Last Name:
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="bg-[#161D29] text-white p-2 rounded mt-1 w-full"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  autoComplete="family-name"
                />
                {errors.lastName && <div className="text-[red]">{errors.lastName.message}</div>}
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email Address:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-[#161D29] text-white p-2 rounded mt-1 w-full"
                {...register("email", {
                  required: "Email is required",
                })}
                autoComplete="email"
              />
              {errors.email && <div className="text-[red]">{errors.email.message}</div>}
            </div>
            <div className="flex-1">
              <label htmlFor="phoneNo" className="block text-gray-700 font-medium">
                Phone Number:
              </label>
              <input
                id="phoneNo"
                type="text"
                placeholder="Enter your phone number"
                className="bg-[#161D29] text-white p-2 rounded mt-1 w-full"
                {...register("phoneNo", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    // message: "Phone number must be at least 10 digits",
                    message: "chutiya bana raha ke kye 10 digit dal cup chap",
                  },
                  maxLength:{
                    value: 10,
                    // message: "Phone number must be exactly 10 digits",
                    message: "Phone number 10 digit ke hi hote he bap ko mat shikha",
                  }
                })}
                autoComplete="tel"
              />
              {errors.phoneNo && <div className="text-[red]">{errors.phoneNo.message}</div>}
            </div>
            <div className="flex-1">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows="6"
                className="resize-none bg-[#161D29] text-white p-2 rounded mt-1 w-full"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 6,
                    message: "Message must be at least 6 characters",
                  },
                  maxLength: {
                    value: 200,
                    message: "Message must be less than 200 characters",
                  },
                })}
              />
              {errors.message && <div className="text-[red]">{errors.message.message}</div>}
            </div>
            <button
              className={`bg-[#dded2b] text-[#161D29] p-2 rounded mt-4 w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={isSubmitting}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
