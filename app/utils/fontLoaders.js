import FontFaceObserver from 'fontfaceobserver'

const sourceSansProObserver = new FontFaceObserver('Source Sans Pro', {})
sourceSansProObserver.load().then(
    () => {
        document.body.classList.add('sourceSansProLoaded')
    },
    () => {
        document.body.classList.remove('sourceSansProLoaded')
    },
)
