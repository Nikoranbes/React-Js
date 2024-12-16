

function List(props){

    const category = props.category
    const itemList = props.items

    // fruits.sort((a,b) => a.name.localeCompare(b.name)) ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) Reverse ALPHABETICAL
    // fruits.sort((a,b) => a.calories - b.calories) Numeric
    // fruits.sort((a,b) => b.calories - a.calories) Reverse Numeric

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    const listItem = itemList.map((item)=> 
                        <li key={item.id}>
                        {item.name}: &nbsp;
                        <b>{item.calories}</b></li>);

    return(
        <div>
            <h2 className="list-category">{category}</h2>
            <ol className="list-items">{listItem}</ol>
        </div>
    )
}
List.defaultProps = {
    category:"Category"
}
export default List