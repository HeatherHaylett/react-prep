import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { Home } from "./pages/Home";

const TicTacToe = lazy(() => import("./exercises/tic-tac-toe/TicTacToe"));
const Timer = lazy(() => import("./exercises/timer/Timer"));
const Stopwatch = lazy(() => import("./exercises/stopwatch/Stopwatch"));
const DebouncedSearch = lazy(
  () => import("./exercises/debounced-search/DebouncedSearch")
);
const VirtualizedList = lazy(
  () => import("./exercises/virtualized-list/VirtualizedList")
);
const FormWizard = lazy(() => import("./exercises/form-wizard/FormWizard"));
const UseFetchHook = lazy(
  () => import("./exercises/use-fetch-hook/UseFetchHook")
);
const SlowComponent = lazy(
  () => import("./exercises/slow-component/SlowComponent")
);
const KanbanBoard = lazy(
  () => import("./exercises/kanban-board/KanbanBoard")
);
const ModalManager = lazy(
  () => import("./exercises/modal-manager/ModalManager")
);
const SearchableList = lazy(
  () => import("./exercises/searchable-list/SearchableList")
);
const TsConversion = lazy(
  () => import("./exercises/ts-conversion/TsConversion")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "tic-tac-toe", element: <TicTacToe /> },
      { path: "timer", element: <Timer /> },
      { path: "stopwatch", element: <Stopwatch /> },
      { path: "debounced-search", element: <DebouncedSearch /> },
      { path: "virtualized-list", element: <VirtualizedList /> },
      { path: "form-wizard", element: <FormWizard /> },
      { path: "use-fetch-hook", element: <UseFetchHook /> },
      { path: "slow-component", element: <SlowComponent /> },
      { path: "kanban-board", element: <KanbanBoard /> },
      { path: "modal-manager", element: <ModalManager /> },
      { path: "searchable-list", element: <SearchableList /> },
      { path: "ts-conversion", element: <TsConversion /> },
    ],
  },
]);
