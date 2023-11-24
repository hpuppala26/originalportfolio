import React from "react";
import TwitterLogo from "@images/icons/twitter-logo.svg";
import GithubLogo from "@images/icons/github-logo.svg";
import MailLogo from "@images/icons/mail-logo.svg";
import LinkedInLogo from "@images/icons/linkedin-logo.svg";

const contactInfoArr = [
  {
    id: "github",
    icon: GithubLogo,
    url: "https://github.com/shivasaicharanruthala",
  },
  {
    id: "linkedIn",
    icon: LinkedInLogo,
    url: "https://www.linkedin.com/in/shiva-sai-charan-ruthala/",
  },
  {
    id: "twitter",
    icon: TwitterLogo,
    url: "https://twitter.com/shiva71213534",
  },
  {
    id: "mail",
    icon: MailLogo,
    url: "mailto:ruthala.s@northeastern.edu",
  }
];

function ContactLogos(): JSX.Element {
  return (
    <div className="flex items-center justify-start gap-4">
      {contactInfoArr.map((contactInfo) => {
        const { icon: Icon } = contactInfo;
        return (
          <a
            href={contactInfo.url}
            key={contactInfo.id}
            target={"_blank"}
            aria-label={`click to connect Shiva Sai charan's ${contactInfo.id} account`}
          >
            <Icon className="h-10 w-10 hover:scale-110 transition-transform duration-75 ease-linear" />
          </a>
        );
      })}
    </div>
  );
}

export default ContactLogos;
