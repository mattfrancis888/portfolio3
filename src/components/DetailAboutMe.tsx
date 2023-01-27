import { render } from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import DetailBanner from "./DetailBanner";
import DetailBack from "./DetailBack";
import me1 from "../img/me1.jpg";
import me2 from "../img/me2.jpg";
import me3 from "../img/me3.jpg";
import me4 from "../img/me4.jpg";
import { SLIDE_ABOUT_ME_DESC } from "./Carousel";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import Loading from "./Loading";
interface DetailAboutMeProps {
    // changeHeaderBackIconToBlack: any;
    updateHeaderBackIconToBlack(setColorToBlack: boolean): void;
}
const DetailAboutMe: React.FC<DetailAboutMeProps> = (props) => {
    const [loadedImages, setLoadedImages] = useState(0);
    useEffect(() => {
        document.body.style.overflowY = "visible";
    }, []);

    return (
        <React.Fragment>
            <Loading imagesToLoad={1} loadedImages={loadedImages} />

            <div className="detail-about-me-and-work">
                <div
                    onLoad={() => {
                        setLoadedImages(loadedImages + 1);
                    }}
                >
                    <DetailBanner
                        title="About Me"
                        imgSrc={me3}
                        desc={SLIDE_ABOUT_ME_DESC}
                    />
                </div>
                <div className="detail-about-me-and-work__content">
                    <div className="detail-about-me-and-work__content-title">
                        <div className="detail-about-me-and-work__content-title-content">
                            <div className="detail-about-me-and-work__content-title-content--block"></div>
                            <h1>my Story</h1>
                        </div>
                    </div>
                    <div className="detail-about-me-and-work__desc">
                        <h1>Matthew Francis</h1>
                        <p>
                            Born in Jakarta, Indonesia. Raised in Ontario,
                            Canada.
                        </p>
                        <img src={me4} alt="" />
                    </div>
                </div>
                <DetailBack />
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state: StoreState) => {
    return {
        // changeHeaderBackIconToBlack: state.changeHeaderBackIconToBlack,
    };
};

export default connect(mapStateToProps, {})(DetailAboutMe);
