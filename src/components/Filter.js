import  React from 'react';

function Filter ({category, onCategoryChanged}){
    return (
        <select value={category} onChange={onCategoryChanged}>
            <option value="All">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
        </select>
    )
}