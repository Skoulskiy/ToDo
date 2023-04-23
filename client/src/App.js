import { useState } from "react";
import "./App.css";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneIcon from "@mui/icons-material/Done";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Have a breakfeast",
      isComplete: false,
    },
    {
      id: 2,
      name: "Go to school",
      isComplete: true,
    },
    {
      id: 3,
      name: "Play games",
      isComplete: true,
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleCreateTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: tasks.length + 1,
        name: newTask.trim(),
        isComplete: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "20px",
          mb: "20px",
        }}
      >
        <TextField
          label="Input your task"
          variant="standard"
          sx={{ width: "70%" }}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ mt: 1, width: "70%" }}
          onClick={handleCreateTask}
        >
          Create task
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: 3,
          mr: 3,
          justifyContent: "center",
        }}
      >
        <Grid container justifyContent="center" spacing={2}>
          {tasks.map((task) => (
            <Grid
              key={task.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              sx={{ flexDirection: "column" }}
            >
              <Paper
                elevation={3}
                sx={{
                  height: "7vh",
                  paddingBottom: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  maxWidth: "100%",
                  overflowWrap: "break-word",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <Box sx={{ width: "70%", fontSize: "1.2rem" }}>
                    <h2 style={{ marginTop: "12px" }}>
                      {task.id}.{task.name}
                    </h2>
                  </Box>
                </Box>
                <Box
                  className="dell-ico"
                  sx={{
                    position: "absolute",
                    top: "2px",
                    right: "5px",
                  }}
                >
                  <DeleteForeverIcon
                    color="error"
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </Box>
                <Box
                  className="dell-ico"
                  sx={{
                    position: "absolute",
                    top: "2px",
                    right: "40px",
                  }}
                >
                  <DoneIcon
                    sx={{ color: task.isComplete ? "green" : "grey" }}
                    onClick={() => handleCompleteTask(task.id)}
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
