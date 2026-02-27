import { motion } from "framer-motion";
import truck from "../media/trust.jpg";

function TrustSection() {
    return (
        <div className="trustSection">
            {/* Title */}
            <motion.div
                className="trustSection-title"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.9 }}
            >
                <h1>BUILT ON SOLID GROUND</h1>
                <p>Thirty years of consistent service across Canada</p>
            </motion.div>

            <div className="trustSection-main">
                {/* Numbers */}
                <motion.div
                    className="trustSection-numbers"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.7 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.25,
                            },
                        },
                    }}
                >
                    {[
                        {
                            value: "> 50,000",
                            label: "Deliveries completed annually",
                        },
                        {
                            value: "99%",
                            label: "On-time delivery rate",
                        },
                        {
                            value: "10",
                            label: "Provinces covered coast to coast",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, x: -40 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1>{item.value}</h1>
                            <h5>{item.label}</h5>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Image */}
                <motion.div
                    className="trustSection-image"
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img src={truck} alt="" />
                </motion.div>
            </div>
        </div>
    );
}

export default TrustSection;
