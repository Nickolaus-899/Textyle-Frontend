import React from 'react';
import StorageItem from './StorageItem';

const History = (props) => {
    const { history } = props;

    const colorMap = {
        business: 'darkslateblue',
        journalistic: 'blue',
        scientific: 'green',
        poetry: 'orange',
        conversational: 'red'
    };

    // const historyItems = history.slice(-props.displayNumber);
    const historyItems = history

    console.log("history:", historyItems)

    return (
        <div className="HistoryWrapper">
            {historyItems.map((item, index) => (
                <StorageItem
                    key={index}
                    input={item.text}
                    output={item.result}
                    color={colorMap[item.prompt] || 'gray'}
                    style={item.prompt}
                />
            ))}
        </div>
    );
};

export default History;
