import { client } from "@/lib/sanity";

import { PRODUCT_LINE_QUERY, PRODUCTS_QUERY } from "@/lib/queries";
import HeroBanner from "@/components/elements/hero/HeroBanner";
import SubCategoryTab from "@/components/elements/hero/SubCategoryTab";
import ProductContainer from "@/components/pages/products/ProductContainer";
import { ProductLineDTO } from "@/types/respDto";

export default async function ProductsPage() {
    const productLines: ProductLineDTO[] = await client.fetch(PRODUCT_LINE_QUERY);

    const tabList = productLines.map(pl => ({
        label: pl.label,
        id: pl.id,
    }))

    return(
        <div>
            <HeroBanner />
            <SubCategoryTab list={tabList} />
            <ProductContainer productLines={productLines}/>
        </div>
    )
}