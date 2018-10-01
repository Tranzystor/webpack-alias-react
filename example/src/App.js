import React from 'react';
import { SimpleComponent } from 'webpack-alias-react';

export default class App extends React.Component {
    render(){
        return (
            <div>
                react App
                <SimpleComponent />
            </div>
            )
    }
}