import React, { useState } from "react";

function NewsletterForm() {
  const [isError, setIsError] = useState(false);

  const validateEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsError(!emailRegex.test(email));
  };

  return (
    <div className="pt-14 px-7 pb-[6.5rem] max-w-[26.625rem] mx-auto">
      <h2 className="mb-4 font-bold text-xl">Newsletter</h2>
      <p className="mb-8 font-semibold text-sm">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <form
        onSubmit={validateEmail}
        className="flex flex-col gap-4 items-end"
        noValidate
      >
        <div className="w-full">
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
            } pt-4 place-self-end font-semibold text-xs text-priLightRed`}
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
