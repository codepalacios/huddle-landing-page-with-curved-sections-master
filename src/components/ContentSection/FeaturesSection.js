import React from "react";
import illustrationGrowTogether from "../../assets/images/illustration-grow-together.svg";
import illustrationFlowingConversations from "../../assets/images/illustration-flowing-conversation.svg";
import illustrationYourUsers from "../../assets/images/illustration-your-users.svg";

function FeaturesSection() {
  return (
    <article className="text-center text-neuVeryDarkCyan font-openSans text-sm lg:text-left lg:text-base">
      <section>
        <div className="w-full h-[134.22px] bg-stm1 bg-no-repeat bg-bottom bg-full-width tab:h-[18.625rem] tab:bg-std1">
          {/* div for top background for Grow Together section */}
        </div>
        <div className="bg-neuVeryPaleBlue">
          <div
            className="pt-20 pb-[4.375rem] px-[1.6875rem] max-w-[26.625rem] mx-auto lg:py-0 lg:px-12 lg:flex lg:max-w-[79.75rem]
            lg:h-[35rem] lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-4"
          >
            <img
              className="w-[16.1631rem] inline-block lg:w-[45.61%] lg:pr-[1.3125rem]"
              src={illustrationGrowTogether}
              alt=""
            />
            <div className="lg:max-w-[32.5rem]">
              <h2 className="mt-10 mb-4 font-bold text-poppins text-xl lg:mt-0 lg:mb-[1.625rem] lg:text-[2.5rem] lg:leading-[3.75rem]">
                Grow Together
              </h2>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[9.1875rem] bg-sbm1 bg-no-repeat bg-top bg-full-width tab:h-[15.125rem] tab:bg-sbd1">
          {/* div for bottom background of Grow Together section */}
        </div>
      </section>
      <section className="px-[1.6875rem] max-w-[26.625rem] mx-auto lg:px-12 lg:max-w-[81rem] lg:h-[35rem] lg:flex lg:justify-between lg:items-center lg:gap-4">
        <img
          className="w-[16.5938rem] inline-block lg:w-[45.5%] lg:pl-[.9375rem]"
          src={illustrationFlowingConversations}
          alt=""
        />
        <div className="lg:max-w-[32.5rem]">
          <h2 className="mt-10 mb-4 font-bold text-poppins text-xl lg:mt-0 lg:mb-[1.625rem] lg:text-[2.5rem] lg:leading-[3.75rem]">
            Flowing Conversations
          </h2>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </section>
      <section>
        <div className="w-full h-[14.5rem] bg-stm2 bg-no-repeat bg-bottom bg-full-width tab:h-[16.6875rem] tab:bg-std2 lg:h-[17.5rem]">
          {/* div for the top background of the Your Users section */}
        </div>
        <div className="bg-neuVeryPaleBlue">
          <div
            className="pt-[.4375rem] px-[1.6875rem] pb-28 max-w-[26.625rem] mx-auto lg:py-0 lg:px-12 lg:flex lg:max-w-[81rem] lg:h-[35rem] 
            lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-4"
          >
            <img
              className="w-[16.6875rem] inline-block lg:w-[45.58%] lg:pr-[.8125rem]"
              src={illustrationYourUsers}
              alt=""
            />
            <div className="lg:max-w-[32.5rem]">
              <h2 className="mt-10 mb-4 font-bold text-poppins text-xl lg:mt-0 lg:mb-[1.625rem] lg:text-[2.5rem] lg:leading-[3.75rem]">
                Your Users
              </h2>
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[12.5rem] bg-sbm2 bg-no-repeat bg-top bg-full-width tab:h-[17.125rem] tab:bg-sbd2">
          {/* div for bottom background of Your Users section */}
        </div>
      </section>
    </article>
  );
}

export { FeaturesSection };
