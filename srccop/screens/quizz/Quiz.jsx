import React from 'react';

const QuizScreen = (second) => {
    return (
        <View>
            <Text>Dark quiz😈</Text>
            <WebView
                source={{
                    uri:
                        Platform.OS !== 'web'
                            ? 'https://academy.binance.com/en'
                            : 'https://cointelegraph.com/category/quiz',
                }}
            />
        </View>
    );
};

export default QuizScreen;
