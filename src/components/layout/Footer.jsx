// import FooterColumn from "./FooterColumn";
// import FooterSubscribe from "./FooterSubscribe";

import { Button, TextInput } from "flowbite-react";
import PageContainer from "./PageContainer";
import SearchInput from "../ui/SearchInput";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import styled from "styled-components";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <PageContainer>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
            {/* Brand */}
            <div className="col-span-2 max-w-[75%]">
              <img src="logo.svg" alt="" />
              <p className="mt-4 text-sm leading-relaxed">
                INDULJ is your go-to platform for discovering daily food and
                drink deals nearby. Help you eat well and save more one deal at
                a time.
              </p>
              <div className="mt-3 flex gap-3">
                <SocialIcon icon={<FiFacebook />} />
                <SocialIcon icon={<FiInstagram />} />
                <SocialIcon icon={<FaWhatsapp />} />
                <SocialIcon icon={<FaLinkedin />} />
              </div>
              {/* <div className="flex gap-3 mt-6">
                {["facebook", "instagram", "twitter", "linkedin"].map(
                  (icon) => (
                    <span
                      key={icon}
                      className="h-9 w-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
                    >
                      {icon[0].toUpperCase()}
                    </span>
                  ),
                )}
              </div> */}
            </div>

            {/* Resources */}
            <FooterColumn
              title="Resources"
              links={[
                "Weekly Picks",
                "Daily Deals",
                "Plan Happy Hour",
                "Submit a Deal",
              ]}
            />

            {/* Quick Links */}
            <FooterColumn
              title="Quick Links"
              links={["About", "Contact", "FAQ", "Privacy Policy"]}
            />

            {/* Subscribe */}
            <FooterSubscribe />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 text-center text-sm">
          © 2025 INDULJ. All rights reserved.
        </div>
      </PageContainer>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col col-span-1">
      <ul className="space-y-2">
        <h3 className="text-white font-semibold mb-4">{title}</h3>
        {links.map((link) => (
          <li key={link} className="hover:text-white transition cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }) {
  const SocialButton = styled.button`
    width: 30px;
    height: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <SocialButton className="rounded-full cursor-pointer bg-danger text-center">
      {icon}
    </SocialButton>
  );
}

function FooterSubscribe() {
  return (
    <div className="col-span-2">
      <h3 className="text-white font-semibold mb-4">
        Stay updated with the food deals.
      </h3>

      <SearchInput
        icon={FiMail}
        placeholder="Enter your email"
        buttonTxt={"Subscribe"}
      />
    </div>
  );
}
