import { useState } from "react";
import styles from "./AddTaskModal.module.css";

export default function AddTaskModal({ closeModal, addTaskHandler }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2>Create a Task</h2>
            <p>Define your next objective clearly.</p>
          </div>
          <button
            className={styles.closeBtn}
            aria-label="Close"
            onClick={closeModal}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Task Title</label>
            <input
              id="title"
              type="text"
              placeholder="What needs to be done?"
              value={taskTitle}
              onChange={(event) => {
                setTaskTitle(event.target.value);
              }}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="desc">Task Description</label>
            <textarea
              id="desc"
              rows="3"
              placeholder="Add details..."
              onChange={(event) => {
                setTaskDescription(event.target.value);
              }}
            />
          </div>

          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="important"
              checked={isImportant}
              onChange={(event) => {
                setIsImportant(event.target.checked);
              }}
            />
            <label htmlFor="important" className={styles.checkboxLabel}>
              <span className={styles.checkIcon}></span>
              <div className={styles.checkText}>
                <span className={styles.mainText}>Mark as Important</span>
                <span className={styles.subText}>Apply high priority glow</span>
              </div>
            </label>
          </div>
        </div>

        <footer className={styles.footer}>
          <button className={styles.cancelBtn} onClick={closeModal}>
            Cancel
          </button>
          <button
            className={styles.submitBtn}
            onClick={() =>{
              addTaskHandler(taskTitle, taskDescription, isImportant)
              closeModal()
            }
            }
          >
            Create Task
          </button>
        </footer>
      </div>
    </div>
  );
}
