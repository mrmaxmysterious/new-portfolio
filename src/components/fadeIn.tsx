import { motion } from "framer-motion";

export default function FadeIn({ children }: {children: React.ReactNode}) {
    return <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 1}} variants={{visible: {opacity: 1}, hidden: {opacity: 0}}}>{children}</motion.div>
}