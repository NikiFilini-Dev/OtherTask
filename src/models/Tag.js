import { getRoot, types } from "mobx-state-tree"
import Project from "./Project"

const Tag = types
  .model("Tag", {
    id: types.identifier,
    name: types.string,
    project: types.maybeNull(types.reference(Project)),
    index: types.number,
  })
  .views(self => ({
    get tasks() {
      return getRoot(self).tasks.filter(task => task.tags.indexOf(self >= 0))
    },
  }))
  .actions(self => ({
    setIndex(i) {
      self.index = i
    },
    setName(val) {
      self.name = val
    },
  }))

export default Tag
