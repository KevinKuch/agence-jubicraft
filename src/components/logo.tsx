import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex-none">
			{/* Utilise le logo noir en theme clair */}
			<Image 
				className="cursor-pointer"
				src="/jc-logo-dark.svg" 
				height="200"
				width="200" 
				alt="Jubilee Craft Logo" 
			/>
		</div>
	);
};

export default Logo;