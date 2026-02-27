import React from "react";
import truckIcon from "../media/trucking-delivery-svgrepo-com (1).svg";

const ServicesContext = React.createContext();

const services = [
    {
        icon: truckIcon,
        title: "Freight transport across Canada",
        desc: "Every truck is maintained to the highest standards and every driver is fully trained and certified.",
    },
    {
        icon: truckIcon,
        title: "Reliability you can count on",
        desc: "We deliver when we say we will, backed by real-time tracking and transparent communication.",
    },

    {
        icon: truckIcon,
        title: "Cross-Canada expertise",
        desc: "From Atlantic routes to Pacific highways, we know every region and every challenge.",
    },
];

const ServicesProvider = ({ children }) => {
    const [serviceItems, setServicesItems] = React.useState(services);
    return (
        <ServicesContext.Provider value={{ serviceItems }}>
            {children}
        </ServicesContext.Provider>
    );
};

export const useServiceContext = () => React.useContext(ServicesContext);

export default ServicesProvider;
