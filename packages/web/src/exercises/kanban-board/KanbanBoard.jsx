import { ExerciseShell } from "../../components/ExerciseShell";
import { useReducer, useRef, useState } from 'react';

// GOAL: Build a kanban board with drag-and-drop
// ACCEPTANCE CRITERIA:
// - Multiple columns (Todo, In Progress, Done)
// - Cards with title and description
// - Drag cards between columns
// - Add new cards
// - Delete cards
// - useReducer for complex state management

function cardsReducer(cards, action) {
  switch (action.type) {
    case 'add': {
      return [...cards, {
        ...action.card
      }];
    }
    case 'update': {
      return cards.map((card) => {
        if (card.id === action.card.id) {
          return { ...card, status: action.card.status }
        } else {
          return card;
        }
      })
    }
    case 'delete': {
      return cards.filter((card) =>
        card.id !== action.card.id
      )
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function KanbanBoard() {
  const [cards, dispatch] = useReducer(
    cardsReducer,
    []
  );
  const idRef = useRef(1);
  const draggingRef = useRef(null)

  function handleUpdateCard(id, status) {
    dispatch({
      type: 'update',
      card: {
        id: id,
        status: status
      }
    })
  }

  function handleAddCard({ title, description, status }) {
    dispatch({
      type: 'add',
      card: {
        id: idRef.current++,
        title: title,
        description: description,
        status: status
      }
    });
  }

  function handleDeleteCard(id) {
    dispatch({
      type: 'delete',
      card: {
        id: id
      }
    })
  }

  function handleDragStart(id) {
    draggingRef.current = id;
  }

  function handleDragEnter(status) {
    handleUpdateCard(draggingRef.current, status);
  }

  return (
    <ExerciseShell
      title="Kanban Board"
      description="Drag-and-drop kanban board with TypeScript."
    >
      <div style={{ display: 'flex' }}>
        <Column
          key="todo"
          title="Todo"
          status="todo"
          cards={cards}
          handleDeleteCard={handleDeleteCard}
          handleDragEnter={handleDragEnter}
          handleDragStart={handleDragStart}
        />
        <Column
          key="progress"
          title="In Progress"
          status="progress"
          cards={cards}
          handleDeleteCard={handleDeleteCard}
          handleDragEnter={handleDragEnter}
          handleDragStart={handleDragStart}
        />
        <Column
          key="done"
          title="Done"
          status="done"
          cards={cards}
          handleDeleteCard={handleDeleteCard}
          handleDragEnter={handleDragEnter}
          handleDragStart={handleDragStart}
        />
      </div>
      <NewCard handleAddCard={handleAddCard} />
    </ExerciseShell>
  );
}

function NewCard({ handleAddCard }) {
  const [newCard, setNewCard] = useState({ title: '', description: '', status: 'todo' });

  function handleSubmitNewCard() {
    handleAddCard(newCard);
    setNewCard({ ...newCard, title: '', description: '' });
  }

  return (
    <>
      <div>
        <label>
          Title:
          <input
            value={newCard.title}
            onChange={e => setNewCard({ ...newCard, title: e.target.value })}
            name="title"
          >

          </input>
        </label>
        <label>
          Description:
          <input
            value={newCard.description}
            onChange={e => setNewCard({ ...newCard, description: e.target.value })}
            name="description"
          >

          </input>
        </label>
      </div>
      <button
        onClick={handleSubmitNewCard}
        disabled={!newCard.title || !newCard.description}
      >Add Card</button>
    </>
  )
}

function Column({ cards, handleDeleteCard, handleDragEnter, handleDragStart, title, status }) {

  const visibleCards = cards.filter((card) => card.status === status);

  return (
    <div style={{ border: '1px solid #ccc', width: "30%" }}
      key={status}
      onDragEnter={() => handleDragEnter(status)}
    >
      <h1>{title}</h1>
      {visibleCards.length > 0 && visibleCards.map((card) =>
      <Card key={card.id} card={card} handleDeleteCard={handleDeleteCard} handleDragStart={handleDragStart} />
    )}
    </div>
  )
}

function Card({ card, handleDeleteCard, handleDragStart }) {

  return (
    <div
      draggable
      onDragStart={() => handleDragStart(card.id)}
      style={{
        margin: 8,
        padding: 8,
        border: '1px solid #ccc',
        borderRadius: 4,
      }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

        <button onClick={() => handleDeleteCard(card.id)}>X</button>
      </div>
      <div style={{ flexDirection: 'column', margin: 8 }}>
        <p style={{ margin: 0 }}>{card.title}</p>
        <p style={{ margin: 0 }}>{card.description}</p>
      </div>

    </div>
  )
}