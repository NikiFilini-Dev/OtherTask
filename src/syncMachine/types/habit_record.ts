import SyncType from "../syncType"
import gqlClient from "../../graphql/client"
import {
  DELETE_HABIT_RECORD,
  GET_HABIT_RECORDS,
  GET_UPDATED_HABIT_RECORDS,
  UPDATE_HABIT_RECORD,
} from "../../graphql/habit_records"
import { DateTime } from "luxon"

export default class HabitRecord extends SyncType {
  name = "HabitRecord"

  UPDATE_MUTATION = UPDATE_HABIT_RECORD
  DELETE_MUTATION = DELETE_HABIT_RECORD
  GET_UPDATED = GET_UPDATED_HABIT_RECORDS

  PATH = "habitRecords"
  DATA_NAME = "updatedHabitRecords"

  preprocess(item) {
    if (item.date.length > 15)
      item.date = DateTime.fromISO(item.date).toFormat("M/d/yyyy")
    return item
  }

  async load() {
    const now = new Date()
    const result = await gqlClient.query(GET_HABIT_RECORDS).toPromise()

    return snapshot => {
      this.lastLoadAt = now
      snapshot.habitRecords = result.data.habitRecords.map(this.preprocess)
      return snapshot
    }
  }
}
