import React from "react";
import illustrationGrowTogether from "../../assets/images/illustration-grow-together.svg";
import illustrationFlowingConversations from "../../assets/images/illustration-flowing-conversation.svg";
import illustrationYourUsers from "../../assets/images/illustration-your-users.svg";

function FeaturesSection() {
  return (
    <article className="text-center text-neuVeryDarkCyan font-openSans text-sm">
      <section>
        <div className="w-full h-[134.22px] bg-stm1 bg-no-repeat bg-bottom bg-full-width tab:h-[18.625rem] tab:bg-std1">
          {/* div for background top */}
        </div>
        <div className="bg-neuVeryPaleBlue">
          <div className="pt-20 pb-[4.375rem] px-[1.6875rem] max-w-[26.625rem] mx-auto">
            <img
              className="w-[16.1631rem] inline-block"
              src={illustrationGrowTogether}
              alt=""
            />
            <h2 className="mt-10 mb-4 font-bold text-poppins text-xl">
              Grow Together
            </h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
        <div className="w-full h-[9.1875rem] bg-sbm1 bg-no-repeat bg-top bg-full-width tab:h-[15.125rem] tab:bg-sbd1">
          {/* div for background bottom */}
        </div>
      </section>
      <section className="px-[1.6875rem] max-w-[26.625rem] mx-auto">
        <img
          className="w-[16.5938rem] inline-block"
          src={illustrationFlowingConversations}
          alt=""
        />
        <h2 className="mt-10 mb-4 font-bold text-poppins text-xl">
          Flowing Conversations
        </h2>
        <p>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </section>
      <section>
        <div className="w-full h-[14.5rem] bg-stm2 bg-no-repeat bg-bottom bg-full-width tab:h-[16.6875rem] tab:bg-std2">
          {/* div for background top */}
        </div>
        <div className="bg-neuVeryPaleBlue">
          <div className="pt-[.4375rem] px-[1.6875rem] pb-28 max-w-[26.625rem] mx-auto">
            <img
              className="w-[16.6875rem] inline-block"
              src={illustrationYourUsers}
              alt=""
            />
            <h2 className="mt-10 mb-4 font-bold text-poppins text-xl">
              Your Users
            </h2>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </div>
        <div className="w-full h-[12.5rem] bg-sbm2 bg-no-repeat bg-top bg-full-width tab:h-[17.125rem] tab:bg-sbd2">
          {/* div for background bottom */}
        </div>
      </section>
    </article>
  );
}

export { FeaturesSection };
