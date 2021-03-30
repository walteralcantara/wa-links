import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { motion } from 'framer-motion';

const firstItem = {
  hidden: {
    y: -100,
    scale: 0.1,
    opacity: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const secondItem = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
    },
  },
  liHovering: {
    scale: 1.2,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.2,
    },
  },
};

const thirdItem = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.5,
    },
  },
  imgHovering: {
    scale: 1.1,
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

const fourthItem = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Walter | Links</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        {/* first-item */}
        <motion.div initial="hidden" animate="visible" variants={firstItem}>
          <section className={styles.aboutMe}>
            <motion.img
              src="photo.jpg"
              alt="Walter Alcantara"
              whileHover={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 1,
                },
              }}
            />
            <motion.h1
              whileHover={{
                scale: 1.2,
              }}
            >
              Walter Alcantara
            </motion.h1>
            <a href="mailto:waltermalcantara@gmail.com">
              waltermalcantara@gmail.com
            </a>
          </section>
        </motion.div>

        {/* second-item */}
        <motion.nav
          className={styles.navLinks}
          initial="hidden"
          animate="visible"
          variants={secondItem}
        >
          <ul>
            <motion.li whileHover={secondItem.liHovering}>
              <a href="https://github.com/wmalcantara" target="_blank">
                <svg viewBox="0 0 40 40">
                  <path
                    d="M37.3169 10.4502C35.5284 7.38591 33.1025 4.95991 30.0385 3.17165C26.974 1.3833 23.6286 0.489349 19.9997 0.489349C16.3713 0.489349 13.0247 1.38357 9.96085 3.17165C6.89656 4.95982 4.47074 7.38591 2.6823 10.4502C0.894131 13.5144 0 16.8605 0 20.4885C0 24.8465 1.27147 28.7653 3.81504 32.246C6.35833 35.7269 9.64389 38.1356 13.6714 39.4723C14.1403 39.5593 14.4873 39.4981 14.713 39.2902C14.9387 39.0821 15.0515 38.8214 15.0515 38.5093C15.0515 38.4572 15.047 37.9887 15.0383 37.1031C15.0294 36.2175 15.0252 35.445 15.0252 34.7858L14.4262 34.8894C14.0443 34.9594 13.5625 34.989 12.9809 34.9806C12.3995 34.9725 11.796 34.9116 11.1711 34.7983C10.546 34.686 9.9645 34.4256 9.42627 34.0176C8.88831 33.6097 8.50642 33.0756 8.28067 32.4164L8.02027 31.8171C7.84669 31.4182 7.57343 30.975 7.20011 30.4892C6.82679 30.003 6.44927 29.6733 6.06737 29.4998L5.88504 29.3692C5.76355 29.2825 5.65082 29.1779 5.54656 29.0565C5.4424 28.9351 5.36442 28.8136 5.31234 28.6919C5.26016 28.5701 5.3034 28.4703 5.44249 28.3919C5.58159 28.3136 5.83296 28.2755 6.19771 28.2755L6.71834 28.3533C7.06557 28.4229 7.49508 28.6308 8.00741 28.9782C8.51946 29.3254 8.94039 29.7767 9.2703 30.3319C9.6698 31.0439 10.1511 31.5865 10.7156 31.9598C11.2797 32.3331 11.8483 32.5194 12.4211 32.5194C12.9939 32.5194 13.4887 32.476 13.9055 32.3896C14.3219 32.3028 14.7125 32.1723 15.0773 31.9988C15.2335 30.8352 15.6589 29.9412 16.3531 29.3163C15.3637 29.2123 14.4741 29.0557 13.6839 28.8475C12.8942 28.639 12.0782 28.3006 11.2363 27.8314C10.394 27.3629 9.69524 26.7811 9.13987 26.087C8.5844 25.3925 8.12853 24.4807 7.77291 23.3526C7.4171 22.2239 7.23914 20.922 7.23914 19.4464C7.23914 17.3454 7.92504 15.5575 9.29657 14.0817C8.65408 12.5021 8.71474 10.7314 9.47871 8.76966C9.98219 8.61323 10.7288 8.73062 11.7183 9.12109C12.7079 9.51174 13.4325 9.84639 13.8927 10.1238C14.353 10.4012 14.7217 10.6363 14.9996 10.8269C16.6144 10.3757 18.2809 10.15 19.9995 10.15C21.7181 10.15 23.3849 10.3757 24.9999 10.8269L25.9894 10.2022C26.6661 9.78537 27.4652 9.40338 28.3848 9.05615C29.3049 8.70909 30.0085 8.61351 30.4948 8.76993C31.2758 10.7318 31.3454 12.5024 30.7027 14.082C32.0741 15.5578 32.7603 17.3461 32.7603 19.4467C32.7603 20.9223 32.5817 22.2283 32.2265 23.3656C31.8707 24.5031 31.4109 25.4139 30.8469 26.1C30.2822 26.786 29.579 27.3633 28.7371 27.8317C27.8951 28.3005 27.0788 28.6389 26.2891 28.8474C25.499 29.0559 24.6094 29.2126 23.62 29.3168C24.5224 30.0977 24.9737 31.3304 24.9737 33.0143V38.5085C24.9737 38.8207 25.0823 39.0813 25.2995 39.2895C25.5165 39.4974 25.8592 39.5586 26.328 39.4715C30.3561 38.135 33.6417 35.7262 36.1849 32.2453C38.7278 28.7646 39.9997 24.8458 39.9997 20.4878C39.9988 16.8602 39.1042 13.5144 37.3169 10.4502Z"
                    fill="white"
                  />
                </svg>
                GitHub
              </a>
            </motion.li>
            <motion.li whileHover={secondItem.liHovering}>
              <a
                href="https://www.linkedin.com/in/walteralcantara"
                target="_blank"
              >
                <svg viewBox="0 0 40 40">
                  <path
                    d="M36 0H4C1.8 0 0 1.8 0 4V36C0 38.2 1.8 40 4 40H36C38.2 40 40 38.2 40 36V4C40 1.8 38.2 0 36 0ZM12 34H6V16H12V34ZM9 12.6C7 12.6 5.4 11 5.4 9C5.4 7 7 5.4 9 5.4C11 5.4 12.6 7 12.6 9C12.6 11 11 12.6 9 12.6ZM34 34H28V23.4C28 21.8001 26.6 20.4 25 20.4C23.4 20.4 22 21.8001 22 23.4V34H16V16H22V18.4C23 16.8 25.2 15.6 27 15.6C30.8 15.6 34 18.8 34 22.6V34Z"
                    fill="white"
                  />
                </svg>
                LinkedIn
              </a>
            </motion.li>
            <motion.li whileHover={secondItem.liHovering}>
              <a href="https://walteralcantara.vercel.app" target="_blank">
                <svg viewBox="0 0 40 40">
                  <path
                    d="M40 38.7313H0L20.0007 1.26864L40 38.7313Z"
                    fill="white"
                  />
                </svg>
                WebSite
              </a>
            </motion.li>
          </ul>
        </motion.nav>

        {/* third-item */}
        <motion.section
          className={styles.technologiesUsed}
          initial="hidden"
          animate="visible"
          variants={thirdItem}
        >
          <a href="https://framer.com/motion/">
            <motion.img
              src="framer-motion.png"
              alt="Framer Motion"
              whileHover={thirdItem.imgHovering}
            />
          </a>

          <a href="https://reactjs.org">
            <motion.img
              src="react-js.png"
              alt="React.JS"
              whileHover={thirdItem.imgHovering}
            />
          </a>

          <a href="https://nextjs.org">
            <motion.img
              src="next-js.png"
              alt="Next.JS"
              whileHover={thirdItem.imgHovering}
            />
          </a>
        </motion.section>

        {/* fourth-item */}
        <motion.footer
          className={styles.footer}
          initial="hidden"
          animate="visible"
          variants={fourthItem}
        >
          <p>Criado com ❤️ por Walter Alcantara</p>
        </motion.footer>
      </main>
    </div>
  );
}
