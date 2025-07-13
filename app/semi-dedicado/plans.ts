export interface Plan {
	name: string;
	price: string;
	link: string | null;
	description: {
		ram: string;
		ssd: string;
		cores: string;
		attrs: string[];
	};
}

export const plans: Plan[] = [
	{
		name: "Puff CoreFusion",
		price: "305,96",
		link: "https://app.puffhost.com.br/index.php?rp=/store/semi-dedicado/semi-dedicado",
		description: {
			ram: "16GB",
			ssd: "100GB",
			cores: "8 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "Puff SteelEngine",
		price: "450,90",
		link: "https://app.puffhost.com.br/index.php?rp=/store/semi-dedicado/semi-dedicado-2",
		description: {
			ram: "24GB",
			ssd: "250GB",
			cores: "8 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "Puff NitroPulse",
		price: "593,90",
		link: "https://app.puffhost.com.br/index.php?rp=/store/semi-dedicado/semi-dedicado-3",
		description: {
			ram: "32GB",
			ssd: "250GB",
			cores: "9 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "Puff IronMaster",
		price: "669,90",
		link: "https://app.puffhost.com.br/index.php?rp=/store/semi-dedicado/semi-dedicado-4",
		description: {
			ram: "64GB",
			ssd: "350GB",
			cores: "9 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
] as const;
