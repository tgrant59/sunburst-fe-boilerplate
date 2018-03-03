import { injectGlobal } from 'styled-components'

import { colors } from 'styles'

/* eslint no-unused-expressions: 0 */

injectGlobal`
    html,
    body {
        height: 100%;
        width: 100%;
    }

    body {
        color: ${colors.basic.BLACK};
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    body.sourceSansProLoaded {
        font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
`
