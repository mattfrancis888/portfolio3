import { render } from "react-dom";
import React, { useState } from "react";
import DetailBanner from "./DetailBanner";
import DetailBack from "./DetailBack";
import me1 from "../img/me1.jpg";
import me2 from "../img/me2.jpg";
const DetailAboutMe: React.FC<{}> = () => {
    return (
        <div className="detailAboutMeContainer">
            <DetailBanner title="About Me" imgSrc={me1} />
            <div className="aboutMeWrap">
                <div className="myStoryWrap">
                    <div className="myStoryInnerWrap">
                        <div className="myStoryBlock"></div>
                        <h1>my Story</h1>
                    </div>
                </div>
                <div className="aboutMeImageAndDescWrap">
                    <h1>Matthew Francis</h1>
                    <p>
                        1992年、沖縄県生まれ。大学を卒業後、県内の制作会社でDTPオペレーターとして就職後、大手紳士服量販店を中心に十数社のコーポレートサイトの運用業務を担当しました。
                        2017年より、個人でもWebデザイナーとしての活動を開始し、写真撮影・デザイン・コーディングまでワンストップで対応しています。
                    </p>
                    <img src={me2} alt="" />
                </div>
            </div>
            <DetailBack />
        </div>
    );
};

export default DetailAboutMe;