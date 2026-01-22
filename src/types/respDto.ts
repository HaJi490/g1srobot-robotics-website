export interface UseCaseDTO {
    title: string;
    slug: string;
    sum: string;
    date: string;
    thumbnail?: string; // 이미지를 추가했을 경우
    products: { name: string }[];
    industries: { name: string }[];
}