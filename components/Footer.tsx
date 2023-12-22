import { FooterSection } from "@/constants";
import React from "react";

interface FooterItem {
  icon?: string;
  name: string;
}

const Footer = () => {
  return (
    <div className="flex flex-row justify-around p-16 bg-slate-300 dark:bg-slate-800">
      {FooterSection.map((footer, index) => (
        <div key={index}>
          <div className="pb-8 text-[20px] font-semibold">{footer.name}</div>
          <div>
            {footer.data.map((item: FooterItem, itemIndex) => (
              <div key={itemIndex} className="flex flex-row pb-4">
                <p className={`${footer.name === "Follow Us" ? "pr-4" : ""}`}>
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 dark:text-white"
                    />
                  ) : (
                    ""
                  )}
                </p>

                <p className="font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
