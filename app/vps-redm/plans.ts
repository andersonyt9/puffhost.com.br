export interface VpsRedmPlan {
  name: string
  ram: string
  cpu: string
  storage: string
  price: string
  popular: boolean
  slots: string
  link: string
}

export const redmPlans: VpsRedmPlan[] = [
  {
    name: "Puff PioneerNode",
    ram: "2GB RAM",
    cpu: "3 vCPU",
    storage: "45GB SSD",
    price: "87,90",
    popular: false,
    slots: "32 jogadores",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-redm/vps-redm",
  },
  {
    name: "Puff OutlawCore",
    ram: "4GB RAM",
    cpu: "3 vCPU",
    storage: "50GB SSD",
    price: "127,90",
    popular: true,
    slots: "48 jogadores",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-redm/vps-redm-2",
  },
  {
    name: "Puff SheriffHost",
    ram: "6GB RAM",
    cpu: "4 vCPU",
    storage: "60GB SSD",
    price: "197,90",
    popular: false,
    slots: "64 jogadores",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-redm/vps-redm-3",
  },
  {
    name: "Puff DesertEngine",
    ram: "8GB RAM",
    cpu: "5 vCPU",
    storage: "70GB SSD",
    price: "245,90",
    popular: false,
    slots: "96 jogadores",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-redm/vps-redm-4",
  },
  {
    name: "Puff LegendaryWest",
    ram: "10GB RAM",
    cpu: "6 vCPU",
    storage: "80GB SSD",
    price: "288,90",
    popular: false,
    slots: "128+ jogadores",
    link: "https://app.puffhost.com.br/index.php?rp=/store/vps-redm/vps-redm-5",
  },
]
