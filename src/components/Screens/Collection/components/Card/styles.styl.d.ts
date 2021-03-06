declare namespace StylesStylNamespace {
  export interface IStylesStyl {
    avatar: string
    bottom: string
    card: string
    count: string
    date: string
    description: string
    done: string
    expired: string
    floater: string
    preview: string
    progress: string
    progressWrapper: string
    separator: string
    tag: string
    tags: string
    text: string
    title: string
    today: string
  }
}

declare const StylesStylModule: StylesStylNamespace.IStylesStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesStylNamespace.IStylesStyl
}

export = StylesStylModule
