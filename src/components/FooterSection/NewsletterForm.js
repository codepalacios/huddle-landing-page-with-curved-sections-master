import React, { useState } from "react";

function NewsletterForm() {
  // Error status for email
  const [isError, setIsError] = useState(false);

  // Validate email
  const validateEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsError(!emailRegex.test(email));
  };

  return (
    <div className="pt-14 px-7 pb-[6.5rem] max-w-[26.625rem] mx-auto lg:py-0 lg:px-0 lg:w-full lg:max-w-[32.5rem] lg:mx-0">
      <h2 className="mb-4 font-bold text-xl lg:text-2xl">Newsletter</h2>
      <p className="mb-8 font-semibold text-sm lg:mb-10 lg:max-w-[21.5rem]">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <form
        onSubmit={validateEmail}
        className="flex flex-col gap-4 items-end lg:flex-row lg:gap-10 lg:items-start lg:flex-wrap"
        noValidate
      >
        <div className="w-full lg:max-w-[20rem]">
          <input
            className={`w-full h-12 rounded-md px-2 text-neuVeryDarkCyan ${
              isError ? "border border-priLightRed" : ""
            }`}
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <p
            className={`${
              isError ? "block" : "hidden"
            } pt-4 place-self-end font-semibold text-xs text-priLightRed lg:pt-0.5 lg:place-self-start`}
          >
            Check your email please
          </p>
        </div>
        <button
          className="font-bold text-base bg-priPink rounded-md w-40 h-12 hover:cursor-pointer hover:bg-priLightPink"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export { NewsletterForm };
