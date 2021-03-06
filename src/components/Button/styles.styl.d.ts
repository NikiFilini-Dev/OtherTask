declare namespace StylesStylNamespace {
  export interface IStylesStyl {
    activated: string
    awesome: string
    button: string
    filled: string
    icon: string
    secondary: string
    square: string
    text: string
  }
}

declare const StylesStylModule: StylesStylNamespace.IStylesStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesStylNamespace.IStylesStyl
}

export = StylesStylModule
