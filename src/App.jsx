import "./app.css";

export default function App() {
  return (
    <div className="app-page">
      <main className="page-container">
        <header className="page-header">
          <div className="heading-line">
            <h1>Management & Planning</h1>

            <svg
              className="heading-icon"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="4.5"
                y="4.5"
                width="23"
                height="23"
                rx="7"
                stroke="currentColor"
              />
              <path
                d="M10 11h12M10 16h7M10 21h10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="22" cy="21" r="2" fill="currentColor" />
            </svg>
          </div>

          <p>
            Keep your daily tasks and upcoming plans in one place. Stay focused,
            track what matters, and make progress one task at a time.
          </p>
        </header>

        <div className="toolbar">
          <button className="create-button" type="button">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Create New</span>
          </button>

          <details className="filter-select">
            <summary className="filter-trigger">
              <span className="filter-trigger-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h16M7 12h10M10 17h4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span className="filter-trigger-text">
                <span className="filter-caption">TASK VIEW</span>
                <span className="filter-current">
                  <span className="current-all">All Tasks</span>
                  <span className="current-incomplete">Incomplete Tasks</span>
                  <span className="current-completed">Completed Tasks</span>
                </span>
              </span>

              <span className="filter-chevron" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </summary>

            <div className="filter-panel">
              <div className="filter-panel-heading">
                <span>DISPLAY TASKS</span>
                <span className="filter-panel-mark" aria-hidden="true" />
              </div>

              <fieldset className="filter-options">
                <legend className="visually-hidden">
                  Choose a task view
                </legend>

                <label className="filter-option">
                  <input
                    id="filter-all"
                    type="radio"
                    name="task-view"
                    defaultChecked
                  />
                  <span className="option-number">01</span>
                  <span className="option-name">All Tasks</span>
                  <span className="option-indicator" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="m5 12 4.5 4.5L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </label>

                <label className="filter-option">
                  <input
                    id="filter-incomplete"
                    type="radio"
                    name="task-view"
                  />
                  <span className="option-number">02</span>
                  <span className="option-name">Incomplete Tasks</span>
                  <span className="option-indicator" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="m5 12 4.5 4.5L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </label>

                <label className="filter-option">
                  <input
                    id="filter-completed"
                    type="radio"
                    name="task-view"
                  />
                  <span className="option-number">03</span>
                  <span className="option-name">Completed Tasks</span>
                  <span className="option-indicator" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="m5 12 4.5 4.5L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </label>
              </fieldset>
            </div>
          </details>
        </div>

        <div className="section-divider" />

        <section className="tasks-section" aria-labelledby="available-title">
          <div className="section-heading">
            <h2 id="available-title">Available Tasks:</h2>
          </div>

          <article className="task-card">
            <div className="task-controls">
              <button
                className="icon-button delete-button"
                type="button"
                aria-label="Delete task"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6 18 18M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <button
                className="icon-button complete-button"
                type="button"
                aria-label="Mark task as completed"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m5 12 4.5 4.5L19 7"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="task-labels">
                <span className="label label-important">Important</span>
              </div>
            </div>

            <div className="task-content">
              <h3>Prepare the new product design</h3>
              <p>
                Review the visual direction, finalize the details, and share
                the design with the team.
              </p>
            </div>
          </article>
        </section>

        <section
          className="tasks-section completed-section"
          aria-labelledby="completed-title"
        >
          <div className="section-heading">
            <h2 id="completed-title">Completed Tasks:</h2>
          </div>

          <article className="task-card completed-card">
            <div className="task-controls">
              <div className="task-labels">
                <span className="label label-important">Important</span>
                <span className="label label-completed">Completed</span>
              </div>
            </div>

            <div className="task-content">
              <h3>Organize the project files</h3>
              <p>
                Clean up the workspace and arrange all project assets for
                the next phase.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
