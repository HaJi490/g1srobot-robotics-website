
export const PRODUCTS_QUERY = `
  *[_type == "product" && defined(slug.current)]{
    "id":_id,
    "label": name,
    slug,
    description,
    specs,
    productLine->{
      name
    },
    industries[]->{
      name
    }
  }
`;

// 제품군
export const PRODUCT_LINE_QUERY = `
  *[_type == "productLine"] | order(name asc) {
    "id": _id,
    "label": name,
    "content": description,
    "href": "/products",

    // 2. 해당 제품군에 속한 제품들을 필터링해서 가져오기(SQL의 JOIN)
    "kind": *[_type == "product" && references(^._id)] {
      "id":_id,
      "label": name,
      "href": "/products/" + slug.current,
      "specs": specs,
      "thumbnail": coalesce(mainImage.asset->url, images[0].asset->url)
    },

    // 3. 이미지 처리(이미지가 없다면 첫번째 제품의 이미지를 가져오거나 처리)
    "productImg": *[_type == "product" && references(^._id)]| order(_createdAt asc)[0].images[0].asset->url
  }
`;

// 적용 사례
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

// 산업
export const INDUSTRY_LIST_QUERY = `
  *[_type == "industry"] {
    "label": name,
    "slug": slug.current,
    "href": "/solutions/" + slug.current,
    "icon": iconName
  }
`;

export const INDUSTRY_WITH_PRODUCTS_QUERY = `
  *[_type == 'industry'] {
    "label": name,
    "kind": 
  }
`

export const INDUSTRY_DETAIL_QUERY = `

`