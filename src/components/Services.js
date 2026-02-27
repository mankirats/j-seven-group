import { useServiceContext } from "../context/ServicesProvider";
import { motion } from "framer-motion";

function Services(props) {
    const { serviceItems } = useServiceContext();
    return (
        <div className="services">
            <div className="services-title">
                <motion.h1
                    // className=""
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    What we do best for your shipments
                </motion.h1>
            </div>
            <div className="services-subtitle">
                <p>
                    Canadian Transport Solutions offers three core services
                    designed to match your shipping requirements. Whether you
                    need dedicated capacity, cost-effective consolidation, or
                    speed, we have the right solution.
                </p>
            </div>

            <div className="services-main">
                {serviceItems.map((service, index) => {
                    return (
                        <motion.div
                            className="services-item"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <img
                                style={{ width: "50px", color: "white" }}
                                src={service.icon}
                                alt="logo"
                            />
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;
