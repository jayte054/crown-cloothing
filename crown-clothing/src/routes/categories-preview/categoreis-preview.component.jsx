import { useContext } from "react"
import { CategoriesContext } from "../../context/categories.context"
import CategoryPreview from "../../components/category-preview/category-preview.component"
// import { ProductCard } from "../../components/product-card/product-card.component"
// import "./shop.styles.scss"

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)

    return (
        <div className="category-preview-container">
            
                {Object.keys(categoriesMap).map((title) => {
                    const product = categoriesMap[title]
                    return <CategoryPreview key = {title} title = {title} product = {product} />
                })}
    
        </div>
    )

}

export default CategoriesPreview