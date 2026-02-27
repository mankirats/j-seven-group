import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Full Truckload (FTL)",
        description:
            "Dedicated truck capacity across Canada with optimized routing, real-time tracking, and guaranteed delivery windows.",
    },
    {
        title: "Less Than Truckload (LTL)",
        description:
            "Cost-efficient consolidated freight solutions for small to mid-sized shipments with nationwide coverage.",
    },
    {
        title: "Cross-Border Shipping",
        description:
            "Seamless Canada–US freight movement with customs coordination and compliance management handled end-to-end.",
    },
    {
        title: "Warehousing & Distribution",
        description:
            "Secure storage facilities, inventory management, and last-mile distribution tailored for scalable operations.",
    },
    {
        title: "Expedited Freight",
        description:
            "Time-critical deliveries supported by priority dispatch and 24/7 operational monitoring.",
    },
    {
        title: "Specialized & Heavy Haul",
        description:
            "Transport for oversized, temperature-controlled, or sensitive cargo with certified handling standards.",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M8 12h8M12 8v8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function ServicesPage() {
    return (
        <div style={styles.page}>
            <style>{css}</style>

            {/* Hero Section */}
            <section style={styles.heroSection}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={styles.heroTitle}
                >
                    Reliable Freight Solutions
                    <span style={styles.heroSubtitle}>
                        Built for Canadian Businesses
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={styles.heroDescription}
                >
                    We deliver precision logistics with modern fleet technology,
                    transparent communication, and scalable transport solutions
                    across Canada and beyond.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={styles.primaryButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Request a Quote
                </motion.button>
            </section>

            {/* Services Grid */}
            <section style={styles.servicesSection}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    style={styles.grid}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <div style={styles.card} className="service-card">
                                <div style={styles.iconWrapper}>
                                    <MinimalIcon />
                                </div>
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
            </section>
        </div>
    );
}

const styles = {
    page: {
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen",
        color: "#111",
        backgroundColor: "#ffffff",
    },
    heroSection: {
        padding: "140px 20px 100px",
        textAlign: "center",
        maxWidth: "1100px",
        margin: "0 auto",
    },
    heroTitle: {
        fontSize: "clamp(36px, 5vw, 64px)",
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
    },
    heroSubtitle: {
        display: "block",
        marginTop: "20px",
        fontSize: "clamp(20px, 2.5vw, 28px)",
        fontWeight: 400,
        color: "#666",
    },
    heroDescription: {
        marginTop: "40px",
        fontSize: "18px",
        color: "#555",
        maxWidth: "700px",
        marginLeft: "auto",
        marginRight: "auto",
        lineHeight: 1.6,
    },
    primaryButton: {
        marginTop: "50px",
        padding: "16px 36px",
        fontSize: "16px",
        borderRadius: "40px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#111",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    },
    servicesSection: {
        padding: "30px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "40px",
    },
    card: {
        padding: "40px",
        borderRadius: "24px",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid #eee",
        transition: "all 0.4s ease",
    },
    iconWrapper: {
        width: "48px",
        height: "48px",
        borderRadius: "14px",
        backgroundColor: "#111",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "24px",
    },
    cardTitle: {
        fontSize: "20px",
        fontWeight: 600,
        marginBottom: "14px",
    },
    cardDescription: {
        fontSize: "16px",
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

const css = `
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}
`;
