"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Server,
  Globe,
  Database,
  Shield,
  Activity,
  Calendar,
  TrendingUp,
  Wifi,
  Zap,
} from "lucide-react"
import { useState, useEffect, useCallback, useMemo, memo } from "react"

interface ServiceStatus {
  id: string
  name: string
  status: "operational" | "degraded" | "outage"
  uptime: number
  responseTime: number
  icon: React.ReactNode
}

interface Incident {
  id: string
  title: string
  status: "investigating" | "identified" | "monitoring" | "resolved"
  severity: "low" | "medium" | "high" | "critical"
  date: string
  description: string
}

// Componente memoizado para cada serviço
const ServiceItem = memo(
  ({
    service,
    index,
    total,
    getStatusIcon,
    getStatusColor,
    getStatusText,
  }: {
    service: ServiceStatus
    index: number
    total: number
    getStatusIcon: (status: string) => React.ReactNode
    getStatusColor: (status: string) => string
    getStatusText: (status: string) => string
  }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-accent-primary">{service.icon}</div>
          <span className="font-medium text-gray-900">{service.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right text-sm text-gray-600 min-w-[100px]">
            <div>Uptime: {service.uptime.toFixed(2)}%</div>
            <div>Resposta: {service.responseTime}ms</div>
          </div>
          <div className="flex items-center gap-2 min-w-[120px] justify-end">
            {getStatusIcon(service.status)}
            <span className={`font-medium ${getStatusColor(service.status)}`}>{getStatusText(service.status)}</span>
          </div>
        </div>
      </div>
      <Progress value={service.uptime} className="h-2" />
      {index < total - 1 && <Separator />}
    </div>
  ),
)

ServiceItem.displayName = "ServiceItem"

// Componente memoizado para métricas
const MetricCard = memo(
  ({
    icon,
    value,
    label,
    gradient,
    iconColor,
    valueColor,
  }: {
    icon: React.ReactNode
    value: string
    label: string
    gradient: string
    iconColor: string
    valueColor: string
  }) => (
    <Card className={`border-0 shadow-lg ${gradient}`}>
      <CardHeader className="text-center">
        <div className={`h-8 w-8 mx-auto mb-2 ${iconColor}`}>{icon}</div>
        <CardTitle className={`text-2xl ${valueColor}`}>{value}</CardTitle>
        <CardDescription className={valueColor}>{label}</CardDescription>
      </CardHeader>
    </Card>
  ),
)

MetricCard.displayName = "MetricCard"

export default function StatusPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isLive, setIsLive] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  const [services, setServices] = useState<ServiceStatus[]>([
    {
      id: "vps",
      name: "Servidores VPS",
      status: "operational",
      uptime: 99.98,
      responseTime: 45,
      icon: <Server className="h-5 w-5" />,
    },
    {
      id: "dedicated",
      name: "Servidores Dedicados",
      status: "operational",
      uptime: 99.99,
      responseTime: 32,
      icon: <Database className="h-5 w-5" />,
    },
    {
      id: "network",
      name: "Rede Global",
      status: "operational",
      uptime: 99.97,
      responseTime: 28,
      icon: <Globe className="h-5 w-5" />,
    },
    {
      id: "panel",
      name: "Painel de Controle",
      status: "operational",
      uptime: 99.95,
      responseTime: 120,
      icon: <Activity className="h-5 w-5" />,
    },
    {
      id: "security",
      name: "Sistema de Segurança",
      status: "operational",
      uptime: 100,
      responseTime: 15,
      icon: <Shield className="h-5 w-5" />,
    },
  ])

  // Dados estáticos para incidentes (otimização)
  const incidents: Incident[] = useMemo(
    () => [
      {
        id: "inc-001",
        title: "Manutenção programada - Datacenter SP",
        status: "resolved",
        severity: "low",
        date: "2025-07-02",
        description: "Manutenção preventiva realizada com sucesso no datacenter de São Paulo.",
      },
      {
        id: "inc-002",
        title: "Latência elevada - Região Sul",
        status: "resolved",
        severity: "medium",
        date: "2025-06-08",
        description: "Problema de roteamento resolvido, latência normalizada.",
      },
    ],
    [],
  )

  // Timer otimizado para tempo
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 30000) // Atualiza a cada 30 segundos

    return () => clearInterval(timeInterval)
  }, [])

  // Simulação otimizada de atualizações
  const updateServices = useCallback(() => {
    setServices((prevServices) =>
      prevServices.map((service) => ({
        ...service,
        responseTime: Math.max(10, service.responseTime + Math.floor(Math.random() * 7) - 3),
        uptime: Math.min(100, Math.max(99.9, service.uptime + (Math.random() * 0.005 - 0.0025))),
      })),
    )
    setIsLive((prev) => !prev)
    setLastUpdate(new Date())
  }, [])

  useEffect(() => {
    const statusInterval = setInterval(updateServices, 15000) // 15 segundos
    return () => clearInterval(statusInterval)
  }, [updateServices])

  // Funções de utilidade memoizadas
  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case "operational":
        return "text-emerald-600"
      case "degraded":
        return "text-amber-600"
      case "outage":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }, [])

  const getStatusIcon = useCallback((status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-emerald-600" />
      case "degraded":
        return <AlertTriangle className="h-4 w-4 text-amber-600" />
      case "outage":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }, [])

  const getStatusText = useCallback((status: string) => {
    switch (status) {
      case "operational":
        return "Operacional"
      case "degraded":
        return "Degradado"
      case "outage":
        return "Indisponível"
      default:
        return "Desconhecido"
    }
  }, [])

  const getSeverityBadge = useCallback((severity: string) => {
    const colors = {
      low: "bg-blue-50 text-blue-700 border-blue-200",
      medium: "bg-amber-50 text-amber-700 border-amber-200",
      high: "bg-orange-50 text-orange-700 border-orange-200",
      critical: "bg-red-50 text-red-700 border-red-200",
    }
    return colors[severity as keyof typeof colors] || "bg-gray-50 text-gray-700 border-gray-200"
  }, [])

  const getIncidentBadge = useCallback((status: string) => {
    const colors = {
      investigating: "bg-red-50 text-red-700 border-red-200",
      identified: "bg-orange-50 text-orange-700 border-orange-200",
      monitoring: "bg-amber-50 text-amber-700 border-amber-200",
      resolved: "bg-emerald-50 text-emerald-700 border-emerald-200",
    }
    return colors[status as keyof typeof colors] || "bg-gray-50 text-gray-700 border-gray-200"
  }, [])

  // Métricas calculadas e memoizadas
  const metrics = useMemo(() => {
    const overallUptime = services.reduce((acc, service) => acc + service.uptime, 0) / services.length
    const averageResponseTime = Math.round(
      services.reduce((acc, service) => acc + service.responseTime, 0) / services.length,
    )
    const activeIncidents = incidents.filter((incident) => incident.status !== "resolved").length
    const allOperational = services.every((service) => service.status === "operational")

    return { overallUptime, averageResponseTime, activeIncidents, allOperational }
  }, [services, incidents])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50/30">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header otimizado */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-accent-primary bg-clip-text text-transparent">
              Status dos Serviços
            </h1>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
              <Wifi
                className={`h-4 w-4 transition-colors duration-300 ${isLive ? "text-emerald-600" : "text-emerald-400"}`}
              />
              <span
                className={`text-sm font-medium transition-colors duration-300 ${isLive ? "text-emerald-600" : "text-emerald-400"}`}
              >
                AO VIVO
              </span>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitoramento em tempo real da disponibilidade e performance dos nossos serviços
          </p>
        </header>

        {/* Status Geral */}
        <Card
          className={`mb-8 border-0 shadow-lg transition-all duration-300 ${
            metrics.allOperational
              ? "bg-gradient-to-r from-emerald-50 to-green-50"
              : "bg-gradient-to-r from-amber-50 to-orange-50"
          }`}
        >
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              {metrics.allOperational ? (
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              ) : (
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              )}
              <CardTitle className={`text-2xl ${metrics.allOperational ? "text-emerald-700" : "text-amber-700"}`}>
                {metrics.allOperational ? "Todos os Sistemas Operacionais" : "Alguns Sistemas com Problemas"}
              </CardTitle>
            </div>
            <CardDescription className="text-lg">
              Uptime geral:{" "}
              <span className={`font-semibold ${metrics.allOperational ? "text-emerald-600" : "text-amber-600"}`}>
                {metrics.overallUptime.toFixed(2)}%
              </span>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Métricas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={<TrendingUp className="h-8 w-8" />}
            value={`${metrics.overallUptime.toFixed(2)}%`}
            label="Uptime Médio (30 dias)"
            gradient="bg-gradient-to-br from-emerald-50 to-green-50"
            iconColor="text-emerald-600"
            valueColor="text-emerald-700"
          />
          <MetricCard
            icon={<Zap className="h-8 w-8" />}
            value={`${metrics.averageResponseTime}ms`}
            label="Tempo de Resposta Médio"
            gradient="bg-gradient-to-br from-accent-primary/10 to-pink-50"
            iconColor="text-accent-primary"
            valueColor="text-accent-primary"
          />
          <MetricCard
            icon={<Shield className="h-8 w-8" />}
            value={metrics.activeIncidents.toString()}
            label="Incidentes Ativos"
            gradient="bg-gradient-to-br from-purple-50 to-indigo-50"
            iconColor="text-purple-600"
            valueColor="text-purple-700"
          />
        </div>

        {/* Serviços */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-6 w-6 text-accent-primary" />
                <CardTitle>Status dos Serviços</CardTitle>
              </div>
              <Badge variant="outline" className="text-accent-primary border-accent-primary">
                Atualizado:{" "}
                {lastUpdate.toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Badge>
            </div>
            <CardDescription>Monitoramento em tempo real de todos os nossos serviços</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {services.map((service, index) => (
              <ServiceItem
                key={service.id}
                service={service}
                index={index}
                total={services.length}
                getStatusIcon={getStatusIcon}
                getStatusColor={getStatusColor}
                getStatusText={getStatusText}
              />
            ))}
          </CardContent>
        </Card>

        {/* Histórico de Incidentes */}
        <Card className="border-0 shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-amber-600" />
              Histórico de Incidentes
            </CardTitle>
            <CardDescription>Últimos incidentes e manutenções realizadas</CardDescription>
          </CardHeader>
          <CardContent>
            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <article key={incident.id} className="border border-gray-200 rounded-lg p-4 space-y-2 bg-gray-50/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{incident.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge className={`border ${getSeverityBadge(incident.severity)}`}>
                          {incident.severity.toUpperCase()}
                        </Badge>
                        <Badge className={`border ${getIncidentBadge(incident.status)}`}>
                          {incident.status.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{incident.description}</p>
                    <time className="text-xs text-gray-500" dateTime={incident.date}>
                      {new Date(incident.date).toLocaleDateString("pt-BR")}
                    </time>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                <p>Nenhum incidente registrado recentemente</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Informações Adicionais */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-accent-primary" />
                Monitoramento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Verificação a cada 30 segundos</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Múltiplas localizações de teste</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Alertas automáticos</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Wifi className="h-4 w-4 text-accent-primary" />
                <span>Atualização em tempo real</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent-primary" />
                Suporte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p className="font-medium text-gray-900">Em caso de problemas:</p>
                <div className="space-y-1 text-gray-600">
                  <p>• Verifique esta página primeiro</p>
                  <p>• Entre em contato via ticket</p>
                  <p>• Acompanhe nossas redes sociais</p>
                  <p>• Status atualizado automaticamente</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isLive ? "bg-emerald-500 animate-pulse" : "bg-gray-400"
              }`}
            ></div>
            <p>
              Última atualização:{" "}
              <time dateTime={currentTime.toISOString()}>{currentTime.toLocaleString("pt-BR")}</time>
            </p>
          </div>
          <p>Todos os horários estão em GMT-3 (Brasília)</p>
          <p className="mt-1 text-xs">Página atualizada automaticamente a cada 15 segundos</p>
        </footer>
      </div>
    </div>
  )
}
