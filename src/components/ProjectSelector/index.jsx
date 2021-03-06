import React from "react"
import { observer } from "mobx-react"
import styles from "./styles.styl"
import { useMst } from "models/RootStore"
import FolderIcon from "assets/folder.svg"
import SearchIcon from "assets/search.svg"
import classNames from "classnames"
import Icon from "../Icon"

const ProjectSelector = observer(({ selected, onSelect }) => {
  const { projects } = useMst()
  const [search, setSearch] = React.useState("")

  const filteredProjects = projects.filter(project =>
    project.name.startsWith(search),
  )
  filteredProjects.sort((a, b) => a.index - b.index)

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          className={styles.search}
          placeholder={"Поиск"}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.projects}>
        <div
          className={classNames({
            [styles.project]: true,
            [styles.selected]: selected === null,
          })}
          onClick={() => onSelect(null)}
        >
          <Icon name={"msg_bubble"} className={styles.projectIcon} />
          Входящие
        </div>
        {filteredProjects.map(project => (
          <div
            key={`project-${project.id}`}
            className={classNames({
              [styles.project]: true,
              [styles.selected]: selected === project.id,
            })}
            onClick={() => onSelect(project)}
          >
            <Icon name={project.icon} className={styles.projectIcon} />
            {project.name}
          </div>
        ))}
        {!filteredProjects.length && (
          <span className={styles.notFound}>Не найдено</span>
        )}
      </div>
    </div>
  )
})

export default ProjectSelector
