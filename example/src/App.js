import React from 'react';
import { SimpleComponent } from 'webpack-lib';

export default class App extends React.Component {
    render(){
        return (
            <div>
                window
                <SimpleComponent />
            </div>
            )
    }
}