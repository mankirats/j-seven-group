import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
    {
        title: "Full Truckload (FTL)",
        description:
            "Dedicated truck capacity across Canada with optimized routing and guaranteed delivery windows.",
    },
    {
        title: "Cross-Border Shipping",
        description:
            "Seamless Canada–US freight movement with customs coordination handled end-to-end.",
    },
    {
        title: "Warehousing & Distribution",
        description:
            "Secure storage, inventory management, and scalable distribution solutions.",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

function MinimalIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );
}

export default function Excellence() {
    return (
        <>
            {/* Modern Split Services Section */}
            <section style={styles.section}>
                <div style={styles.splitLayout}>
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={styles.left}
                    >
                        <h2 style={styles.title}>Logistics Built for Scale</h2>
                        <p style={styles.subtitle}>
                            Intelligent freight infrastructure designed for
                            reliability, speed, and nationwide growth.
                        </p>
                        <Link to="/services">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                style={styles.primaryButton}
                            >
                                Explore All our Services
                            </motion.button>
                        </Link>
                    </motion.div>
                    {/* Right Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        style={styles.right}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                style={{
                                    ...styles.card,
                                    marginTop: index === 0 ? 0 : 30,
                                }}
                            >
                                <div style={styles.iconWrapper}>
                                    <MinimalIcon />
                                </div>
                                <div>
                                    <h3 style={styles.cardTitle}>
                                        {service.title}
                                    </h3>
                                    <p style={styles.cardDescription}>
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={styles.ctaSection}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={styles.ctaTitle}
                >
                    Let’s Move Your Business Forward
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    style={styles.ctaText}
                >
                    Partner with a logistics team that values precision, speed,
                    and long-term reliability.
                </motion.p>
                <Link to="/contact">
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        style={styles.secondaryButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Our Team
                    </motion.button>
                </Link>
            </section>
        </>
    );
}

const styles = {
    section: {
        padding: "140px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    splitLayout: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
    },
    left: {
        maxWidth: "500px",
    },
    right: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: "clamp(32px, 4vw, 48px)",
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
    },
    subtitle: {
        marginTop: "24px",
        fontSize: "18px",
        color: "#666",
        lineHeight: 1.7,
    },
    primaryButton: {
        marginTop: "40px",
        padding: "14px 32px",
        fontSize: "15px",
        borderRadius: "40px",
        border: "none",
        backgroundColor: "#111",
        color: "#fff",
        cursor: "pointer",
    },
    card: {
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
        padding: "28px 30px",
        borderRadius: "20px",
        border: "1px solid #f0f0f0",
        backgroundColor: "#ffffff",
    },
    iconWrapper: {
        minWidth: "40px",
        height: "40px",
        borderRadius: "10px",
        backgroundColor: "#111",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cardTitle: {
        fontSize: "17px",
        fontWeight: 600,
        marginBottom: "6px",
    },
    cardDescription: {
        fontSize: "15px",
        color: "#555",
        lineHeight: 1.6,
    },
    ctaSection: {
        padding: "120px 20px",
        backgroundColor: "#0f0f0f",
        color: "#fff",
        textAlign: "center",
    },
    ctaTitle: {
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 600,
    },
    ctaText: {
        marginTop: "24px",
        fontSize: "18px",
        color: "#bbb",
    },
    secondaryButton: {
        marginTop: "40px",
        padding: "16px 36px",
        fontSize: "16px",
        borderRadius: "40px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#fff",
        color: "#000",
    },
};
