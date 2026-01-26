// 공통 및 하위타입
export interface ProductSpec {
  label: string;
  value: string;
  unit?: string; // 단위는 없을 수도 있으니 ? 추가
}

// 제품
export interface ProductDTO {
    id: string;
    label: string;
    slug: string;
    specs: ProductSpec[]
    description: string;
    productLine: {name: string};
    industries: {name: string}[];
}

// 제품군
export interface ProductItemDTO {
  id: string;
  label: string;
  href: string;
  specs: ProductSpec[]; // 위에서 정의한 타입 재사용
  thumbnail: string;
}

export interface ProductLineDTO {
    id: string,
    label: string;
    content: string;
    href: string;
    kind: ProductItemDTO[],
    productImg: string;
}

// 적용 사례
export interface RelatedItem {
    name: string;
}

export interface UseCaseDTO {
    title: string;
    slug: string;
    sum: string;
    date: string;
    thumbnail?: string; // 이미지를 추가했을 경우
    products: RelatedItem[];
    industries: RelatedItem[];
}

export interface IndustryDTO {
    label: string;
    slug: string;
    icon: string;
}