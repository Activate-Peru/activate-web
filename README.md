# Activate Web

Repositorio web de Actívate Perú. Se plantea la arquitectura front y buenas prácticas.

## Tech stack

- ES6, ES7, ...
- React (hooks) - ui render
- Redux - state management
- Typescript - typado del código
- Axios - http requests
- Mocha, Jasmin

## Metodología: Scrum Master + Agile

- Stand up Daily Meetings
- User stories (points per user story), subtasks, spikes
- Demo - enterable por cada sprint
- Backlog
- Sprint Planning (2 weeks)
- Project Planning (3 months)
- Bugs
- Product Owner (3 equipos)
- Scrum master (lleva a cabo las ceremonias)

## Task Management

- Trello

## CI y CD (por definir)

- Gitlab
- Bitbucket
- Jenkins

## Ambientes:

- Dev
- QA
- Beta
- Production

## Testing

- Jest
- Jasmin
- Mocha

## Analytics (por definir)

- Google
- New Relic
- Sentry

## Medidad de rendimiento

- Why did you render - contador de renders
- Perfiles de memoria y network requests

## Javascript version

- ES6, ES7, …

## Code Styling Guide:

- Airbnb

## Enumeración de versiones

- Usaremos [Semantic Versioning](https://semver.org/) para incrementar el númerp de versión del proyecto
- Se resume en lo siguiente:
  - MAJOR: se ha realizado un cambio que hace incompatible el API,
  - MINOR: se ha añadido funcionalidad que es compatible con las versiones anteriores
  - PATCH: corriges/arreglas un bug que es compatible hacia atrás

## ¿Cómo desarrollar una nueva funcionalidad?

- Comenzar desde master. Hacer un checkout (git checkout -b <em>nombre de la nueva rama</em>)
- El <em>nombre de la nueva rama</em> debe contener su nombre de usuario y el la funcionalidad en la que va a trabajar
- Ejemplos: steveleec/desarrollo-del-componente-buscador
- Cuando se tiene lista la funcionalidad, crear un Pull Request en contra del branch <strong>dev</strong>. El <strong>master</strong> branch está restringido

## Recursos de aprendizaje

#### Javascript

- [You don't know JS](https://github.com/getify/You-Dont-Know-JS)

#### React hooks

- [Hooks](https://www.adictosaltrabajo.com/2020/02/06/react-hooks-tutorial/)

#### Redux

- [Redux en español](https://es.redux.js.org/)
- [Tutorial de Redux](https://code.tutsplus.com/es/tutorials/getting-started-with-redux-learn-by-example--cms-30350)

#### React y typescript

- [Crea un proyecto usando typescript](https://www.youtube.com/watch?v=bmZKIMjJTjs)
- [Typescript para principiantes](https://code.tutsplus.com/es/tutorials/typescript-for-beginners-getting-started--cms-29329)

## Recursos de aprendizaje opcionales

#### Desarollo de herramientas internas

- [Herramientas internas](https://link.medium.com/iaJ6MVKO45)

#### Planteamiento del ambiente de dev

- [Desarrollo del ambiente dev](https://link.medium.com/iZVCRGNO45)
