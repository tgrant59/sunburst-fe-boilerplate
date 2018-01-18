import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import 'sanitize.css/sanitize.css'

/* eslint-disable import/no-unresolved */
import '!file-loader?name=[name].[ext]!./assets/favicons/android-chrome-192x192.png'
import '!file-loader?name=[name].[ext]!./assets/favicons/android-chrome-512x512.png'
import '!file-loader?name=[name].[ext]!./assets/favicons/apple-touch-icon.png'
import '!file-loader?name=[name].[ext]!./assets/favicons/browserconfig.xml'
import '!file-loader?name=[name].[ext]!./assets/favicons/favicon.ico'
import '!file-loader?name=[name].[ext]!./assets/favicons/favicon-16x16.png'
import '!file-loader?name=[name].[ext]!./assets/favicons/favicon-32x32.png'
import '!file-loader?name=[name].[ext]!./assets/favicons/manifest.json'
import '!file-loader?name=[name].[ext]!./assets/favicons/mstile-150x150.png'
import '!file-loader?name=[name].[ext]!./assets/favicons/safari-pinned-tab.svg'
/* eslint-enable import/no-unresolved */

import App from 'containers/App'

import './styles/global-styles'
import configureStore from './utils/configureStore'
import './utils/fontLoaders'

// Create redux store with history
const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('app')

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        MOUNT_NODE,
    )
}

if (module.hot) {
    // Hot reloadable React components
    // modules.hot.accept does not accept dynamic dependencies,
    // have to be constants at compile-time
    module.hot.accept(['containers/App'], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
    })
}

render()
