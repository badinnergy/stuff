import React from 'react'

export default function Info() {
  return (
    <div style={style.container}>
        <h1>Tentang Aplikasi</h1>
        <p>
            Dibina menggunakan <a href={{https:'//reactjs.org/'}}>React</a>, <a href={{http:'//projects.wojtekmaj.pl/react-clock/'}}>React-Clock</a>, <a href={{https:'//pvoznyuk.github.io/react-live-clock/'}}>React-Live-Clock</a> dan <a href={{https:'//material-ui.com/'}}>Material-UI</a>
        </p>
    </div>
  )
}

const style = {
    container: {
        textAlign: 'center',
        marginTop: '10%',
    }
}
