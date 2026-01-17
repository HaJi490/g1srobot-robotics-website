import { client } from "@/lib/sanity";
import { productsQuery } from "@/lib/queries";

export default async function ProductsPage() {
    const products = await client.fetch(productsQuery);

    return(
        <main>
            <h1>Products</h1>
            <ul>
                {products.map((product: any)=> (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Product Line: {product.productLine?.name}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}