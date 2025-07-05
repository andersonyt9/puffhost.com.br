export interface Plan {
  name: string
  price: string
  link: string | null
  description: {
    ram: string
    ssd: string
    cores: string
    attrs: string[]
  }
}

export const plans: Plan[] = [
  {
    name: "VPS Puff - 1",
    price: "70,90",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-1",
    description: {
      ram: "2GB",
      ssd: "40GB",
      cores: "2 núcleos",
      attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
    },
  },
  {
    name: "VPS Puff - 2",
    price: "90,90",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-2",
    description: {
      ram: "4GB",
      ssd: "50GB",
      cores: "2 núcleos",
      attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
    },
  },
  {
    name: "VPS Puff - 3",
    price: "118,90",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-3",
    description: {
      ram: "6GB",
      ssd: "60GB",
      cores: "3 núcleos",
      attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
    },
  },
  {
    name: "VPS Puff - 4",
    price: "167,90",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-4",
    description: {
      ram: "8GB",
      ssd: "70GB",
      cores: "4 núcleos",
      attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
    },
  },
  {
    name: "VPS Puff - 5",
    price: "257,90",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-5",
    description: {
      ram: "12GB",
      ssd: "80GB",
      cores: "6 núcleos",
      attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
    },
  },
  {
    name: "VPS Puff - 6",
    price: "357,90",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-6",
    description: {
      ram: "16GB",
      ssd: "100GB",
      cores: "10 núcleos",
      attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
    },
  },
  {
    name: "VPS Puff - 7",
    price: "447,90",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-7",
    description: {
      ram: "20GB",
      ssd: "120GB",
      cores: "12 núcleos",
      attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
    },
  },
  {
    name: "VPS Puff - 8",
    price: "557,90",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-8",
    description: {
      ram: "32GB",
      ssd: "150GB",
      cores: "16 núcleos",
      attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
    },
  },
] as const
