import React, {Component}from 'react'
import { connect } from 'react-redux'


import Header from './Header'
import './style.css'
import Item from './Item'

class ItemList extends Component {

    render() {
        const {items} = this.props

        return(
            <>
                <Header />
                <div className="container">
                {items.map((item) => {
                return (
                    <div key={item.id}>
                        <Item id={item.id} image={item.img} title={item.title} price={item.price} quantity={item.quantity} total={item.total}/>
                    </div>
                )
                })}
            </div>
            </>
        )
    }
    
}

const mapStateToProps = (store) =>{
    return {
        items: store.itemsReducer.items
    }
}

export default connect(mapStateToProps)(ItemList)