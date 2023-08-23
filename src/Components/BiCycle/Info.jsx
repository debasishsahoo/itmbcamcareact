import React from 'react'

function Info(props) {

    const mylist = props.cyclelist;
    console.log('mylist:', mylist)
    function ListItem() {
        return (
            mylist.map((e, i) => { return (<li key={i}>{e}</li>) })
        );
    }





    return (
        <div className="col-md-5 p-0 klo">
            <ul>
                {ListItem()}
                {/* <li>100% Quality</li>
                <li>Free Shipping</li>
                <li>Easy Returns</li>
                <li>12 Months Warranty</li>
                <li>EMI Starting from (On Credit Cards)</li>
                <li>Normal Delivery : 4-5 Days</li>
                <li>Express Delivery : 2-3 Days</li>
                <li>COD Available (All Over India)</li> */}
            </ul>
        </div>
    )
}

export default Info