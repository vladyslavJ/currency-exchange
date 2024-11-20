'use strict';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json()); // middleware для парсингу JSON-даних у вхідних запитах
//app.use() додає цей middleware до всіх обробників маршрутів

app.get('/', (res) => res.send('<h1>pipipupu</h1>')); // обробляє GET-запит на кореневий маршрут

app.post('/mail', (req, res) => {
	// обробляє POST-запит на маршрут /mail
	const { email, message } = req.body;
	return res.json({ result: 'foo?' }); // відповідає клієнту JSON-об'єктом
});
