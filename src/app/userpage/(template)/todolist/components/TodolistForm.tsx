"use client";

import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import { useTodoListStore } from "../../../../store/useTodoListStore";

const TodoListForm: React.FC = () => {
  const {
    addButtonColor,
    addButtonSize,
    addButtonVariant,
    deleteButtonColor,
    deleteButtonSize,
    deleteButtonVariant,
    todoList1,
    todoList2,
    todoList3,
    todoList4,
    inputSize,
    inputWidth,
  } = useTodoListStore();

  return (
    <div className="flex h-1/2 items-center justify-center">
      <div className="w-full rounded-3xl bg-white p-10 shadow-lg">
        <div className="space-y-6">
          <div className="flex justify-between space-x-2">
            <Input
              size={inputSize}
              width={inputWidth}
              variant="outlined"
              placeholder={todoList1}
            />
            <div className="flex space-x-1">
              <Button
                color={addButtonColor}
                size={addButtonSize}
                variant={addButtonVariant}
                className="text-white"
                onClick={() => alert("일정을 추가했습니다")}
              >
                Add
              </Button>
              <Button
                color={deleteButtonColor}
                size={deleteButtonSize}
                variant={deleteButtonVariant}
                className="text-white"
                onClick={() => alert("일정을 삭제했습니다")}
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="flex space-x-2">
            <Input
              size={inputSize}
              width={inputWidth}
              variant="outlined"
              placeholder={todoList2}
            />
            <div className="flex space-x-1">
              <Button
                color={addButtonColor}
                size={addButtonSize}
                variant={addButtonVariant}
                className="text-white"
                onClick={() => alert("일정을 추가했습니다")}
              >
                Add
              </Button>
              <Button
                color={deleteButtonColor}
                size={deleteButtonSize}
                variant={deleteButtonVariant}
                className="text-white"
                onClick={() => alert("일정을 삭제했습니다")}
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="flex space-x-2">
            <Input
              size={inputSize}
              width={inputWidth}
              variant="outlined"
              placeholder={todoList3}
            />
            <div className="flex space-x-1">
              <Button
                color={addButtonColor}
                size={addButtonSize}
                variant={addButtonVariant}
                className="text-white"
                onClick={() => alert("일정을 추가했습니다")}
              >
                Add
              </Button>
              <Button
                color={deleteButtonColor}
                size={deleteButtonSize}
                variant={deleteButtonVariant}
                className="text-white"
                onClick={() => alert("일정을 삭제했습니다")}
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="flex space-x-2">
            <Input
              size={inputSize}
              width={inputWidth}
              variant="outlined"
              placeholder={todoList4}
            />
            <div className="flex space-x-1">
              <Button
                color={addButtonColor}
                size={addButtonSize}
                variant={addButtonVariant}
                className="text-white"
                onClick={() => alert("일정을 추가했습니다")}
              >
                Add
              </Button>
              <Button
                color={deleteButtonColor}
                size={deleteButtonSize}
                variant={deleteButtonVariant}
                className="text-white"
                onClick={() => alert("일정을 삭제했습니다")}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListForm;