import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";

function App() {
  const [items] = useState(["item0", "item1", "item2"]);

  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provited) => (
            <div {...provited.droppableProps} ref={provited.innerRef}>
              <Draggable draggableId="item0" index={0}>
                {(provited) => (
                  <div
                    className="item"
                    ref={provited.innerRef}
                    {...provited.draggableProps}
                    {...provited.dragHandleProps}
                  >
                    {items[0]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="item1" index={0}>
                {(provited) => (
                  <div
                    className="item"
                    ref={provited.innerRef}
                    {...provited.draggableProps}
                    {...provited.dragHandleProps}
                  >
                    {items[1]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="item2" index={0}>
                {(provited) => (
                  <div
                    className="item"
                    ref={provited.innerRef}
                    {...provited.draggableProps}
                    {...provited.dragHandleProps}
                  >
                    {items[2]}
                  </div>
                )}
              </Draggable>
              {provited.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
