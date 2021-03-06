declare namespace StylesStylNamespace {
  export interface IStylesStyl {
    app: string
    globalWrapper: string
    main: string
    mainAndTimeline: string
    noSidebar: string
    resizeHandle: string
    sideBar: string
    timeline: string
    timer: string
    timerWrapper: string
    topBar: string
    verticalWrapper: string
  }
}

declare const StylesStylModule: StylesStylNamespace.IStylesStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesStylNamespace.IStylesStyl
}

export = StylesStylModule
