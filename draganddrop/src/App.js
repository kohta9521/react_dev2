import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";

function App() {
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provited) => (
            <div {...provited.droppableProps} ref={provited.innerRef}>
              <Draggable draggableId="item0" index={0}>
                {(provited) => (
                  <div
                    ref={provited.innerRef}
                    {...provited.draggableProps}
                    {...provited.dragHandleProps}
                  >
                    item0
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default App;
