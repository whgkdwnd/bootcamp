// 할 일 항목 타입 정의
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number; // 타임스탬프
}
