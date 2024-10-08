"use client"

import React from "react";
import Image from "next/image";
import Language from "@/shared/icons/LanguageIcon";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import LanguagePopup from "@/widgets/LanguagePopup";

const WelcomeCard = () => {
    const t = useTranslations();

    const slides = [
        {
            image: "/welcome_120.svg",
            title: t('share_creativity'),
            description: t('related_to_120_community'),
        },
        {
            image: "/welcome_exchange.svg",
            title: t('exchange_BP'),
            description: t('for_an_amazing'),
        },
    ];

    return (
    <div className="flex overflow-hidden w-full flex-col bg-white dark:bg-app_gray_dark-100 rounded-[14px] ">
      <LanguagePopup />
      <Swiper
        className="w-full relative"
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
          type: 'bullets',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          bulletClass: 'swiper-pagination-bullet-custom'
        }}
        modules={[Pagination]}
      >
        <div className="swiper-pagination-custom" />
        {slides.map((i, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-y-[12px] gap-x-[12px] pb-10">
                <Image
                  src={i.image}
                  className="max-w-[331px] px-4"
                  width={331}
                  height={221}
                  alt="Illustration"
                  quality={100}
                />
                <div className="flex flex-col text-center">
                  <p className="text-secondarybody font-medium text-app_gray_light-300 select-none cursor-default">
                    {i.title}
                  </p>
                  <p className="max-w-[170px] text-center text-[12px] font-normal leading-4 tracking-[-0.02em] text-app_gray_light-300 select-none cursor-default">
                    {i.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WelcomeCard;
