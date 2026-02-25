declare const api:{

  sendMessage(msg:string):void
  getPosition(id:string):[number,number,number]
  teleport(id:string,x:number,y:number,z:number):void

}

declare function onPlayerJoin(id:string):void
declare function onPlayerLeave(id:string):void
declare function onTick():void
