import React from "react";
import iconCommunities from "../../assets/images/icon-communities.svg";
import iconMessages from "../../assets/images/icon-messages.svg";

function StatsSection() {
  return (
    <article className="max-w-40 mx-auto text-center font-openSans text-textColor flex flex-col gap-[5.5625rem]">
      <section>
        <img className="w-9" src={iconCommunities} alt="" />
        <h2 className="font-bold text-6xl leading-[5.6875rem] text-neuVeryDarkCyan">
          1.4k+
        </h2>
        <p className="text-[.9524rem] leading-[1.4375rem]">
          Communities Formed
        </p>
      </section>
      <section>
        <img className="w-9" src={iconMessages} alt="" />
        <h2 className="font-bold text-[3.345rem] text-neuVeryDarkCyan">
          2.7m+
        </h2>
        <p className="text-[.8362rem] leading-5">Messages Sent</p>
      </section>
    </article>
  );
}

export { StatsSection };
