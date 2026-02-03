export type LoadingState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export interface ApiResponse<T> {
  data: T;
  error: string | null;
  status: number;
}

export interface FormField<T = string> {
  value: T;
  error: string | null;
  touched: boolean;
}
