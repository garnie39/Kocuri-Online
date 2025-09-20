import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-[#76878E]">
        Subscribe now for the exclusive access to our creativity & special
        offers only for our membership!
      </p>
      <p className="text-[#76878E] mt-3">
        This free membership will allow you to enjoy all our exclusive content
        and offers.
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className="bg-[#76878E] text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
