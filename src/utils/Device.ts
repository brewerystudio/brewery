import { isBrowser } from "../constants"

export enum DeviceSize {
    
    LARGE = 1199.98,
    MEDIUM = 991.98,
    SMALL = 767.98,
    X_SMALL = 575.98,

}

export class DeviceUtil {

    public static getWidth = ():number => {
        return isBrowser ? window.innerWidth : 0
    }

    public static getHeight = ():number => {
        return isBrowser ? window.innerHeight : 0
    }

    public static isXL = (width?: number):boolean => {
        return (width || DeviceUtil.getWidth()) > DeviceSize.LARGE
    }

    public static isL = (width?: number):boolean => {
        return (width || DeviceUtil.getWidth()) > DeviceSize.MEDIUM
    }

    public static isM = (width?: number):boolean => {
        return (width || DeviceUtil.getWidth()) > DeviceSize.SMALL
    }

    public static isS = (width?: number):boolean => {
        return (width || DeviceUtil.getWidth()) > DeviceSize.X_SMALL
    }

    public static onReady = (func:()=>void):void => {
        isBrowser && $(document).ready(() => func())
    }

    public static onResize = (func:(width:number, height:number)=>void):void => {
        isBrowser && $(window).resize(() => func(DeviceUtil.getWidth(), DeviceUtil.getHeight()))
    }

}