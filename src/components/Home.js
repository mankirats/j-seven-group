import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Services from "./Services";
import TrustSection from "./TrustSection";
import Excellence from "./Excellence";
// import { useState } from "react";
import ServicesProvider from "../context/ServicesProvider";
function Home() {
    return (
        <>
            <Intro></Intro>
            <ServicesProvider>
                <Services />
            </ServicesProvider>
            <TrustSection />
            <Excellence />
        </>
    );
}

export default Home;
