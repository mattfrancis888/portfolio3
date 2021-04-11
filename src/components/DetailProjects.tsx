import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { LG_SCREEN_SIZE, MED_SCREEN_SIZE, SM_SCREEN_SIZE } from "../constants";
import BlurredUpImage from "./BlurredUpImage";
import DetailBack from "./DetailBack";
import useWindowDimensions from "../windowDimensions";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import DetailBanner from "./DetailBanner";
import linkedinLg from "../img/linkedin_lg.jpg";
import lowResLinkedInlg from "../img/lowRes/low_res_linkedin_lg.jpg";
import kijijiLg from "../img/kijiji_lg.jpg";
import lowResKijijiLg from "../img/lowRes/low_res_kijiji_lg.jpg";
import multiDockerLg from "../img/multi_docker_lg.jpg";
import lowResMultiDockerLg from "../img/lowRes/low_res_multi_docker_lg.jpg";
import authLg from "../img/auth_lg.jpg";
import lowResAuthLg from "../img/lowRes/low_res_auth_lg.jpg";
import dreamworksLg from "../img/dreamworks_lg.jpg";
import lowResDreamworksLg from "../img/lowRes/low_res_dreamworks_lg.jpg";
import spotifyLg from "../img/spotify_lg.jpg";
import lowResSpotifyLg from "../img/lowRes/low_res_spotify_lg.jpg";
import lowResAppStoreLg from "../img/lowRes/low_res_app_store_lg.jpg";
import appStoreLg from "../img/app_store_lg.jpg";
import pixarLg from "../img/pixar_lg.jpg";
import lowResPixarLg from "../img/lowRes/low_res_pixar_lg.jpg";
import musicStreamLg from "../img/music_stream_lg.jpg";
import lowResMusicStreamLg from "../img/lowRes/low_res_music_stream_lg.jpg";
import tmdbLg from "../img/tmdb_lg.jpg";
import lowResTmdbLg from "../img/lowRes/low_res_tmdb_lg.jpg";
import uoLg from "../img/uo_lg.jpg";
import lowResUoLg from "../img/lowRes/low_res_uo_lg.jpg";
import giphyLg from "../img/giphy_lg.jpg";
import lowResGiphyLg from "../img/lowRes/low_res_giphy_lg.jpg";
import airbnbLg from "../img/airbnb_lg.jpg";
import lowResAirbnbLg from "../img/lowRes/low_res_airbnb_lg.jpg";
import netflixLg from "../img/netflix_lg.jpg";
import lowResNetflixLg from "../img/lowRes/low_res_netflix_lg.jpg";
import steamLg from "../img/steam_lg.jpg";
import lowResSteamLg from "../img/lowRes/low_res_steam_lg.jpg";
import blizzardLg from "../img/blizzard_lg.jpg";
import lowResBlizzardLg from "../img/lowRes/low_res_blizzard_lg.jpg";
import { SLIDE_PROJECTS_DESC } from "./SlideProjects";
const discoData = [
    {
        title: `Blizzard (Currently working on)`,
        stack: `React, React-Spring (v9), Typescript`,
        description: `Replication of Blizzard's Entertainment's website, known for developing and
        publishing games such as Call of Duty, World of Warcraft, and Overwatch.
        Built to understand physics-based animations with React Spring.`,
        lowResLg: lowResBlizzardLg,
        imgLg: blizzardLg,
        demo: `https://blizzard-roan.vercel.app`,
        github: `https://github.com/mattfrancis888/blizzard`,
    },
    {
        title: `Steam`,
        stack: `Boyce Codd Normal Form database on
        PostgreSQL, React, Redux, Express, Typescript,
        React-Testing-Library, TravisCI`,
        description: `Replication of Steam website, the largest video game retailer for PC games.
         Database is created in BCNF (Boyce Codd Normal Form); database diagram is
         shown in README. Authentication is done via cookies
          that stores access tokens and refresh tokens (JWTs); users can search for games,
          including games that are on sale; users can post, delete, edit their reviews;
        edit their profile and username; add games to their cart. Data is stored on PostgreSQL.`,
        lowResLg: lowResSteamLg,
        imgLg: steamLg,
        demo: `https://steam-project-matt.herokuapp.com/`,
        github: `https://github.com/mattfrancis888/steam`,
    },
    {
        title: `Netflix`,
        stack: `Boyce Codd Normal Form database on
        PostgreSQL, React, Redux, Express, Typescript,
        React-Testing-Library, TravisCI`,
        description: `Replication of Netflix website. Database is created
        in BCNF (Boyce Codd Normal Form); database diagram is
        shown in README. Authentication is done via cookies
        that stores access tokens and refresh tokens (JWTs);
        users can add and remove titles to their watchlist; and
        users can search for titles. Data is stored on
        PostgreSQL.`,
        lowResLg: lowResNetflixLg,
        imgLg: netflixLg,
        demo: `https://netflix-project.herokuapp.com/`,
        github: `https://github.com/mattfrancis888/netflix`,
    },
    {
        title: ` Multi-Docker`,
        stack: `Docker, AWS Elastic Beanstalk,
        TravisCI, React, PostgreSQL, Express,
        React-Testing-Library`,
        description: `A single-page app that shows the categories available for a Kijiji Listing.
        Used the same database from a previous project, Kijiji. Built to understand Docker, AWS
        infrastructure (eg: EC2, S3, RDS, VPS, Security
        Groups, etc), the deployment process to AWS Elastic
        Beanstalk, and CI/CD flow.`,
        lowResLg: lowResMultiDockerLg,
        imgLg: multiDockerLg,
        demo: `https://multi-docker.vercel.app/`,
        github: `https://github.com/mattfrancis888/multi-docker`,
    },
    {
        title: `Kijiji`,
        stack: `Boyce Codd Normal Form database on
                PostgreSQL, React, Redux, Express, Typescript,
                React-Testing-Library`,
        description: `Replication of Kijiji website. Database is created
                in BCNF (Boyce Codd Normal Form); database diagram is
                shown in README. Authentication is done via cookies
                that stores access tokens and refresh tokens (JWTs);
                users can create, edit, delete a listing, and see
                all listings by other users. Data is stored on
                PostgreSQL.`,
        lowResLg: lowResKijijiLg,
        imgLg: kijijiLg,
        demo: `https://kijiji-project.herokuapp.com/`,
        github: `https://github.com/mattfrancis888/kijiji`,
    },
    {
        title: `Authentication Project`,
        stack: `MongoDB, Mongoose, Express,
        Typescript, React, Redux, React-Testing-Library`,
        description: `When users are logged in, they can listen to Peter
        Quil's 'walkman' songs (From Guardians of The
        Galaxy). Built to understand authentication. User
        email and password are stored in MongoDB. Used JWT
        and localstorage as authentication method.`,
        lowResLg: lowResAuthLg,
        imgLg: authLg,
        demo: `https://auth-cyan.vercel.app/`,
        github: `https://github.com/mattfrancis888/auth-project`,
    },
    {
        title: `Dreamworks`,
        stack: `PostgreSQL, Express, Typescript, React,
            Redux, React-Testing-Library`,
        description: `Shows movies from Dreamworks. Movies are stored in
            PostgreSQL. Built to understand SQL queries, and the
            process of integrating PostgreSQL and the front-end.`,
        lowResLg: lowResDreamworksLg,
        imgLg: dreamworksLg,
        demo: `https://dreamworks.vercel.app/`,
        github: `https://github.com/mattfrancis888/dreamworks`,
    },

    {
        title: `Spotify`,
        stack: `MongoDB, Mongoose, Express, Typescript,
        React, Redux, React-Testing-Library`,
        description: `Shows artists from Spotify. Artists' information is
        stored on MongoDB. Built to understand the process
        of integrating MongoDB and the front-end.`,
        lowResLg: lowResSpotifyLg,
        imgLg: spotifyLg,
        demo: `https://spotify.mattfrancis888.vercel.app/`,
        github: `https://github.com/mattfrancis888/spotify`,
    },
    {
        title: `Apple's App Store Review`,
        stack: `React-Testing-Library,
        Enzyme, Typescript, React, Redux, Express`,
        description: `Replicated Apple's App Store Review. Reviews are
        stored in an online JSON database. Built to
        understand unit testing, integration testing, and
        blackbox functional testing.`,
        lowResLg: lowResAppStoreLg,
        imgLg: appStoreLg,
        demo: `https://apple-review.mattfrancis888.vercel.app/`,
        github: `https://github.com/mattfrancis888/apple_review`,
    },
    {
        title: `Pixar`,
        stack: `Typescript, React, Redux, Express`,
        description: `Replicated Pixar site. Films are stored in an online
        JSON database. Film images are stored in Cloudinary.
        Built to understand the benefits and drawbacks of
        Typescript in the React and Redux environment.`,
        lowResLg: lowResPixarLg,
        imgLg: pixarLg,
        demo: `https://pixar-three.vercel.app/`,
        github: `https://github.com/mattfrancis888/pixar`,
    },
    {
        title: `Linkedin`,
        stack: `GraphQL, Apollo (v2.6), React, Express`,
        description: `Linkedin-like site where users can see other user's
        profiles and see what companies they work for. The
        user can also create their profile. Built to
        understand how GraphQL is more suitable than RESTful
        Routing when data is strongly related to each other.`,
        lowResLg: lowResLinkedInlg,
        imgLg: linkedinLg,
        demo: `https://linkedin-phi.vercel.app/`,
        github: `https://github.com/mattfrancis888/linkedin`,
    },
    {
        title: `Music Videos Stream`,
        stack: `Redux, React, Express`,
        description: `Holds collection of Youtube Music Videos. Users can
        create, edit, delete music videos when logged in;
        users can see other published videos when not signed
        in. This is achieved by having a JSON database and
        communicating with REST. Created App to further
        understand how Redux facilitate state management;
        and to learn the benefits of Redux-Thunk,
        Redux-Form, React Hooks, and React Portals.`,
        lowResLg: lowResMusicStreamLg,
        imgLg: musicStreamLg,
        demo: `https://music-stream.now.sh/`,
        github: `https://github.com/mattfrancis888/music-stream`,
    },

    {
        title: `Giphy`,
        stack: `React, Bootstrap`,
        description: `Replicated Giphy's site. Used their API to display
        gifs. Created it to familiarize with API calls.`,
        lowResLg: lowResGiphyLg,
        imgLg: giphyLg,
        demo: `https://giphy.mattfrancis888.vercel.app/`,
        github: `https://github.com/mattfrancis888/giphy`,
    },
    {
        title: `Urban Outfitters`,
        stack: `React, Bootstrap`,
        description: `Replicated Urban Outfitters's site. Created it to
        familiarize with React, HTML, CSS, Bootstrap.`,
        lowResLg: lowResUoLg,
        imgLg: uoLg,
        demo: `https://urban-outfitters.now.sh/`,
        github: `https://github.com/mattfrancis888/Urban-Outfitters`,
    },
    {
        title: `The Movie Database`,
        stack: `HTML, CSS, JS, Webpack`,
        description: `Replicated TMDB's site. Used their API to display
        the movies. Created it to familiarize with building
        a site without any libraries/framework; familiarize
        with webpack; how preprocessors can optimize
        websites; how to optimize websites outside of
        code(such as image compression); familiarize with
        MVC design pattern.`,
        lowResLg: lowResTmdbLg,
        imgLg: tmdbLg,
        demo: `https://mattfrancis888.github.io/the_movie_db/`,
        github: `https://github.com/mattfrancis888/the_movie_db`,
    },
    {
        title: `Airbnb Android App`,
        stack: `Java, Express, MySQL`,
        description: `Replicated Airbnb's android app. Created Android App with
        Java. Built API to store and retrieve data from app
        with Node.JS and Express. Used MySQL as database.`,
        lowResLg: lowResAirbnbLg,
        imgLg: airbnbLg,
        github: `https://github.com/mattfrancis888/Airbnb`,
        githubAPI: `https://github.com/mattfrancis888/Airbnb-API`,
    },
];

const DetailProjects: React.FC<{}> = () => {
    useEffect(() => {
        document.body.style.overflowY = "visible";
    }, []);
    const { width } = useWindowDimensions();
    const renderDisco = (): JSX.Element | JSX.Element[] => {
        return discoData.map((disco, index) => {
            return (
                <div key={index} className={`projectContainer`}>
                    <div className="projectImageAndOverviewWrap">
                        <div className={`projectImageContainer`}>
                            <BlurredUpImage
                                lowRes={disco.lowResLg}
                                highRes={disco.imgLg}
                            />
                        </div>

                        <div className="projectOverviewWrap">
                            <h2 className="projectTitle">{disco.title}</h2>
                            <h2 className="projectStack">{disco.stack}</h2>
                            <p className={"showProjectDesc"}>
                                {disco.description}
                            </p>
                            {!disco.githubAPI && (
                                <div className={"showGitHubAndExternalWrap"}>
                                    <a
                                        href={disco.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="githubAndExternalIcon" />
                                    </a>
                                    <a
                                        href={disco.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiExternalLink className="githubAndExternalIcon" />
                                    </a>
                                </div>
                            )}

                            {disco.githubAPI && (
                                <div className={"showGitHubAndExternalWrap"}>
                                    <h2>App:</h2>
                                    <a
                                        href={disco.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="githubAndExternalIcon" />
                                    </a>
                                    <h2>API: </h2>
                                    <a
                                        href={disco.githubAPI}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="githubAndExternalIcon" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="detailProjectsContainer">
            <DetailBanner
                title="Projects"
                // imgSrc={
                //     "https://image.freepik.com/free-photo/stylish-workspace-dark-leather-desk-workplace-with-keyboard-computer_67155-175.jpg"
                // }
                imgSrc={
                    "https://miro.medium.com/max/1400/1*nAZueDDk8s5ggBsxmkqfXg.jpeg"
                }
                desc={SLIDE_PROJECTS_DESC}
            />
            <div className="projectsWrap">{renderDisco()}</div>
            <DetailBack />
        </div>
    );
};

export default DetailProjects;
