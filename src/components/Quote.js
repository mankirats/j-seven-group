import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Quote() {
    const [showDialog, setShowDialog] = useState(false);

    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowDialog(true);
    };

    return (
        <motion.div
            className="quote-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* HERO */}
            <motion.section
                className="quote-hero"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.h1 variants={item}>Request a Quote</motion.h1>
                <motion.p variants={item}>
                    Tell us about your shipment and our team will provide a
                    tailored logistics solution.
                </motion.p>
            </motion.section>

            {/* MAIN */}
            <section className="quote-container">
                <motion.div
                    className="quote-card"
                    initial={{ opacity: 0, y: 50, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -6 }}
                >
                    {/* INFO SIDE */}
                    <motion.div
                        className="quote-info"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.h3 variants={item}>Shipment Details</motion.h3>
                        <motion.p variants={item}>
                            We typically respond within a few hours with pricing
                            and availability.
                        </motion.p>

                        <motion.div className="info-item" variants={item}>
                            🚚 Freight & Logistics
                        </motion.div>
                        <motion.div className="info-item" variants={item}>
                            ⚡ Fast Response Time
                        </motion.div>
                        <motion.div className="info-item" variants={item}>
                            🌎 Nationwide Coverage
                        </motion.div>
                    </motion.div>

                    {/* FORM */}
                    <form className="quote-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <input placeholder="Full Name" required />
                            <input placeholder="Company Name" />
                        </div>

                        <div className="row">
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                            />
                            <input placeholder="Phone Number" />
                        </div>

                        <div className="row">
                            <input placeholder="Pickup Location" required />
                            <input placeholder="Delivery Location" required />
                        </div>

                        <textarea
                            rows="4"
                            placeholder="Shipment Details"
                            required
                        />

                        <motion.button
                            className="quote-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Get Quote
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            {/* SUCCESS MODAL */}
            <AnimatePresence>
                {showDialog && (
                    <motion.div
                        className="quote-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="quote-modal"
                            initial={{ scale: 0.85, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <h3>Quote Request Sent ✨</h3>
                            <p>
                                Thank you for your request. Our logistics team
                                will review your shipment details and contact
                                you shortly with a customized quote.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowDialog(false)}
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
