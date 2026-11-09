import styles from "./Task.module.css";

function Task({ title, desc, isImportant, isCompleted }) {
  return (
    <article className={`${styles.taskCard} ${styles.isCompleted}`}>
      <div className={styles.taskMain}>
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className={styles.taskBadges}>
          <span className={`${styles.badge} ${styles.badgeCompleted}`}>
            <svg className={styles.badgeIcon} aria-hidden="true">
              <use href="#icon-check" />
            </svg>
            Completed
          </span>

          <span className={`${styles.badge} ${styles.badgeImportant}`}>
            <svg className={styles.badgeIcon} aria-hidden="true">
              <use href="#icon-star" />
            </svg>
            Important
          </span>
        </div>
      </div>

      <div className={styles.taskActions}>
        <button
          className={`${styles.iconButton} ${styles.completeButton}`}
          type="button"
          aria-label="Complete task"
        >
          <svg className={styles.icon} aria-hidden="true">
            <use href="#icon-check" />
          </svg>
        </button>

        <button
          className={`${styles.iconButton} ${styles.deleteButton}`}
          type="button"
          aria-label="Delete task"
        >
          <svg className={styles.icon} aria-hidden="true">
            <use href="#icon-close" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default Task;
