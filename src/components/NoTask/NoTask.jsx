import styles from "./NoTask.module.css";

export default function NoTask({ children }) {
  return (
    <div className={styles.emptyState} dir="ltr">
      <div className={styles.content}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} aria-hidden="true" />
          <span>READY WHEN YOU ARE</span>
        </div>

        <h3 className={styles.title}>
          A blank canvas.
          <br />
          <span>Unlimited momentum.</span>
        </h3>

        <p className={styles.description}>
          Your space is clear and your next idea is waiting. Add a task to turn
          that first thought into progress.
        </p>

        <div className={styles.action}>{children}</div>

        <span className={styles.footnote}>START SMALL. GO FAR.</span>
      </div>

      <div className={styles.art} aria-hidden="true">
        <div className={styles.ambientGlow} />
        <div className={styles.orbit} />
        <div className={styles.orbiter}>
          <span className={styles.orbitDot} />
        </div>

        <div className={styles.backCard} />

        <div className={styles.paper}>
          <div className={styles.paperHeader}>
            <span className={styles.paperIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className={styles.paperIndicator} />
          </div>

          <span className={styles.paperLine} />
          <span className={styles.paperLineShort} />

          <div className={styles.paperDivider} />

          <div className={styles.paperRow}>
            <span className={styles.paperCheckbox} />
            <span className={styles.paperRowLine} />
          </div>

          <div className={styles.paperRow}>
            <span className={styles.paperCheckbox} />
            <span className={styles.paperRowLineShort} />
          </div>
        </div>

        <span className={styles.sparkleOne}>✦</span>
        <span className={styles.sparkleTwo}>✦</span>
      </div>
    </div>
  );
}
