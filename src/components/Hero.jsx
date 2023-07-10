import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl  mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1e90ff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className="text-[#1e90ff]">Elmir 👋</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop E-commerce, blog sites with React or Nextjs
          </p>
        </div>
      </div>
        <ComputersCanvas />
    </section>
  )
}

export default Hero