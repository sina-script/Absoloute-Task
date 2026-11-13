import AddTaskModal from "./components/AddTaskModal/AddTaskModal";
import Task from "./components/Task/Task";
import "./app.css";
import { use, useState } from "react";
import NoTask from "./components/NoTask/NoTask";

function App() {
  const [isShowTaskModal, setIsShowTaskModal] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [taskFilter, setTaskFilter] = useState("uncompleted");

  const addTaskHandler = (title, desc, isImportant) => {
    const newTask = {
      id: Date.now(),
      title,
      desc,
      isImportant,
      isCompleted: false,
    };

    setTasksList([...tasksList, newTask]);
  };

  const completeTask = (taskId) => {
    const newTasksList = tasksList.map((task) => {
      if (task.id == taskId) {
        task.isCompleted = true;
      }

      return task;
    });

    setTasksList(newTasksList);
  };

  const removeTask = (taskId) => {
    const newTasksList = tasksList.filter((task) => {
      return task.id != taskId;
    });

    setTasksList(newTasksList);
  };

  const taskFilterHandler = () => {
    if (taskFilter == "uncompleted") {
      return tasksList.filter((task) => {
        return task.isCompleted == false;
      });
    } else if (taskFilter == "important") {
      return tasksList.filter((task) => {
        return task.isImportant == true ;
      });
    } else {
      return tasksList;
    }
  };

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
            <button
              className="create-button"
              type="button"
              onClick={() => setIsShowTaskModal(true)}
            >
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
                value={taskFilter}
                onChange={(event) => {
                  setTaskFilter(event.target.value);
                }}
              >
                <option value="all">All Tasks</option>
                <option value="important">Important Tasks</option>
                <option value="uncompleted">Uncompleted Tasks</option>
              </select>

              <span className="select-chevron" aria-hidden="true" />
            </div>
          </div>

          <section className="task-section" aria-labelledby="available-heading">
            <div className="section-heading">
              <h2 id="available-heading">Available Tasks:</h2>
            </div>

            <div className="task-list">
      {taskFilterHandler().length ? (
       taskFilterHandler().map((task) => (
          <Task
            key={task.id}
            id={task.id}
            {...task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))
      ) : (
        <NoTask />
      )}
            </div>
          </section>

          <section
            className="task-section completed-section"
            aria-labelledby="completed-heading"
          >
            <div className="section-heading">
              <h2 id="completed-heading">Completed Tasks:</h2>
            </div>
            {tasksList.filter((task) => {
              return task.isCompleted == true;
            }).length ? (
              tasksList
                .filter((task) => {
                  return task.isCompleted == true;
                })
                .map((task) => {
                  return (
                    <Task
                      id={task.id}
                      {...task}
                      completeTask={completeTask}
                      removeTask={removeTask}
                    ></Task>
                  );
                })
            ) : (
              <NoTask></NoTask>
            )}
            <div className="task-list"></div>
          </section>

          <footer className="page-footer">
            <span>FOCUS, WITHOUT THE NOISE.</span>
            <span>MADE FOR MOMENTUM ↗</span>
          </footer>
        </main>
      </div>

      {isShowTaskModal && (
        <AddTaskModal
          closeModal={() => setIsShowTaskModal(false)}
          addTaskHandler={addTaskHandler}
        ></AddTaskModal>
      )}
    </>
  );
}

export default App;
