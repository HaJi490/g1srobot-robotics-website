export interface ProductLineDTO {
    label: string;
    content: string;
    href: string;
    kind: { label: string; href: string;};
    productImg: string;
}

export interface UseCaseDTO {
    title: string;
    slug: string;
    sum: string;
    date: string;
    thumbnail?: string; // 이미지를 추가했을 경우
    products: { name: string }[];
    industries: { name: string }[];
}

export interface IndustryDTO {
    label: string;
    slug: string;
    icon: string;
}