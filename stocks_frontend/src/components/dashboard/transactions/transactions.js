import React from 'react';

const Transactions = (props) => {
    const transactionsArr = props.transactionArr


    console.log(transactionsArr)
    return(
        <table className="ui celled table">
            <thead>
                <tr>
                    <th id="text" >Company</th>
                    <th id="text">Purchase Status</th>
                    <th id="text">Number of Shares</th>
                    <th id="text">Purchase Price</th>
                    <th id="text">Purchase Order Value</th>
                    <th id="text">Purchard Date / Time</th>
                </tr>
            </thead>
            <tbody>
                {transactionsArr}
            </tbody>
        </table>
    )
}

export default Transactions