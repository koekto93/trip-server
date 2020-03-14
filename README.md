### Запуск

```js
yarn dev
```

### Требования

- Созданный аккаунт и база данных на [сайте](https://mlab.com/home)
- Создать в корне папку config -> db.js с кодом:

```js
module.exports = {
  url: 'mongodb://user:password@ds251804.mlab.com:51804/notesdb',
};
```

#### [Мануал из habr](https://habr.com/company/ruvds/blog/321104/)

#### Запуск.

http-server запустить с помощью шортката http-server.cmd из папки в области видимости папки ./public
mac

запуск сервиса
brew services start mongodb-community@4.0

---

Винда

Нужна версия робомонги 1.3 бета

Из командной строки винды

Если редис установлен криво, то

```js
'C:\Program Files\Redis\redis-server.exe';
```

```js
"C:\Program Files\MongoDB\Server\4.1\bin\mongod.exe" --dbpath="c:\data\db"
"C:\Program Files\MongoDB\Server\4.1\bin\mongo.exe"
```

запустить сервер из проекта /trip-server yarn start
