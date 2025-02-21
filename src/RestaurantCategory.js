import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({isvegSel, resItem}) => {
    const [showItems, setShowItems] = useState(false);

    const cards = resItem?.itemCards || resItem?.categories;
    const isVeg = isvegSel ? ["VEG"] : ["NONVEG", "VEG"];

    const checkDishType = (item) => {
        return isVeg.includes(item);
    }
    
    return (
        <div className="accordion-section">
            <div className="accordion-header" onClick={() => setShowItems(!showItems)}>
                <div className="accordion-header-name">{resItem.title} ({cards.length})</div>
                <div>&#11206;</div>
            </div>
            {showItems && <div className="accordion-body">
                {
                    cards.map((card, index) => {
                        if (card.itemCards) return (
                            <div className="accordion-sub-items" key={index}>
                                <h3 className="accordion-category-name">{card.title}</h3>
                                {card.itemCards.map((itemCard) => checkDishType(itemCard.card.info.itemAttribute.vegClassifier) && <ItemsList key={itemCard.card.info.id} itemCard={itemCard.card} />)}
                            </div>
                        )
                        else return checkDishType(card.card.info.itemAttribute.vegClassifier) &&<ItemsList key={card.card.info.id} itemCard={card.card}/>
                    })
                }
            </div>}
        </div>
    )
}

export default RestaurantCategory;