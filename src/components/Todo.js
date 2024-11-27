import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";

const Todo = ({ todos, setTodos }) => {
  const onClickFinish = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isFinish: !todo.isFinish } : todo
      )
    );
  };

  return (
    <div>
      {todos.map((data) => (
        <HStack key={data.id} borderRadius={20} h={"70px"} p={"15px"}>
          <Checkbox
            onChange={() => onClickFinish(data.id)}
            size={"lg"}
            colorScheme="green"
            isChecked={data.isFinish}
          >
            <Box display={"flex"} justifyContent={"start"} alignItems={"end"}>
              <Text fontSize={"20px"} marginRight={"10px"}>
                {data.title}
              </Text>
              <Text fontSize={"14px"}>{data.date}</Text>
            </Box>
          </Checkbox>
        </HStack>
      ))}
    </div>
  );
};

export default Todo;
