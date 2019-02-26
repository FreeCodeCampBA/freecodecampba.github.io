import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import { Container, Background, BackgroundFooter, Content, EventBox } from './styled'

dayjs.locale('es')

const getNextMeetups = async () => {
  const url = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/freeCodeCampEvents'

  const response = await fetch(url)
  const { data } = await response.json()

  return data
}

const Events = () => {
  const [nextEvents, setNextEvents] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    getNextMeetups()
      .then(events => {
        if (!events.length) return setStatus('No events')

        setNextEvents(events)
        setStatus('success')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <Container id="events">
      <Background />

      <Content>
        <h3>Próximos encuentros</h3>

        {status === 'loading' && <h4>Cargando eventos...</h4>}

        {status === 'No events' && (
          <div className="organizing">
            <img
              alt="Estamos organizando futuros meetups"
              src="https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550623193/undraw_events_2p66_cwypdc.png"
            />
            <h4>Estamos organizando futuros meetups</h4>
          </div>
        )}

        {status === 'error' && <h4>No pudimos cargar los futuros meetups</h4>}

        {status === 'success' && (
          <EventBox>
            <EventBox.Left>
              <h4>freeCodeCampBA S02E01</h4>

              <div className="info">
                <h5>Fecha:</h5>
                <p>{dayjs(nextEvents[0].time).format('dddd DD[/]MM[/]YY')}</p>
              </div>

              <div className="info">
                <h5>Horario:</h5>
                <p>{dayjs(nextEvents[0].time).format('hh:mmA')}</p>
              </div>

              <div className="info">
                <h5>Lugar:</h5>
                <p>
                  {nextEvents[0].venue.name} ({nextEvents[0].venue.address_1})
                </p>
              </div>

              <a href={nextEvents[0].link} target="_blank" rel="noopener noreferrer">
                Inscribite
              </a>
            </EventBox.Left>
            <EventBox.Right>
              <iframe
                src={`https://maps.google.com/maps?q=${nextEvents[0].venue.lat},${
                  nextEvents[0].venue.lon
                }&hl=en&z=14&amp;output=embed`}
                width="100%"
                height="335"
                title="map"
                frameBorder="0"
                allowFullScreen
              />
            </EventBox.Right>
          </EventBox>
        )}
      </Content>

      <BackgroundFooter />
    </Container>
  )
}

export default Events
