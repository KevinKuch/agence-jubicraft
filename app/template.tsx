'use client';

import { motion, AnimatePresence } from 'framer-motion';


export default function Template({ 
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	return (
		<div>
			<AnimatePresence mode='wait'>
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					{children}
				</motion.main>
			</AnimatePresence>
		</div>
	)
}