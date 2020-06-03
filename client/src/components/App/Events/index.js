import dayjs from 'dayjs';
import 'dayjs/locale/es';
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import OuterLink from '../../shared/OuterLink';
import Pin from '../../shared/Pin';
import { Background, BackgroundFooter, Container, Content, EventBox } from './styled';

dayjs.locale('es');

const getNextMeetups = async () => {
  const url =
    'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/freeCodeCampEvents';
  const { data } = await (await fetch(url)).json();
  return data;
};

const Events = () => {
  const [nextEvent, setNextEvent] = useState(null);
  const [status, setStatus] = useState('loading');
  const [marker, setMarker] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    zoom: 13,
    latitude: -34.6037389,
    longitude: -58.3815704
  });

  useEffect(() => {
    getNextMeetups()
      .then(async events => {
        if (!events.length) return setStatus('No events');
        const [event] = events;

        setNextEvent(event);
        setMarker({ latitude: event.venue.lat, longitude: event.venue.lon });
        setViewport({ ...viewport, latitude: event.venue.lat, longitude: event.venue.lon });
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <Container id='events'>
      <Background />

      <Content>
        <h3>Próximos encuentros</h3>

        {status === 'loading' && <h4>Cargando eventos...</h4>}

        {status === 'No events' && (
          // POST CONF usar: https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550623193/undraw_events_2p66_cwypdc.png
          <div className='organizing'>
            <a
              aria-label='freeCodeCampBA Conf 2020'
              href='https://freecodecampba.org/conf2020'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='Estamos organizando nuestra primera conferencia virtual!'
                src='https://ik.imagekit.io/di61zq8lsy/og-fccba-conf-2020_LLHtp3I_F.png'
              />
            </a>
            <h4>
              Estamos organizando nuestra primera <strong>conferencia virtual</strong>!
            </h4>
          </div>
        )}

        {status === 'error' && <h4>No pudimos cargar los futuros meetups</h4>}

        {status === 'success' && (
          <EventBox>
            <EventBox.Left>
              <h4>{nextEvent.name}</h4>

              <div className='info'>
                <h5>Fecha</h5>
                <p>{dayjs(nextEvent.time).format('dddd D [de] MMMM [a las] H[hs]')}</p>
              </div>

              <div className='info'>
                <h5>Lugar</h5>
                <p>{nextEvent.venue.name}</p>
              </div>

              <div className='info'>
                <h5>Dirección</h5>
                <p>{nextEvent.venue.address_1}</p>
              </div>

              <OuterLink href={nextEvent.link}>Inscribite</OuterLink>
            </EventBox.Left>
            <EventBox.Right>
              <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                mapStyle='mapbox://styles/mapbox/streets-v9'
                mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
              >
                {marker && (
                  <Marker longitude={marker.longitude} latitude={marker.latitude}>
                    <Pin size={20} />
                  </Marker>
                )}
              </ReactMapGL>
            </EventBox.Right>
          </EventBox>
        )}
      </Content>

      <BackgroundFooter />
    </Container>
  );
};

export default Events;
