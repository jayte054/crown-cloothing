import {Routes, Route} from "react-router-dom"
// import { ProductCard } from "../../components/product-card/product-card.component"
import "./shop.styles.scss"
import CategoriesPreview from "../categories-preview/categoreis-preview.component"
import Category from "../category/category.component"

const Shop = () => {

    return (
      <Routes>
        <Route index element={<CategoriesPreview />}/>
        <Route path = ":category" element={<Category />} />
      </Routes>
    )

}

export default Shop