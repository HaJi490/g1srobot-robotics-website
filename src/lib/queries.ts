import { INDUSTRY } from "@/constants/industry";

export const productsQuery = `
  *[_type == "product" && defined(slug.current)]{
    _id,
    name,
    slug,
    description,
    productLine->{
      name
    },
    industries[]->{
      name
    }
  }
`;

export const PRODUCT_LINE_QUERY = `
  *[_type == "productLine"] {
    // 1. 제품군(ProductLine) 정보 매핑
    "label": name,
    "content": description,
    "href": "/products",

    // 2. 해당 제품군에 속한 제품들을 필터링해서 가져오기(SQL의 JOIN)
    "kind": *[_type == "product" && references(^._id)] {
        "label": name,
      "href": "/products/" + slug.current
    },

    // 3. 이미지 처리(이미지가 없다면 첫번째 제품의 이미지를 가져오거나 처리)
    "productImg": *[_type == "product" && references(^._id)[0].images[0].asset->url]
  }
`;

export const USE_CASES_QUERY = `
  *[_type == "useCase"] | order(endDate desc) {
    "title": title,
    "slug": slug.current,
    "sum": summary,
    "date": endDate,
    
    "products": products[] -> {
      name
    },
    "industries": industries[] -> {
      name
    },
    "thumbnail": mainImage.asset->url,
  }
`;