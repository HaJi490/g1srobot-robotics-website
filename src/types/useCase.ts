// 개별 참조 항목의 타입
interface RelatedItem {
  name: string;
}

// 전체 UseCase 타입
export interface UseCase {
  title: string;
  slug: string;
  sum: string;
  date: string;
  thumbnail?: string; // 이미지를 추가하셨다면
  products: RelatedItem[];
  industries: RelatedItem[];
}