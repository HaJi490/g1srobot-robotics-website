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
`