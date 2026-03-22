/* =========================
   CORE
========================= */

sendMessage(entityId: string, message: string, options?: { color?: string; fontWeight?: number | string }): void
broadcastMessage(message: string, options?: { color?: string; fontWeight?: number | string }): void

setPosition(entityId: string, x: number, y: number, z: number): void
getPosition(entityId: string): { x: number, y: number, z: number }

getPlayerIds(): string[]
getNumPlayers(): number
playerIsInGame(playerId: string): boolean
playerIsLoggedIn(playerId: string): boolean

getEntityName(entityId: string): string
getPlayerId(playerName: string): string | null

log(...args: any[]): void


/* =========================
   HEALTH / COMBAT
========================= */

getHealth(entityId: string): number
setHealth(entityId: string, health: number | null): boolean
applyHealthChange(entityId: string, amount: number): boolean
killLifeform(entityId: string): void
isAlive(entityId: string): boolean

getShieldAmount(entityId: string): number
setShieldAmount(entityId: string, amount: number): void


/* =========================
   MOVEMENT / PHYSICS
========================= */

applyImpulse(entityId: string, x: number, y: number, z: number): void
setVelocity(entityId: string, x: number, y: number, z: number): void


/* =========================
   INVENTORY
========================= */

giveItem(playerId: string, itemName: string, amount?: number): number
removeItemName(playerId: string, itemName: string, amount: number): void
hasItem(playerId: string, itemName: string): boolean
getInventoryItemAmount(playerId: string, itemName: string): number
clearInventory(playerId: string): void

getHeldItem(playerId: string): { name: string; amount: number } | null
getItemSlot(playerId: string, slot: number): { name: string; amount: number } | null


/* =========================
   BLOCKS
========================= */

getBlock(x: number, y: number, z: number): string
setBlock(x: number, y: number, z: number, block: string): void
setBlockRect(pos1: number[], pos2: number[], block: string): void

getBlockSolidity(x: number, y: number, z: number): boolean


/* =========================
   CAMERA / VISUAL
========================= */

setCameraDirection(playerId: string, direction: number[]): void
setPlayerOpacity(playerId: string, opacity: number): void


/* =========================
   MESSAGING EXTRA
========================= */

sendFlyingMiddleMessage(playerId: string, message: string | string[], speed: number, durationMs?: number): void


/* =========================
   CALLBACKS (WRAPPED STYLE)
========================= */

onPlayerJoin(callback: (playerId: string) => void): void
onPlayerLeave(callback: (playerId: string) => void): void
onPlayerChat(callback: (playerId: string, message: string) => void): void

onPlayerJump(callback: (playerId: string) => void): void
onPlayerAttack(callback: (playerId: string) => void): void

onPlayerDamagingOtherPlayer(callback: (
  attacker: string,
  victim: string,
  damage: number,
  weapon: string
) => void): void

onPlayerDamagingMob(callback: (
  playerId: string,
  mobId: string,
  damage: number,
  weapon: string
) => void): void

onMobDamagingPlayer(callback: (
  mobId: string,
  playerId: string,
  damage: number
) => void): void


/* =========================
   WORLD / SYSTEM
========================= */

tick(callback: (deltaMs: number) => void): void
onClose(callback: (isShuttingDown: boolean) => void): void


/* =========================
   UTILS
========================= */

now(): number
