import DirectoryItem from "../directory-item/directory-item-component"
import "./category.styles.scss"


const CategoryDirectory = ({categories}) => {
    return (
    <div className="categories-container">
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category}/>
    ))}
  </div>
  )
}

// const CategoryDirectory = ({categories}) => {
//     return (
//         <div className="categories-container">
//             {categories.map((category) => (
//                 <CategoryItem key = {category.id} category = {category}/>
//             ))}
//         </div>
//     )
// }

export default CategoryDirectory