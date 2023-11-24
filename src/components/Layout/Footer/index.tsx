"use client";

import React from "react";
import AppText from "@/components/AppText";
import ContactLogos from "@/components/ContactLogos";
import LocationIcon from '@images/icons/location-icon.svg';
import { CONTACT } from "@/constants/menu";

function Footer() {
  return (
    <footer
      className="lg:px-24 lg:py-12 md:px-16 md:py-8 px-4 py-4"
      aria-label={CONTACT}
      id={CONTACT}
    >
      <div className="flex items-center lg:flex-row flex-col">
        <div className="basis-3/4 lg:text-start text-center">
          <AppText textTag="h2" extraLarge defaultColor>
            Reach Out to me!
          </AppText>
          <AppText textTag="h2" medium secondary customClass="mt-2">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </AppText>
          <div className="flex items-center lg:justify-start justify-center gap-1 my-6">
            <LocationIcon className="h-6 w-6 fill-primaryColor-light" />
            <AppText textTag="p" default defaultColor>
              Boston, USA
            </AppText>
          </div>
          <AppText textTag="p" medium defaultColor customClass="my-6">
            Open for opportunities: Yes
          </AppText>
          <div className="flex lg:justify-start justify-center">
            <ContactLogos />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
