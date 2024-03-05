import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import styles from '../pages/style.module.scss'

import { motion, AnimatePresence } from 'framer-motion'
 
export default function App({ Component, pageProps }: AppProps) {

	const router = useRouter();
	
	
  return (
		<AnimatePresence>
			<motion.div key={router.pathname}> 
				<Component {...pageProps} />

				<motion.div 
				className={styles.slideIn}
				initial={{scaleY: 0}}
				animate={{scaleY: 0}}
				exit={{scaleY: 1}}
				transition={{duration: 0.5, ease : "easeInOut"}}
				></motion.div>
				<motion.div 
				className={styles.slideOut}
				initial={{scaleY: 1}}
				animate={{scaleY: 0}}
				exit={{scaleY: 0}}
				transition={{duration: 0.5, ease : "easeInOut"}}
				></motion.div>
			</motion.div>
		</AnimatePresence>
		)
}