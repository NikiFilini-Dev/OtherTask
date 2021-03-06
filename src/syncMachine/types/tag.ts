import SyncType from "../syncType"
import gqlClient from "../../graphql/client"
import {
  DELETE_TAG,
  GET_TAGS,
  GET_UPDATED_TAGS,
  UPDATE_TAG,
} from "../../graphql/tags"

export default class Tag extends SyncType {
  name = "Tag"

  UPDATE_MUTATION = UPDATE_TAG
  DELETE_MUTATION = DELETE_TAG
  GET_UPDATED = GET_UPDATED_TAGS

  PATH = "tags"
  DATA_NAME = "updatedTags"

  preprocess(item) {
    return item
  }

  async load() {
    const now = new Date()
    const result = await gqlClient.query(GET_TAGS).toPromise()

    return snapshot => {
      this.lastLoadAt = now
      snapshot.tags = result.data.tags.map(this.preprocess)
      return snapshot
    }
  }
}
