import React, { useState } from 'react';
import '../styles/student.css';

const StudentPage = () => {
    // State for tasks
    const [tasks, setTasks] = useState([
        { id: 1, course: 'Ai', startTime: "2:00", endTime: "5:00", dayOfTheWeek: "Tuesday", deadline: 1, done: false },
        { id: 2, course: 'Database Administration',startTime: "2:00", endTime: "4:00", dayOfTheWeek: "Wednesday", deadline: 5, done: true },
        { id: 3, course: 'Machine Learning with Python', startTime: "1:00", endTime: "3:00", dayOfTheWeek: "Monday", deadline: 2, done: false },
    ]);

    // Sidebar visibility state
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Calculate task completion percentage
    const completedTasks = tasks.filter(task => task.done).length;
    const totalTasks = tasks.length;
    const completionPercentage = Math.round((completedTasks / totalTasks) * 100);

    // Task actions
    const completeTask = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, done: true } : task)));
    };

    const undoTask = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, done: false } : task)));
    };

    // Sidebar toggle
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="student-page">
            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-sidebar" onClick={toggleSidebar}>
                    &times;
                </button>
                <ul>
                    <li>Log Out</li>
                    <li>Admin Login</li>
                </ul>
            </div>

            {/* Header */}
            <header className="header">
                <button className="menu-btn" onClick={toggleSidebar}>
                    ☰
                </button>
                <h1>Your Time Table</h1>
                <div className="profile-name">
                    Welcome, <strong>Student Name</strong>
                </div>
            </header>

            {/* Main Content */}
            <div className="content">
                {/* Tasks Section */}
                <div className="tasks-section">
                    <h2>Tasks</h2>
                    <ul>
                        {tasks.map(task => (
                            <li key={task.id} className={task.done ? 'done' : ''}>
                                <h3>Course Name: {task.course}</h3>
                                <h3>Day Of The Week: {task.dayOfTheWeek}</h3>
                                <h3>Start Time: {task.startTime}</h3>
                                <h3>End Time: {task.endTime}</h3>
                                <h3>Deadline: {task.deadline}</h3>
                                
                                {!task.done && (
                                    <button
                                        className="complete-btn"
                                        onClick={() => completeTask(task.id)}
                                    >
                                        Mark as Done
                                    </button>
                                )}
                                {task.done && (
                                    <button
                                        className="undo-btn"
                                        onClick={() => undoTask(task.id)}
                                    >
                                        Mark as Not Done
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Approaching Deadlines */}
                <div className="side-section">
                    <h2>Approaching Deadlines</h2>
                    <ul>
                        {tasks
                            .filter(task => !task.done && task.deadline === 1)
                            .map(task => (
                                <li key={task.id}>
                                <h3>Course Name: {task.course}</h3>
                                <h3>Day Of The Week: {task.dayOfTheWeek}</h3>
                                <h3>Start Time: {task.startTime}</h3>
                                <h3>End Time: {task.endTime}</h3>
                                <h3>Deadline: {task.deadline}</h3>
                                    <button
                                        className="complete-btn"
                                        onClick={() => completeTask(task.id)}
                                    >
                                        Mark as Done
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

            {/* Completion Bar */}
            <div className="completion-bar">
                <div
                    className="completion-fill"
                    style={{ width: `${completionPercentage}%` }}
                ></div>
                <p>{completionPercentage}% tasks completed for the week</p>
            </div>
        </div>
    );
};

export default StudentPage;
