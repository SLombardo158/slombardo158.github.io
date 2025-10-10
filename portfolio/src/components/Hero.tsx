import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section className="hero">
            <div className="floating" />
            <div className="container">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
                    Software Engineer
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>
                    Passionate about data manipulation. I build impactful applications from scratch and prioritize understanding clients and my team.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }} style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16 }}>
                    <a className="btn" href="#projects">See Projects</a>
                    <a className="btn secondary" href="#contact">Contact Me</a>
                </motion.div>
            </div>
        </section>
    );
}