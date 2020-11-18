const initialItemState = {
    items : [
        {
            "id":"rec1JZlfCIBOPdcT2",
            "title":"Samsung Galaxy S8",
            "price":20,
            "img":"https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
            "quantity": 1,
            "total": 1
        },
        {
            "id":"recB6qcHPTb62YJ75",
            "img":"https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
            "price":10,
            "title":"google pixel",
            "quantity": 1,
            "total": 1
        },
        {
            "id":"recdRxBsE64Rr2VuJ",
            "title":"Xiaomi Redmi Note 2",
            "price":20,
            "img":"https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
            "quantity": 1,
            "total": 1
        },
        {
        
            "id":"recwTo160XST3PIoW",
            "title":"Samsung Galaxy S7",
            "price":10,
            "img":"https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",
            "quantity": 1,
            "total": 1
        },
        {
            "id":"recB6qcHPxb62YJ75",
            "img":"https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
            "price":10,
            "title":"google pixel",
            "quantity": 1,
            "total": 1
        },
        {
            "id":"recdRxBsE14Rr2VuJ",
            "title":"Xiaomi Redmi Note 2",
            "price":20,
            "img":"https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
            "quantity": 1,
            "total": 1
        },
        {
            "_id": "dress1",
            "img": "https://react-shopping-cart-final.herokuapp.com/images/dress1.jpg",
            "title": "Midi sundress with shirring detail",
            "price": 29.9,
            "quantity": 1,
            "total": 1
          },
          {
            "_id": "dress2",
            "img": "https://react-shopping-cart-final.herokuapp.com/images/dress2.jpg",
            "title": "Midi sundress with ruched front",
            "price": 18.9,
            "quantity": 1,
            "total": 1
          },
          {
            "_id": "dress3",
            "img": "https://react-shopping-cart-final.herokuapp.com/images/dress3.jpg",
            "title": "Midi dress in pink ditsy floral",
            "price": 14.9,
            "quantity": 1,
            "total": 1
          },
          {
            "_id": "dress4",
            "img": "https://react-shopping-cart-final.herokuapp.com/images/dress4.jpg",
            "title": "cami maxi dress in polka dot",
            "price": 25.9,
            "quantity": 1,
            "total": 1
          },
          {
            "_id": "dress5",
            "img": "https://react-shopping-cart-final.herokuapp.com/images/dress5.jpg",
            "title": "Frill mini dress in yellow polka dot",    
            "price": 10.9,
            "quantity": 1,
            "total": 1
          },
          {
            "_id": "dress6",
            "img": "https://react-shopping-cart-final.herokuapp.com/images/dress6.jpg",
            "title": "Midi tea dress in blue and red spot",
            "price": 49.9,
            "quantity": 1,
            "total": 1
          }
    ]
}

const itemsReducer = (state = initialItemState, action) => {
    return state
}

export default itemsReducer
