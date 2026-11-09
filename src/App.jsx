import AddTaskModal from "./components/AddTaskModal/AddTaskModal";
import "./app.css";


export default function App() {
  return (
    <>
    <div className="app" dir="ltr">

      <svg className="svg-library" aria-hidden="true">
        <symbol id="icon-check" viewBox="0 0 24 24">
          <path d="m5 12 4.5 4.5L19 7" />
        </symbol>

        <symbol id="icon-close" viewBox="0 0 24 24">
          <path d="M6 6 18 18M18 6 6 18" />
        </symbol>

        <symbol id="icon-star" viewBox="0 0 24 24">
          <path d="m12 2.8 2.75 5.58 6.16.9-4.46 4.34 1.05 6.13L12 16.86l-5.5 2.89 1.05-6.13-4.46-4.34 6.16-.9L12 2.8Z" />
        </symbol>

        <symbol id="icon-plus" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" />
        </symbol>
      </svg>

      <main className="workspace">

        <header className="hero">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>YOUR PERSONAL WORKSPACE</span>
          </div>

          <h1>
            Make room for
            <br />
            <span>what matters.</span>
          </h1>

          <p className="hero-description">
            A quieter place for your biggest ideas, everyday priorities, and
            everything in between.
          </p>
        </header>


        <div className="toolbar">
          <button className="create-button" type="button">
            <svg className="icon" aria-hidden="true">
              <use href="#icon-plus" />
            </svg>
            <span>Create New</span>
            <span className="create-button-arrow" aria-hidden="true">
              ↗
            </span>
          </button>

          <div className="select-wrap">
            <span className="select-caption">VIEW</span>

            <select
              className="task-select"
              defaultValue="all"
              aria-label="Select task view"
            >
              <option value="all">All Tasks</option>
              <option value="important">Important Tasks</option>
              <option value="available">Available Tasks</option>
              <option value="completed">Completed Tasks</option>
            </select>

            <span className="select-chevron" aria-hidden="true" />
          </div>
        </div>

        <section className="task-section" aria-labelledby="available-heading">
          <div className="section-heading">
            <h2 id="available-heading">Available Tasks:</h2>
          </div>

          <div className="task-list">
            <article className="task-card">
              <div className="task-main">
                <h3>Shape the next big idea</h3>
                <p>
                  Explore directions, collect references, and build a visual
                  foundation for the new project.
                </p>

                <div className="task-badges">
                  <span className="badge badge-pending">
                    <span className="badge-dot" />
                    Not Completed
                  </span>

                  <span className="badge badge-important">
                    <svg className="badge-icon" aria-hidden="true">
                      <use href="#icon-star" />
                    </svg>
                    Important
                  </span>
                </div>
              </div>

              <div className="task-actions">
                <button
                  className="icon-button complete-button"
                  type="button"
                  aria-label="Complete Shape the next big idea"
                  title="Complete task"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-check" />
                  </svg>
                </button>

                <button
                  className="icon-button delete-button"
                  type="button"
                  aria-label="Delete Shape the next big idea"
                  title="Delete task"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-close" />
                  </svg>
                </button>
              </div>
            </article>

            <article className="task-card">
              <div className="task-main">
                <h3>Plan the product launch</h3>
                <p>
                  Outline the milestones, align the details, and turn the
                  roadmap into something real.
                </p>

                <div className="task-badges">
                  <span className="badge badge-pending">
                    <span className="badge-dot" />
                    Not Completed
                  </span>

                  <span className="badge badge-important">
                    <svg className="badge-icon" aria-hidden="true">
                      <use href="#icon-star" />
                    </svg>
                    Important
                  </span>
                </div>
              </div>

              <div className="task-actions">
                <button
                  className="icon-button complete-button"
                  type="button"
                  aria-label="Complete Plan the product launch"
                  title="Complete task"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-check" />
                  </svg>
                </button>

                <button
                  className="icon-button delete-button"
                  type="button"
                  aria-label="Delete Plan the product launch"
                  title="Delete task"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-close" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </section>


        <section
          className="task-section completed-section"
          aria-labelledby="completed-heading"
        >
          <div className="section-heading">
            <h2 id="completed-heading">Completed Tasks:</h2>
          </div>

          <div className="task-list">
            <article className="task-card is-completed">
              <div className="task-main">
                <h3>Build the design system</h3>
                <p>
                  Set the visual language, define the components, and bring
                  consistency to every detail.
                </p>

                <div className="task-badges">
                  <span className="badge badge-completed">
                    <svg className="badge-icon" aria-hidden="true">
                      <use href="#icon-check" />
                    </svg>
                    Completed
                  </span>

                  <span className="badge badge-important">
                    <svg className="badge-icon" aria-hidden="true">
                      <use href="#icon-star" />
                    </svg>
                    Important
                  </span>
                </div>
              </div>

              <div className="task-actions">
                <button
                  className="icon-button complete-button"
                  type="button"
                  aria-label="Complete Build the design system"
                  title="Complete task"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-check" />
                  </svg>
                </button>

                <button
                  className="icon-button delete-button"
                  type="button"
                  aria-label="Delete Build the design system"
                  title="Delete task"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-close" />
                  </svg>
                </button>
              </div>
            </article>

            <article className="task-card is-completed">
              <div className="task-main">
                <h3>Finish the first milestone</h3>
                <p>
                  Review the progress, close the open loops, and celebrate a
                  meaningful step forward.
                </p>

                <div className="task-badges">
                  <span className="badge badge-completed">
                    <svg className="badge-icon" aria-hidden="true">
                      <use href="#icon-check" />
                    </svg>
                    Completed
                  </span>

                  <span className="badge badge-important">
                    <svg className="badge-icon" aria-hidden="true">
                      <use href="#icon-star" />
                    </svg>
                    Important
                  </span>
                </div>
              </div>

              <div className="task-actions">
                <button
                  className="icon-button complete-button"
                  type="button"
                  aria-label="Complete Finish the first milestone"
                  title="Complete task"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-check" />
                  </svg>
                </button>

                <button
                  className="icon-button delete-button"
                  type="button"
                  aria-label="Delete Finish the first milestone"
                  title="Delete task"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#icon-close" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </section>

        <footer className="page-footer">
          <span>FOCUS, WITHOUT THE NOISE.</span>
          <span>MADE FOR MOMENTUM ↗</span>
        </footer>
      </main>
    </div>

    <AddTaskModal></AddTaskModal>
    </>
  );
}
