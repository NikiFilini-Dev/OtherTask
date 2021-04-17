import SyncType from "../syncType"
import gqlClient from "../../graphql/client"
import {
  DELETE_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from "../../graphql/projects"

export default class Project extends SyncType {
  name = "Project"

  UPDATE_MUTATION = UPDATE_PROJECT
  DELETE_MUTATION = DELETE_PROJECT

  preprocess(item) {
    return item
  }

  async load() {
    const now = new Date()
    const result = await gqlClient.query(GET_PROJECTS).toPromise()

    return snapshot => {
      this.lastLoadAt = now
      snapshot.projects = result.data.projects.map(this.preprocess)
      return snapshot
    }
  }
}
