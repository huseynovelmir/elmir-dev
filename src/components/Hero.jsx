import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import sticker from "/sticker.webp"
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mx-w-[1440px]">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl  mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1e90ff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white flex items-center`}>Hi I'm<span
            className="text-[#1e90ff]">&nbsp; Elmir</span>
            <img className={`${styles.icon}`} src={sticker} alt="" /></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop E-commerce, blog sites with React or Nextjs
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero