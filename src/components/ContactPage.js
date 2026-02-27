import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import business from "../media/business.svg";

export default function ContactPage() {
    const [showDialog, setShowDialog] = useState(false);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
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
            className="startup-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* HERO */}
            <motion.section
                className="startup-hero"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.h1 variants={item}>Contact our team</motion.h1>
                <motion.p variants={item}>
                    Have questions about logistics, pricing, or operations? We’d
                    love to hear from you.
                </motion.p>
            </motion.section>

            {/* MAIN */}
            <section className="startup-container">
                <motion.div
                    className="startup-card"
                    initial={{ opacity: 0, y: 50, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -6 }}
                >
                    {/* INFO */}
                    <motion.div
                        className="startup-info"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.h3 variants={item}>Let’s talk</motion.h3>
                        <motion.p variants={item}>
                            Our team usually responds within a few hours. We’re
                            here to help you move freight smarter.
                        </motion.p>

                        <motion.div className="info-item" variants={item}>
                            <div>
                                <strong>
                                    <>Business Address</>
                                </strong>
                            </div>
                            <div>
                                50 Milner St., Winnipeg
                                {"     "}
                                <strong>MB, R2X 2X3</strong>
                                {"     "}
                            </div>
                        </motion.div>
                        <motion.div className="info-item" variants={item}>
                            <div>
                                <strong>
                                    <>Mailing Address</>
                                </strong>
                            </div>
                            <div>
                                218 Daylan Marshall Gate, Winnipeg
                                {"     "}
                                <strong>MB, R2P 1X8</strong>
                            </div>
                        </motion.div>

                        <motion.div className="info-item" variants={item}>
                            <div>
                                <strong>
                                    <>Cell Number</>
                                </strong>
                            </div>
                            <div>204-914-0288, 204-955-5024</div>
                        </motion.div>
                    </motion.div>

                    {/* FORM */}
                    <form className="startup-form" onSubmit={handleSubmit}>
                        <motion.div
                            className="input-group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <label>Name</label>
                            <input required />
                        </motion.div>

                        <motion.div
                            className="input-group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label>Email</label>
                            <input type="email" required />
                        </motion.div>

                        <motion.div
                            className="input-group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label>Message</label>
                            <textarea rows="4" required />
                        </motion.div>

                        <motion.button
                            className="startup-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Send message
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            {/* MODAL */}
            <AnimatePresence>
                {showDialog && (
                    <motion.div
                        className="startup-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="startup-modal"
                            initial={{ scale: 0.85, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <h3>Message received ✨</h3>
                            <p>
                                Thanks for reaching out. Our team will get back
                                to you shortly.
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
