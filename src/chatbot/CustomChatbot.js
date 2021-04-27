

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import Userinfo from './Userinfo'
import Book from './Book'
import logo from '../static-contents/logopng.png'
import Welcome from '../Welcome.css'
import Barchart from './Barchart'
import Searchitem from './Searchitem'
import Rules from './Rules'
import Help from './Help'
import Guestservices from './Guestservices'
import Traffictrend from './Traffictrend'
import Guesttime from './Guesttime'


import { ThemeProvider } from "styled-components";

const config = {
    width: "450px",
    height: "600px",
    floating: true
};
const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#cc0000",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#cc0000",
    botFontColor: "#fff",
    userBubbleColor: "#cc0000",
    userFontColor: "#fff"
};



class CustomChatbot extends Component {


    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="virtual store assistant"
                    hideBotAvatar="true"
                    botAvatar={logo}
                    recognitionEnable={true}
                    handleEnd={this.handleEnd}
                    steps={[

                        {
                            id: '1',
                            component: <Userinfo name={this.props.username} />,
                            trigger: '4',
                        },
                        {
                            id: '4',
                            component: <Barchart />,
                            trigger: 'Displaying options',
                        },

                        {
                            id: '5',
                            message: 'Great! Click Below To Explore!',
                            trigger: 'Displaying options',
                        },
                        {
                            id: "Displaying options",
                            options: [
                                {
                                    value: "Bar",
                                    label: "store guest traffic",
                                    trigger: '4'
                                },
                                {
                                    value: "Trend",
                                    label: "shopping traffic trends ",
                                    trigger: "shopping trend"
                                },
                                {
                                    value: "React",
                                    label: "reserve time to shop",
                                    trigger: "Book slot"
                                },
                                {
                                    value: "pick",
                                    label: "pick your time",
                                    trigger: "pick"
                                },
                                {
                                    value: "Search",
                                    label: "search by item",
                                    trigger: "Search By Keyword"
                                },
                                {
                                    value: "guest services",
                                    label: "guest services",
                                    trigger: "guest services"
                                },
                                {
                                    value: "rules",
                                    label: "shopping rules @store",
                                    trigger: "rules"
                                },

                                
                                {
                                    value: "need help",
                                    label: "need help",
                                    trigger: "help"
                                },

                            ]
                        },
                        {
                            id: 'rules',
                            component: <Rules />,
                            trigger: "Displaying options",
                        },
                        {
                            id: 'shopping trend',
                            component: <Traffictrend />,
                            trigger: "Displaying options",
                        },
                        {
                            id: 'pick',
                            component: <Guesttime />,
                            trigger: "Displaying options",
                        },
                        {
                            id: 'help',
                            component: <Help />,
                            trigger: "Displaying options",
                        },
                        {
                            id: 'Book slot',
                            message: "available shopping slot of the day! please select slot",
                            trigger: "book available slot"
                        },
                        {
                            id: 'book available slot',
                            component: <Book />,
                            trigger: "Displaying options"
                        },
                        {
                            id: 'guest services',
                            component: <Guestservices />,
                            trigger: "Displaying options",
                        },
                        {
                            id: 'Search By Keyword',
                            message: 'enter item name to check available in store or not.(eg:milk)',
                            trigger: 'search',
                        },
                        {
                            id: 'search',
                            user: true,
                            trigger: 'trigger search',
                        },
                        {
                            id: 'trigger search',
                            component: <Searchitem item={'{previousValue}'} />,
                            trigger: 'Displaying options',
                        },
                    ]} {...config}
                />
            </ThemeProvider>
        );
    }
}

export default CustomChatbot;