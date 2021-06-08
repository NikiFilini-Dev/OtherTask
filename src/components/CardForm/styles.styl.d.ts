declare namespace StylesStylNamespace {
  export interface IStylesStyl {
    action: string
    actions: string
    active: string
    add: string
    block: string
    cardName: string
    cardText: string
    checkbox: string
    dateTrigger: string
    done: string
    executor: string
    group: string
    head: string
    main: string
    mainPart: string
    modal: string
    modalPart: string
    name: string
    progress: string
    progressWrapper: string
    reject: string
    separator: string
    settings: string
    subtask: string
    subtasks: string
    tag: string
    tags: string
    tagsMenu: string
    trash: string
    wrapper: string
  }
}

declare const StylesStylModule: StylesStylNamespace.IStylesStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesStylNamespace.IStylesStyl
}

export = StylesStylModule