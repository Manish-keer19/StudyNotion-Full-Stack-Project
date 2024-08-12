import React, { useState } from "react";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const formData = {
      firstName,
      lastName,
      email,
      phoneNo,
      message,
    };
    console.log("Form data is:", formData);
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
        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                />
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
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
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                autoComplete="tel"
              />
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
              />
            </div>
            <button
              className="bg-[#dded2b] text-[#161D29] p-2 rounded mt-4 w-full"
              onClick={handleSendMessage}
              type="submit"
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
