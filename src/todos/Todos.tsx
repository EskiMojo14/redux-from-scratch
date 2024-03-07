import { Box, List, Typography } from "@mui/material";
import { TodoItem } from "./Todo";
import { Cancel } from "@mui/icons-material";
import { useTodoContext } from "./context";

export function Todos() {
  const { todos } = useTodoContext();
  if (todos.length === 0) {
    return (
      <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <Cancel
          sx={{ fontSize: 64, color: (theme) => theme.palette.text.disabled }}
        />
        <Typography
          variant="h6"
          sx={{ color: (theme) => theme.palette.text.primary }}
        >
          No todos
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          Add a todo to get started
        </Typography>
      </Box>
    );
  }
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}
