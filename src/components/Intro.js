import { motion } from "framer-motion";

function Intro() {
    return (
        <motion.div
            className="intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.25 },
                },
            }}
        >
            <div>
                <motion.h1
                    className="intro--title"
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.9 }}
                >
                    Moving goods across Canada daily
                </motion.h1>
            </div>

            <motion.div
                className="intro--subtitle"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
            >
                We handle freight with precision and care. From coast to coast,
                Canadian Transport Solutions delivers on time, every time.
            </motion.div>

            <motion.div
                className="intro--buttons"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <button>Get a Quote</button>
                <button className="support-button">Contact us</button>
            </motion.div>
        </motion.div>
    );
}

export default Intro;
