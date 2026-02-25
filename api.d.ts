sendMessage(entityId: string, message: string, options?: { color?: string }): void
setPosition(entityId: string, x: number, y: number, z: number): void
getPosition(entityId: string): { x: number, y: number, z: number }

onPlayerJoin(callback: (playerId: string) => void): void
onPlayerLeave(callback: (playerId: string) => void): void
onPlayerChat(callback: (playerId: string, message: string) => void): void
