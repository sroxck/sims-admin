import { Component, DefineComponent } from "vue";

export interface RouteMetaConfigRaw {
    meta:{
      roles?: string[],
      title: string,
      icon?: string | DefineComponent | Component, 
      noCache?: boolean, 
      breadcrumb?: boolean, 
      alwaysShow?: boolean, 
      hidden?: boolean, 
      affix?: boolean, 
    }
  }