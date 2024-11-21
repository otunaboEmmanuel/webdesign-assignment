//Hi i was testing tables here
const ScheduleTable = () => {
  const schedules = [
    {
      name: "Morning Meeting",
      class: "Math",
      time: "8:00 AM",
      date: "2024-11-21",
      actions: "Edit / Delete",
    },
    {
      name: "Science Workshop",
      class: "Science",
      time: "10:00 AM",
      date: "2024-11-22",
      actions: "Edit / Delete",
    },
    {
      name: "Study Session",
      class: "History",
      time: "2:00 PM",
      date: "2024-11-23",
      actions: "Edit / Delete",
    },
    {
      name: "Practice Quiz",
      class: "English",
      time: "5:00 PM",
      date: "2024-11-24",
      actions: "Edit / Delete",
    },
    {
      name: "Evening Lecture",
      class: "Physics",
      time: "7:30 PM",
      date: "2024-11-25",
      actions: "Edit / Delete",
    },
  ];

  return (
    <table
      style={{
        width: "100%",
        border: "1px solid #ddd",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>Schedule Name</th>
          <th>Class</th>
          <th>Time</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {schedules.map((schedule, index) => (
          <tr key={index}>
            <td>{schedule.name}</td>
            <td>{schedule.time}</td>
            <td>{schedule.class}</td>
            <td>{schedule.date}</td>
            <td>{schedule.actions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
