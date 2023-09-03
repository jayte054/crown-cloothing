import { Link } from "react-router-dom"
import { ProductCard } from "../product-card/product-card.component"
import "./category-preview.styles.scss"

 const CategoryPreview = ({title, product}) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                product.filter((_, idx) => idx < 4 ) // this line of code filters for if the index is less than 4, i.e it will give the first four items within the array
                .map(product => <ProductCard key={product.id} product= {product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview