import { ExerciseShell } from "../../components/ExerciseShell";
import { useId, useReducer, useRef, useState } from 'react';

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
          return {...action.card, status: action.card.status }
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

  return (
    <ExerciseShell
      title="Kanban Board"
      description="Drag-and-drop kanban board with TypeScript."
    >
      <p>TODO: Implement kanban board</p>
      <div style={{ display: 'flex' }}>
        <Column
          key="todo"
          title="Todo"
          status="todo"
          cards={cards}
          handleDeleteCard={handleDeleteCard}
        />
        <Column
          key="progress"
          title="In Progress"
          status="progress"
          cards={cards}
          handleDeleteCard={handleDeleteCard}
        />
        <Column
          key="done"
          title="Done"
          status="done"
          cards={cards}
          handleDeleteCard={handleDeleteCard}
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

function Column({ cards, handleDeleteCard, title, status }) {
  return (
    <div style={{ border: '1px solid #ccc', width: "30%" }}>
      <ColumnHeader title={title} />
      {cards.length > 0 && cards.filter((card) => card.status === status).map((card) =>
        <Card key={card.id} id={card.id} card={card} handleDeleteCard={handleDeleteCard} />
      )}
    </div>
  )
}

function ColumnHeader({ title }) {
  return (
    <h1>{title}</h1>
  )
}

function Card({ card, handleDeleteCard }) {
  return (
    <div
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