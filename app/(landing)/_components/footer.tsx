import { Button } from "@/components/ui/button";

export const Footer = () => {
	return (
		<div className="flex items-center w-full p-6 bg-background z-50">
			<div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
				<Button variant="ghost">Conditions d'utilisation</Button>
				<Button variant="ghost">Politique de confidentialité</Button>
			</div>
		</div>
	);
};
