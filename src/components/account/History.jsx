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

    const historyItems = history.slice(-props.displayNumber);

    return (
        <div className="HistoryWrapper">
            {historyItems.map((item, index) => (
                <StorageItem
                    key={index}
                    input={item.input}
                    output={item.output}
                    color={colorMap[item.style] || 'gray'}
                    style={item.style}
                />
            ))}
        </div>
    );
};

export default History;
